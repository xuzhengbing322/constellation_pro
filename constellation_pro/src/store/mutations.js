export default {
      setConsName(state, consName){
            state.consName = consName;
      },

      setField(state, field){
            state.field = field;
      },

      setErrorCode(state, errorCode){
            state.errorCode = errorCode;
      },

      /*
      路由组件加载或跳转的时候，field就会更改为路由组件的name。
      然后根据field请求数据，并将请求的数据data传给state中field变量值所对应的属性。
      实现逻辑的关键是：路由组件的名称 和 请求数据的参数 和 state中存储数据的属性 名称相同。
      */ 
      setData(state, data) {
            state[state.field] = data
      }
}