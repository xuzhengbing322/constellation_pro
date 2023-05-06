<template>
  <!-- 自定义组件 v-nav-current实现动态样式切换-->
  <div
    class="nav-bar"
    v-nav-current="{
      className: 'nav-item',
      activeClass: 'nav-current',
      curIdx,
    }"
    @click="navClick($event)"
  >
    <div class="scroll-wrapper">
      <div class="nav-wrapper" :style="`width: ${navData.length * 0.8}rem`">
        <nav-item
          v-for="(item, index) of navData"
          :key="index"
          :item="item"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import navData from "@/datas/nav";
import NavItem from "./NavItem.vue";
import { navCurrent } from "@/directives/index";

import { ref } from "vue";
import { useStore } from 'vuex';
import  getData  from '@/services/index.js';

export default {
  name: "NavBar",
  components: {
    NavItem,
  },
  directives: {
    navCurrent,
  },
  setup() {
    const curIdx = ref(0),
          store = useStore();

    const navClick = (e) => {
      const className = e.target.className;

      if (className === "nav-item") {
        // 获取点击的选项的index。因为选项中绑定了data-index。
        const tar = e.target,
              idx = tar.dataset.index,
            // 获取选项组件的名称，星座名，用于更改state中的consName
              consName = tar.innerText;
       
        curIdx.value = idx;
        store.commit('setConsName', consName);
        getData(store)
      }
    };

    return {
      navData,
      curIdx,
      navClick,
    };
  },
};
</script>


<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  top: 0.44rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.38rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;

  .scroll-wrapper {
    height: 0.46rem;
    overflow-x: auto;

    .nav-wrapper {
      display: flex;
      flex-direction: row;
      height: 0.42rem;
    }
  }
}
</style>