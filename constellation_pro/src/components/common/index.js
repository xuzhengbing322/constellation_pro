import ConsCard from '@/components/common/Card.vue';
import ConsItem from '@/components/common/ConsItem.vue';
import ConsSummary from '@/components/common/Summary.vue';

let MyPlugin = {};

MyPlugin.install = function (Vue) {
      Vue.component(ConsCard.name, ConsCard);
      Vue.component(ConsItem.name, ConsItem);
      Vue.component(ConsSummary.name, ConsSummary)
}

export default MyPlugin;