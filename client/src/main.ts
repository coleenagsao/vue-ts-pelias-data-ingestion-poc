import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
library.add(faDatabase)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

