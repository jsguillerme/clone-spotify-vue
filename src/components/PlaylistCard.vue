<template>
  <div  @mouseover="notHiddenButtonPlay" @mouseleave="hiddenButtonPlay" class="w-44 h-64 p-2 flex flex-col items-start justify-center gap-2 hover:bg-zinc-800 hover:cursor-pointer transition-all duration-150 text-white rounded-lg relative overflow-hidden" >
    <img :src="playlist.cover" alt="cover music" class="rounded-lg self-center" />
    
    <button v-if="showButtonPlay" class="h-14 w-14 rounded-full bg-green-500 outline-none border-none flex items-center justify-center text-black text-xl shadow-2xl drop-shadow-2xl absolute right-4 animate-fadeUp">
      <font-awesome-icon icon="fa-solid fa-play" />
    </button>

    <h2 class="font-bold truncate max-w-[160px]">{{playlist.song}}</h2>

    <p class="truncate max-w-[140px] text-sm text-zinc-400">{{playlist.description}}</p>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {faker} from '@faker-js/faker'

export default defineComponent({
  name: 'PlaylistCard',
  data() {
    return {
      playlist: {
        song: faker.music.songName(),
        cover: faker.image.urlPicsumPhotos({width: 147, height: 147}),
        artist: faker.person.fullName(),
        description: faker.lorem.text()
      },
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