import { createStore } from 'vuex';
import state from '@/store/state.js';
import mutations from '@/store/mutations.js';

export default createStore({
  state,
  mutations,
})
