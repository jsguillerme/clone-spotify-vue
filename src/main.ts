import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, 
  faHouse, 
  faBook, 
  faMagnifyingGlass, 
  faHeart, 
  faBroadcastTower, 
  faPlusSquare,
  faCircleDown, 
  faChevronLeft, 
  faPlay,
  faStepBackward,
  faStepForward,
  faPause,
  faRepeat,
  faShuffle,
  faMicrophone,
  faComputer,
  faVolumeHigh,
  faUpRightAndDownLeftFromCenter,
  faListDots
} from '@fortawesome/free-solid-svg-icons'
import {faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

library.add(
  faUser, 
  faSpotify, 
  faHouse, 
  faBook, 
  faMagnifyingGlass, 
  faHeart, 
  faBroadcastTower, 
  faPlusSquare, 
  faCircleDown, 
  faChevronLeft, 
  faPlay, 
  regularHeart,
  faStepBackward,
  faStepForward,
  faPause,
  faRepeat,
  faShuffle,
  faMicrophone,
  faComputer,
  faVolumeHigh,
  faUpRightAndDownLeftFromCenter,
  faListDots
)

import '@/styles/global.css'

const pinia = createPinia()

createApp(App).use(pinia).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
