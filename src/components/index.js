import YthButton from './YthButton'

const components = [
  YthButton
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
