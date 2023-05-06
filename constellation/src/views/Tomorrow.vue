<template>
  <div class="container">
    <cons-card :name="tomorrowData.name" :allIndex="tomorrowData.all" />
    <cons-list :data="tomorrowData" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import getData from "@/services/index.js";
import { computed, onMounted, ref, onActivated } from "vue";

import ConsList from "@/components/List/Tomorrow";

export default {
  name: "TomorrowPage",
  components: {
    ConsList,
  },
  setup() {
    const store = useStore(),
      state = store.state,
      status = ref("");

    onMounted(() => {
      getData(store);
      status.value = state.consName;
    });

    onActivated(() => {
      if (status.value !== state.consName) {
        getData(store);
        status.value = state.consName;
      }
    });

    return {
      tomorrowData: computed(() => state.tomorrow),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>