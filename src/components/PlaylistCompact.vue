<template>
  <a href="#" class="w-[418px] max-w-[418px] h-20 flex items-center bg-gradient-to-r from-slate-500 to-slate-800 rounded-lg text-white font-semibold hover:shadow-2xl hover:brightness-90 hover:transition-all duration-200" @mouseover="notHiddenButtonPlay" @mouseleave="hiddenButtonPlay" >
    <div class="w-3/4 h-full flex items-center justify-start gap-2 ">
      <img :src="cover" alt="cover song" class="object-cover h-20 w-20 rounded-tl-lg rounded-bl-lg">
      <p class="text-ellipsis overflow-hidden w-full">{{name}}</p>
    </div>
    <button v-if="showButtonPlay" class="h-14 w-14 rounded-full bg-green-500 outline-none border-none flex items-center justify-center text-black text-xl hover:shadow-2xl hover:drop-shadow-2xl">
      <font-awesome-icon icon="fa-solid fa-play" />
    </button>
  </a>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'PlaylistCompact',
  props: {
    name: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showButtonPlay: false
    }
  },
  methods: {
    notHiddenButtonPlay() {
      this.showButtonPlay = true
    },
    hiddenButtonPlay() {
      this.showButtonPlay = false
    }
  }

})
</script>