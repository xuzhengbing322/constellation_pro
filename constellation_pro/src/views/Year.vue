<template>
  <div class="container">
    <cons-card :name="yearData.name" :allIndex="yearData.all" />
    <ConsList :data="yearData" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import getData from "@/services/index.js";
import { computed, onMounted, ref, onActivated } from "vue";

import ConsList from "@/components/List/Year";

export default {
  name: "YearPage",
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
      yearData: computed(() => state.year),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>