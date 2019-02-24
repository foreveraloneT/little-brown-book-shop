import createLogger from 'vuex/dist/logger'

const logger = createLogger({
  collapsed: false // auto-expand logged mutations
})

export default logger
