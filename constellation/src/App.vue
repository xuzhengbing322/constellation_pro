<template>
  <div>
    <my-header>星座物语</my-header >
    <nav-bar />
    <ErrorTip />
    <router-view v-slot="{ Component }" v-if="!errorCode">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
    <my-tab></my-tab>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed, watch } from 'vue';

import MyHeader from '@/components/Header';
import MyTab from '@/components/Tab/index.vue';
import NavBar from '@/components/NavBar/index.vue';
import ErrorTip from '@/components/ErrorTip';


export default {
  name: 'App',
  components: {
    MyHeader,
    MyTab,
    NavBar,
    ErrorTip
  },
  setup(){
    const store = useStore(),
          state = store.state,
          router = useRouter();

    // 刷新的时候回到首页
    router.push('/');
    store.commit('setField', 'today')

    // 在路由渲染的组件中，可以通过监听路由名称的改变，来监听路由跳转。路由的名称和state中的field值相同，路由跳转时就进行赋值。
    watch(() => {
      return router.currentRoute.value.name;
    }, (value) => {
      state.field = value;
    })

    return {
      errorCode: computed(() => state.errorCode)
    }
  }
  
}
</script>
