import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faAngleUp, faAngleDown, faEthernet, faBars, faCog } from '@fortawesome/free-solid-svg-icons'

import draggable from 'vuedraggable'

import 'noto-sans-tc/noto_sans_tc_regular/css.css'
import './style/style.styl'

import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'UA-168191790-1' }
})

library.add(faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faAngleUp, faAngleDown, faEthernet, faBars, faCog)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('draggable', draggable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
