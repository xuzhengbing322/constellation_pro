<template>
  <div class="container">
        <cons-card 
            :name="todayData.name"
            :allIndex="todayData.all"
        />
        <num-list :data="todayData"/>
        <cons-list :data="todayData"/>
  </div>
</template>

<script>
import {  useStore } from 'vuex';
import getData from '@/services/index.js';
import { computed, onMounted, ref, onActivated } from 'vue';

import NumList from '@/components/NumList/index.vue';
import ConsList from '@/components/List/TodayList.vue'


export default {
      name: 'TodayPage',
      components: {
            NumList,
            ConsList
      },
      setup(){
            const store = useStore(),
                  state = store.state,
                  status = ref('');

            onMounted(() => {
                  getData(store);
                  status.value = state.consName;    
            });

            onActivated(() => {
                  if(status.value !== state.consName) {
                        getData(store);
                        status.value = state.consName;
                  }
            })
            
            return {
                  todayData: computed(() => state.today)
            }
      }
}
</script>

<style lang="scss" scoped>
</style>