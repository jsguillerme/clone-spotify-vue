<template>
  <aside class="w-80 h-full p-10 bg-zinc-950 flex flex-col items-center justify-start gap-10">
    <span class="flex items-center justify-center gap-2 text-white text-3xl font-bold">
      <font-awesome-icon icon="fa-brands fa-spotify"/>
      <h1>Spotify</h1>
    </span>

    <section class="w-full flex flex-col gap-2 items-center justify-start">
      <button class="w-full">
        <span class="flex items-center justify-start gap-3 text-white text-lg font-semibold hover:bg-zinc-800 py-2 px-4 rounded-md transition-all duration-100">
          <font-awesome-icon icon="fa-solid fa-home"/>
          <h1>Home</h1>
        </span>
      </button>
      <button class="w-full">
        <span class="flex items-center justify-start gap-3 text-white text-lg font-semibold hover:bg-zinc-800 py-2 px-4 rounded-md transition-all duration-100">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          <h1>Search</h1>
        </span>
      </button>
      <button class="w-full">
        <span class="flex items-center justify-start gap-3 text-white text-lg font-semibold hover:bg-zinc-800 py-2 px-4 rounded-md transition-all duration-100">
          <font-awesome-icon icon="fa-solid fa-book" />
          <h1>Your Library</h1>
        </span>
      </button>
    </section>

    <section>
      <button class="w-full">
        <span class="flex items-center justify-start gap-3 text-white text-lg font-semibold hover:bg-zinc-800 py-2 px-4 rounded-md transition-all duration-100">
          <font-awesome-icon icon="fa-solid fa-square-plus" class="text-3xl"/>
          <h1>Create Playlist</h1>
        </span>
      </button>
      <button class="w-full">
        <span class="flex items-center justify-start gap-3 text-white text-lg font-semibold hover:bg-zinc-800 py-2 px-4 rounded-md transition-all duration-100">
          <span class="h-7 w-7 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-heart" class="text-sm"/>
          </span>
          <h1>Liked Songs</h1>
        </span>
      </button>
      <button class="w-full">
        <span class="flex items-center justify-start gap-3 text-white text-lg font-semibold hover:bg-zinc-800 py-2 px-4 rounded-md transition-all duration-100">
          <span class="h-7 w-7 bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-md flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-tower-broadcast" class="text-sm" />
          </span>
          <h1>Your Episodes</h1>
        </span>
      </button>
    </section>

    <section class="w-full max-h-[354px] p-2 overflow-y-auto scroll-smooth flex flex-col gap-2 items-start justify-start text-white">
      <a href="#" class="hover:brightness-50" v-for="(playlist, index) in playlists" :key="index" >{{playlist.name}}</a>
    </section>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {faker} from '@faker-js/faker'

export default defineComponent({
  name: 'SideBar',
  data() {
    return {
      playlists: [
        {
          name: faker.music.songName(),
        },
        {
          name: faker.music.songName(),
        },
        {
          name: faker.music.songName(),
        },
        {
          name: faker.music.songName(),
        },
        {
          name: faker.music.songName(),
        },
        {
          name: faker.music.songName(),
        },
        {
          name: faker.music.songName(),
        },
        {
          name: faker.music.songName(),
        },
        {
          name: faker.music.songName(),
        },
        {
          name: faker.music.songName(),
        },
        {
          name: faker.music.songName(),
        },
        {
          name: faker.music.songName(),
        },
        {
          name: faker.music.songName(),
        },
        {
          name: faker.music.songName(),
        },
      ]
    }
  }
})
</script>