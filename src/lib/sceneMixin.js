import TWEEN from '@tweenjs/tween.js'
import { 
  Font, 
  Scene, 
  Object3D, 
  PerspectiveCamera, 
  Vector3, 
  DirectionalLight, 
  AmbientLight, 
  AxesHelper, 
  Raycaster, 
  TextureLoader, 
  BoxGeometry, 
  MeshBasicMaterial, 
  BackSide, 
  Mesh, 
  MeshLambertMaterial, 
  TextGeometry, 
  Shape, 
  Texture, 
  PlaneGeometry, 
  WebGLRenderer,
  Vector2
} from 'three';
//import * as THREE from 'three/build/module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import fontJson from '../assets/helvetiker_regular.typeface.json'
const font = new Font(fontJson)

let camera, controls, skyBox, glRenderer, cssRenderer, glScene, cssScene, axesHelper

export default {

  name: 'Scene',
  props: {
    hashLevel: Number,
    viewId: String,
    width: {
      type: Number,
      default: undefined
    },
    height: {
      type: Number,
      default: undefined
    }
  },
  data() {
    return {
      skyboxArray: [],
      orbit: false,
      glModelObject3D: null,
      cssModelObject3D: null,
      selectableMeshArr: [],
      heighlight: false
    }
  },
  methods: {
    onOrbit() {
      this.orbit = !this.orbit
      controls.autoRotate = this.orbit
    },
    onResize(x, y) {
      // add event liteners https://stackoverflow.com/questions/49380830/vue-js-how-to-get-window-size-whenever-it-changes
      if (!glRenderer) return
      if (this.width === undefined || this.height === undefined) {
        // console.log('this.$el', this.$el)
        let rect = this.$el.getBoundingClientRect()
        console.log(rect)
        camera.aspect = rect.width / rect.height
        camera.updateProjectionMatrix()
        glRenderer.setSize(rect.width, rect.height)
        cssRenderer.setSize(rect.width, rect.height)
        this.render()
      } else {
        glRenderer.setSize(this.width, this.height)
        cssRenderer.setSize(this.width, this.height)
      }
    },
    getSceneIndexByKey(key) {
      for (let i = 0; i < this.scenes.length; i++) {
        if (this.scenes[i].key === key) {
          return i
        }
      }
      return -1
    },
    loadScene() {
      // world
      glScene = new Scene()
      this.glModelObject3D = new Object3D()
      glScene.add(this.glModelObject3D)

      cssScene = new Scene();
      this.cssModelObject3D = new Object3D()
      cssScene.add(this.cssModelObject3D)


      // camera
      camera = new PerspectiveCamera(60, 3 / 2, 1, 100000)
      camera.position.z = 4000

      // glRenderer
      glRenderer = this.createGlRenderer()
      cssRenderer = this.createCssRenderer()

      this.$el.appendChild(cssRenderer.domElement);
      cssRenderer.domElement.appendChild(glRenderer.domElement);

      // controls
      //controls = new OrbitControls(camera, glRenderer.domElement)
      controls = new OrbitControls(camera, this.$el)
      controls.autoRotateSpeed = 0.125
      controls.minPolarAngle = Math.PI / 4
      controls.maxPolarAngle = Math.PI / 1.5
      controls.screenSpacePanning = true;
      controls.enableDamping = true;

      /*       controls.enableZoom = false
      
            this.$el.addEventListener( 'wheel', evnet => {
              event.preventDefault();
              event.stopPropagation();
              let moveCameraVec = new Vector3()
              camera.getWorldDirection(moveCameraVec)
              moveCameraVec.multiplyScalar ( event.deltaY > 0 ? 100 : -100)
      
              var newCameraPos = camera.position.clone().add( moveCameraVec );
              controls.object.position.set(newCameraPos.x, newCameraPos.y, newCameraPos.z)
      
            }, false ); */

      // lights
      let light1 = new DirectionalLight(0xffffff)
      light1.position.set(-1, 1, 1).normalize()
      glScene.add(light1)
      let light2 = new AmbientLight(0x404040)
      glScene.add(light2)

      // axesHelper
      axesHelper = new AxesHelper(100)
      glScene.add(axesHelper)

      // raycaster
      this.raycaster = new Raycaster()

      let loader = new TextureLoader();
      // See https://stemkoski.github.io/js/Skybox.html
      if (this.skyboxArray.length === 6) {
        let skyGeometry = new BoxGeometry(50000, 50000, 50000)
        let materialArray = []
        for (let i = 0; i < 6; i++) {
          materialArray.push(new MeshBasicMaterial({
            map: loader.load(this.skyboxArray[i]),
            side: BackSide
          }))
        }
        skyBox = new Mesh(skyGeometry, materialArray)
        glScene.add(skyBox)
      }

      // else see http://threejs.org/examples/webgl_multiple_views.html

      glScene.name = 'Boilerplate'
      this.$el.addEventListener('click', this.onClick, false)

      this.$nextTick(() => this.$nextTick(() => this.onResize()))
      this.render()
      this.animate()
    },
    render() {
      glRenderer.render(glScene, camera)
      cssRenderer.render(cssScene, camera)
    },

    animate() {
      requestAnimationFrame(this.animate.bind(this))
      TWEEN.update()
      skyBox.position.set(camera.position.x, camera.position.y, camera.position.z) // keep skybox centred around the camera
      controls.update()
      axesHelper.position.set(controls.target.x, controls.target.y, controls.target.z)
      glRenderer.render(glScene, camera)
      cssRenderer.render(cssScene, camera)
    },
    onClick(event) {
      // see https://threejs.org/docs/#api/core/Raycaster.setFromCamera
      event.preventDefault()

      // get 2D coordinates of the mouse, in normalized device coordinates (NDC)
      let box = event.target.getBoundingClientRect()
      let x = (event.offsetX / box.width) * 2 - 1
      let y = -(event.offsetY / box.height) * 2 + 1
      let mouse = new Vector2(x, y)

      // update the picking ray with the camera and mouse position
      this.raycaster.setFromCamera(mouse, camera)
      let intersects = this.raycaster.intersectObjects(this.selectableMeshArr)
      if (intersects.length > 0) {
        let selectedMesh = intersects[0].object
        // let normal = intersects[0].face.normal
        // console.log(normal)
        // let normalMatrix = new Matrix3().getNormalMatrix(selectedMesh.matrixWorld)
        // console.log(normal.clone().applyMatrix3(normalMatrix).normalize())
        this.$store.commit('SET_PAGE_STATE2', {
          level: this.level,
          selectedObjId: selectedMesh.parent.key
        })
      }
    },
    highlight(newVal, oldVal) {
      if (!this.heighlight) return
      let currentlySelected = this.glModelObject3D.getObjectByProperty('key', oldVal)
      if (currentlySelected) {
        currentlySelected.children[0].material = currentlySelected.getMaterial()
        currentlySelected.children[1].material = new MeshLambertMaterial({ color: 0xEFEFEF })
      }
      let newlySelected = this.glModelObject3D.getObjectByProperty('key', newVal)
      if (newlySelected) {
        newlySelected.children[0].material = new MeshLambertMaterial({ color: 0xEEEE00 })
        newlySelected.children[1].material = new MeshLambertMaterial({ color: 0x666666 })
      }
    },
    moveCameraToPos(key) {
      let selectedModelObj = this.glModelObject3D.getObjectByProperty('key', key)
      if (!selectedModelObj) return
      if (!glScene) return
      // console.log('selectedModelObj', selectedModelObj)
      glScene.updateMatrixWorld()
      let newTargetPos = new Vector3()
      newTargetPos.setFromMatrixPosition(selectedModelObj.matrixWorld)

      new TWEEN.Tween(controls.target).easing(TWEEN.Easing.Quadratic.Out).to(newTargetPos, 1500).start()

      let cameraPos = controls.object.position.clone()
      let newCameraPos = newTargetPos.clone()

      newCameraPos.setY(newCameraPos.y + 300)
      if (selectedModelObj.rotation.y > 0) newCameraPos.setX(newCameraPos.x + 2000)
      else newCameraPos.setZ(newCameraPos.z + 2000)

      let cameraTween = new TWEEN.Tween(cameraPos).to(newCameraPos, 1500)
      cameraTween.easing(TWEEN.Easing.Quadratic.Out)
      cameraTween.onUpdate(() => {
        // console.log('cameraPos', cameraPos)
        controls.object.position.set(cameraPos.x, cameraPos.y, cameraPos.z)
      })
      cameraTween.start()
    },
    addLoadingText(text) {
      let textMaterial = new MeshLambertMaterial({ color: 0xEFEFEF })
      let text3d = new TextGeometry(text || 'Loading...', { size: 200, font: font })
      text3d.center()
      let textMesh = new Mesh(text3d, textMaterial)
      textMesh.name = 'Loading Message'
      textMesh.position.set(0, 400, 0)
      glScene.add(textMesh)
    },
    removeLoadingText() {
      let mesh = glScene.getObjectByName('Loading Message')

      glScene.remove(mesh)
    },
    getRoundedRectShape(width, height, radius) {
      const roundedRect = (ctx, width, height, radius) => {
        const x = 0
        const y = 0
        ctx.moveTo(x, y + radius)
        ctx.lineTo(x, y + height - radius)
        ctx.quadraticCurveTo(x, y + height, x + radius, y + height)
        ctx.lineTo(x + width - radius, y + height)
        ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius)
        ctx.lineTo(x + width, y + radius)
        ctx.quadraticCurveTo(x + width, y, x + width - radius, y)
        ctx.lineTo(x + radius, y)
        ctx.quadraticCurveTo(x, y, x, y + radius)
      }
      // Rounded rectangle
      let roundedRectShape = new Shape()
      roundedRect(roundedRectShape, width, height, radius) // negative numbers not allowed
      return roundedRectShape
    },

    makeCanvasLabel: function (text, maxWidth, size, color, backgroundColor) {
      let canvas = document.createElement("canvas");
      let textCtx = canvas.getContext("2d");
      let lineHeight = size + 10
      textCtx.font = size + "pt Arial";

      //http://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/
      let words = text.split(' ');
      let line = '';
      let linesArr = []
      let canvasHeight = lineHeight + 8 + 20 // add margins
      let canvasWidth, curWidth
      for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        let metrics = textCtx.measureText(testLine);
        let testWidth = metrics.width;
        curWidth = testWidth
        if (testWidth > maxWidth && n > 0) {
          linesArr.push(line.trim())
          line = words[n] + ' ';
          canvasHeight += lineHeight;
        }
        else {
          let width = textCtx.measureText(line.trim());
          canvasWidth = width > curWidth ? width : curWidth
          line = testLine;
        }
      }
      linesArr.push(line.trim())
      canvasWidth += 20 // add margins

      textCtx.canvas.width = canvasWidth;
      textCtx.canvas.height = canvasHeight;

      // Create a rounded rect background if required
      if (backgroundColor) {
        let radius = 20
        textCtx.fillStyle = backgroundColor;
        textCtx.beginPath();
        textCtx.moveTo(canvasWidth - radius, 0); // Create a starting point
        textCtx.arcTo(canvasWidth, 0, canvasWidth, radius, radius);
        textCtx.lineTo(canvasWidth, canvasHeight - radius);
        textCtx.arcTo(canvasWidth, canvasHeight, canvasWidth - radius, canvasHeight, radius);
        textCtx.lineTo(canvasWidth - radius, canvasHeight);
        textCtx.arcTo(0, canvasHeight, 0, canvasHeight - radius, radius);
        textCtx.lineTo(0, canvasHeight - radius);
        textCtx.arcTo(0, 0, radius, 0, radius);
        textCtx.closePath(); // Close it
        textCtx.fillStyle = backgroundColor;
        textCtx.fill() // Fill it
        textCtx.strokeStyle = 'grey';
        textCtx.lineWidth = 3;
        textCtx.stroke();// Draw it
      }

      textCtx.font = size + "pt Arial";
      textCtx.textAlign = "center"; // TODO left aligned
      textCtx.fillStyle = color;
      let y = lineHeight
      for (let n = 0; n < linesArr.length; n++) {
        textCtx.fillText(linesArr[n], textCtx.canvas.width / 2, y + 10);
        y += lineHeight;
      }

      let texture = new Texture(canvas);
      texture.needsUpdate = true;

      let material = new MeshBasicMaterial({
        map: texture,
        transparent: true
      });
      return new Mesh(new PlaneGeometry(canvasWidth, canvasHeight, 10, 10), material);
      
    },
    ///////////////////////////////////////////////////////////////////
    // Creates WebGL Renderer
    //
    ///////////////////////////////////////////////////////////////////
    createGlRenderer: function () {

      var glRenderer = new WebGLRenderer({ antialias: true, alpha: true });

      glRenderer.setClearColor(0xECF8FF);
      glRenderer.setPixelRatio(window.devicePixelRatio);
      //glRenderer.setSize(window.innerWidth, window.innerHeight);

      glRenderer.domElement.style.position = 'absolute';
      //glRenderer.domElement.style.zIndex = -1;
      glRenderer.domElement.style.top = 0;
      glRenderer.domElement.style.pointerEvents = 'none'
      glRenderer.domElement.setAttribute("name", "GLRENDERER");

      //window.addEventListener('mousemove', this.mouseMove, false);

      return glRenderer;
    },

    ///////////////////////////////////////////////////////////////////
    // Creates CSS Renderer
    //
    ///////////////////////////////////////////////////////////////////
    createCssRenderer: function () {

      var cssRenderer = new CSS3DRenderer();

      //cssRenderer.setSize(window.innerWidth, window.innerHeight);

      cssRenderer.domElement.style.position = 'absolute';
      //cssRenderer.domElement.style.zIndex = 0;
      cssRenderer.domElement.style.top = 0;
      //cssRenderer.domElement.style.pointerEvents	= 'auto'
      cssRenderer.domElement.setAttribute("name", "CSSRENDERER");



      return cssRenderer;
    },

    handleHashChange: function () {
      const ourLevelArr = window.location.hash.split("/")[this.hashLevel + 1];
      if (!ourLevelArr) return;
      const levelStates = ourLevelArr.split(".");
      let selectedObjId = levelStates[0]
      //this.highlight(newVal, oldVal)
      this.moveCameraToPos(selectedObjId)
    },
  },

  mounted() {
    this.loadScene()

    window.addEventListener("hashchange", this.handleHashChange, false);
    this.handleHashChange();

    window.addEventListener("resize", this.onResize);
    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener("hashchange", this.handleHashChange, false);
    window.removeEventListener("resize", this.onResize);
  },
}