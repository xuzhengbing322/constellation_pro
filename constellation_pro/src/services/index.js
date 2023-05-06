import { getData } from '@/services/request.js';

// 处理请求的数据
export default async (store) => {
      const consName = store.state.consName,
            field = store.state.field,
            data = await getData(consName, field);

      if (data.error_code) {
            store.commit('setErrorCode', data.error_code);
            return;
      };

      store.commit('setData', data);
}