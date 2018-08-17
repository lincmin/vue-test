Vue.component('pane', {
  name: 'pane',
  template: '#pane',
  props: {
    name: {
      type: String
    },
    label: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      show: true
    }
  },
  methods: {
    updateNav() {
      this.$parent.updateNav()
    }
  },
  watch: {
    label() {
      this.updateNav()
    }
  },
  mounted() {
    this.updateNav()
  }
})