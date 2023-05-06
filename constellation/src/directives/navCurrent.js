export default {
      // 当组件挂载的时候执行。el：自定义指令绑定的标签。binding：自定义指令的配置项。
      mounted (el, binding) {
            // className：选项组件。activeClass：动态样式。curIdx：点击的选项。
            const { className, activeClass, curIdx } = binding.value,
                  // 获取所有的选项组件。
                  oNavItems = el.getElementsByClassName(className);

            //  给curIdx初始选项组件添加样式。选项组件只有一个div标签。
            oNavItems[curIdx].className += ` ${activeClass}`;
      },
      // 当curIdx改变的时候执行
      updated(el, binding) {
            // 获取新的className, activeClass, curIdx
            const { className, activeClass, curIdx } = binding.value,
                  // 获取改变以前的binding对象
                  oOptions = binding.oldValue,
                  oNavItems = el.getElementsByClassName(className);
                  // 给新的curIdx选项组件添加动态样式。
                  oNavItems[curIdx].className += ` ${activeClass}`;
                  // 修改旧的curIdx选项组件的样式
                  oNavItems[oOptions.curIdx].className = className;
      },
}