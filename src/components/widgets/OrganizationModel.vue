<template>
  <div>
    <el-button
      class="fab"
      icon="el-icon-refresh"
      circle
      @click="onOrbit"
    ></el-button>
  </div>
</template>

<script>
import ClassObject3d from "../../lib/classObject3d.js";
import SceneMixin from "../../lib/sceneMixin.js";
import QueryMixin from "../../lib/queryMixin";
import WidgetMixin from "../../lib/widgetMixin";

export default {
  name: "ar-organization-model",
  mixins: [SceneMixin, WidgetMixin, QueryMixin],
  props: {
    hashLevel: Number,
    viewId: String,
  },
  data() {
    return {
      selectedObjId: null,
      skyboxArray: ['grass/sbox_px.jpg','grass/sbox_nx.jpg','grass/sbox_py.jpg','grass/sbox_ny.jpg','grass/sbox_pz.jpg','grass/sbox_nz.jpg']

    }
  },
  methods: {
    // Tell the root class to draw itself, and each of it's subclasses, recursivily
    async drawClasses() {
      // Get the root class from the store

      // Get the viewObj
      const viewObj = await this.$pouch.get(this.viewId);

      // Execute the query
      let resArr = await this.getTheData(viewObj.queryId);

      // Create the ClassObject3d (extends Object3d)
      let rootClassObj3d = new ClassObject3d(resArr[0], true);
      this.glModelObject3D.add(rootClassObj3d);
      this.selectableMeshArr.push(rootClassObj3d.children[0]);

      // Tell root class to draw the subclasses
      await rootClassObj3d.drawSubclasses(
        this.selectableMeshArr,
        this.getTheData,
        '2jfs4is4icct'
      );

      // Set the x positions
      const clidrenMaxX = rootClassObj3d.setPositionX(0);
      rootClassObj3d.translateX(-clidrenMaxX / 2); // move route obj to the center

      // important! after you set positions, otherwise obj3d matrixes will be incorrect
      this.glModelObject3D.updateMatrixWorld(true);

      rootClassObj3d.drawClassAssocs(this.glModelObject3D);

      // Tell root class and its subclasses to draw the objects
      await rootClassObj3d.drawObjects(
        this.selectableMeshArr,
        this.getTheData,
        'x1lrv2xdq2tu'
      );

      // important! after you set positions, otherwise obj3d matrixes will be incorrect
      this.glModelObject3D.updateMatrixWorld(true);

      rootClassObj3d.drawObjectAssocs(this.glModelObject3D);

      return rootClassObj3d;
    },
  },

  mounted: async function () {
    // If we've been here before, assume no redraw nessesary
    //if(this.glScene) return

    this.addLoadingText();

    try {
      //await this.drawClasses();

      this.removeLoadingText();

      if(this.nextLevelSelectedObjId) {
        this.highlight(this.nextLevelSelectedObjId)
        this.moveCameraToPos(this.nextLevelSelectedObjId)
      }
      
    } catch (err) {
      this.removeLoadingText();

      console.error(err);
      this.$message({ message: err, type: "error" });
    }
  },
};
</script>

<style scoped>
.fab {
  position: absolute;
  margin: 10px;
  bottom: 0px;
  right: 0;
  color: #eee;
  background: #e91e63;
  z-index: 20;
}
</style>