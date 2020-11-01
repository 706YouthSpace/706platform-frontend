import YthInput from './YthInput'

const components = [
  YthInput
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
