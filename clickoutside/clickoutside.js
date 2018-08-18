Vue.directive('clickoutside', {
  bind: function (el, binding, vnode) {
    function documentHandler(e) {
      if (el.contains(e.target)) {//判断点击区域是否是指令所在元素内部
        return false
      }
      if (binding.expression) {//判断指令是否有表达式
        binding.value(e)//执行当前上下文methods中指定的函数
      }
    }
    el.__vueClickOutside__ = documentHandler
    document.addEventListener('click', documentHandler)
  },
  unbind: function (el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
})