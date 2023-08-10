<template>
  <div class="w-screen h-28 bg-zinc-950 flex items-center justify-between p-10">

    <!-- Cover and Song Name-->
    <div class="flex items-center justify-center gap-5">
      <img :src="image" alt="">
      <span class="flex flex-col items-start justify-center">
        <span class="text-white text-sm font-bold"> {{ song }} </span>
        <span class="text-gray-400 text-xs">{{ artist }}</span>
      </span>
      <button v-if="!isLikedSong" @click="toggleLikeSong">
        <font-awesome-icon icon="fa-regular fa-heart" class="text-sm" color="white" />
      </button>
      <button v-else @click="toggleLikeSong">
        <font-awesome-icon icon="fa-solid fa-heart" class="text-sm text-green-600" />
      </button>
    </div>

    <!-- Player Controls -->
    <div class="flex flex-col items-center justify-center gap-4">
      <div class="flex items-center justify-center gap-8 text-zinc-300 text-2xl">
        <button class="text-emerald-600 relative">
          <font-awesome-icon icon="fa-solid fa-shuffle" />
          <span class="w-2 h-2 rounded-full bg-green-700 absolute -bottom-2 right-2 animate-pulse"></span>
        </button>
        <button>
          <font-awesome-icon icon="fa-solid fa-backward-step" />
        </button>
        <button>
          <font-awesome-icon icon="fa-solid fa-pause" />
        </button>
        <button>
          <font-awesome-icon icon="fa-solid fa-forward-step" />
        </button>
        <button>
          <font-awesome-icon icon="fa-solid fa-repeat" />
        </button>
      </div>
      <div class="text-zinc-500 flex items-center justify-center gap-2">
        <p>1:32</p>
        <div class="w-[280px] h-1 rounded-md relative bg-zinc-700">
          <span class="absolute w-[140px] h-1 bg-zinc-100 rounded-md"></span>
        </div>
        <p>-1:34</p>
        <!-- <input type="range" class="w-96" /> -->
      </div>
    </div>

    <!-- Actions app (no effects) -->
    <div class="flex items-center justify-center gap-3 text-white text-lg">
      <button>
        <font-awesome-icon icon="fa-solid fa-microphone" />
      </button>
      <button>
        <font-awesome-icon icon="fa-solid fa-list-ul" />
      </button>
      <button class="text-emerald-600 relative">
        <font-awesome-icon icon="fa-solid fa-computer" />
        <span class="w-2 h-2 rounded-full bg-green-700 absolute -bottom-2 right-2 animate-pulse"></span>
      </button>
      <button class="flex items-center justify-center gap-2 text-emerald-600">
        <font-awesome-icon icon="fa-solid fa-volume-high" />
        <div class="w-32 h-1 rounded-md relative bg-zinc-700">
          <span class="absolute w-2/3 h-1 bg-emerald-600 left-0 rounded-md"></span>
        </div>
      </button>
      <button>
        <font-awesome-icon icon="fa-solid fa-up-right-and-down-left-from-center" />
      </button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { faker } from '@faker-js/faker';

export default defineComponent({
  name: 'PlayerMusic',
  data() {
    return {
      image: faker.image.urlPicsumPhotos({ height: 64, width: 64 }),
      song: faker.music.songName(),
      artist: faker.person.firstName(),
      isLikedSong: false,
    }
  },
  methods: {
    toggleLikeSong() {
      this.isLikedSong = !this.isLikedSong
    }
  }
})
</script>