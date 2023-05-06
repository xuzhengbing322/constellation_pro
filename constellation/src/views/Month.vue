<template>
  <div class="container">
        <cons-card 
            :name="monthData.name" 
            :allIndex="Number(monthData.all)" 
      />
  </div>
</template>

<script>
import {  useStore } from 'vuex';
import getData from '@/services/index.js'
import { computed, onMounted, ref, onActivated } from 'vue'

export default {
      name: 'MonthPage',
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
                  monthData: computed(() => state.month) 
            }
      }
}
</script>

<style lang="scss" scoped>
</style>