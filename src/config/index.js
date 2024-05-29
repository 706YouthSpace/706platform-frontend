import devConfig from './dev.conf'
import prodConfig from './prod.conf'

const config = {}

if (process.env.NODE_ENV === 'development') {
  Object.assign(config, devConfig)
} else {
  Object.assign(config, prodConfig)
}

export default config
