<template>
<!-- <div v-if="pageSettings"> -->
  <!-- Tabbar -->
  <div v-if="tabs.length > 1">
    <el-tabs
      :value="pageSettings ? pageSettings.selectedTab : '0'"
      @input="updateHashWithSelectedTab"
    >
      <el-tab-pane
        v-for="(tab, tabNum) in tabs"
        :key="tabNum.toString()"
        :label="tab.name"
        :name="tabNum.toString()"
      >
        <!-- This tab has widgets -->
        <div class="ar-full-height" v-if="tab.widgets">
          <ar-widget-selector
            :hash-level="hashLevel"
            :widgets="tab.widgets"
          ></ar-widget-selector>
        </div>

        <!-- This tab has a sub-page -->
        <div class="ar-full-height" v-if="tab.pageId">
          <ar-layout :hash-level="hashLevel + 1"></ar-layout>
        </div>

      </el-tab-pane>
    </el-tabs>
  </div>
  <!-- </div> -->

  <!-- No tabbar -->
  <div class="ar-full-height" v-else-if="tabs.length === 1">

    <!-- This tab has widgets -->
    <div class="ar-full-height" v-if="tabs[0].widgets">
      <ar-widget-selector
        :hash-level="hashLevel"
        :widgets="tabs[0].widgets"
      ></ar-widget-selector>
    </div>

    <!-- This tab has a sub-page -->
    <div class="ar-full-height" v-if="tabs[0].pageId">
      <ar-layout :hash-level="hashLevel + 1"></ar-layout>
    </div>

  </div>
</template>

<script>
import WidgetSelector from "./WidgetSelector.js";

export default {
  name: "ar-page",
  components: {
    "ar-widget-selector": WidgetSelector,
  },

  props: {
    hashLevel: Number,
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      pageId: String
    }
  },

  pouch: {
    pageSettings: function () {
      return {
        database: "settings",
        selector: { _id: this.pageId },
        first: true,
      };
    },
  },

  methods: {

    // Insert tabNum into hash, for our hashLevel
    updateHashWithSelectedTab(tabNum) {
      let hashArr = window.location.hash.split("/");
      let ourPageStateStr = hashArr[this.hashLevel + 1];
      let ourPageStateArr = ourPageStateStr.split(".");
      // if tabNum is '0' remove it from the hash for esthetic reasons
      if (tabNum === "0" && ourPageStateArr.length === 3)
        ourPageStateArr.splice(2, 1);
      else ourPageStateArr[2] = tabNum;
      ourPageStateStr = ourPageStateArr.join(".");
      hashArr[this.hashLevel + 1] = ourPageStateStr;
      //TODO remove following levels, fill with defaults
      let hash = hashArr.join("/");
      window.location.hash = hash;
    },

    // If the hash provides a selectedTab, use it to set pageSettings for this pageId in the settings db
    async handleHashChange() {
      const ourLevelStr = window.location.hash.split("/")[this.hashLevel + 1];
      if (!ourLevelStr) return;
      const ourLeveArr = ourLevelStr.split(".");
      let selectedTab = ourLeveArr[2];
      if (!selectedTab) selectedTab = "0";
      this.selectedObjId = ourLeveArr[0];
      this.pageId = ourLeveArr[1];

      // Set the selectedTab in pageSetting for this pageId in the settings db
      // This will then be refected in the pageSettings object under pouch
      this.$settings.upsert(this.pageId, (doc) => {
          doc.selectedTab = selectedTab
          return doc
        })
    },
  },

  mounted() {
    window.addEventListener("hashchange", this.handleHashChange, false);
    this.handleHashChange();
  },
  beforeDestroy() {
    window.removeEventListener("hashchange", this.handleHashChange, false);
  },
/*   watch: {
    pageSettings: {
      handler: function (val, oldVal) {
        //console.log(this.pageSettings);
        console.log("new: %s, old: %s", val ? val.selectedTab : false , oldVal ? oldVal.selectedTab : false );
      },
      immediate: true,
    },
  }, */
};
</script>
<style scoped>
.el-tabs {
  height: 100%;
}
.el-tab-pane {
  height: 100%;
}
.ar-widget-selector {
  height: 100%;
}
.ar-layout {
  height: 100%;
}
.el-tabs >>> .el-tabs__header {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 0px;
}
.el-tabs >>> .el-tabs__content {
  height: calc(100% - 40px);
  padding: 0px;
  overflow: auto;
  display: block;
  width: 100%;
}
</style>
