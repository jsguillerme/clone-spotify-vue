<template>
  <main class="w-full h-screen bg-gradient-to-t from-gray-900 to-slate-950 grid grid-cols-two-columns">
    <SideBar />
    <div class="w-full h-screen flex flex-col items-start p-4 gap-2 overflow-y-scroll scroll-smooth">
      <Header />
      <h2 class="text-white text-4xl font-bold">{{periodInDay}}</h2>
      <Recents>
        <PlaylistCompact v-for="playlist in recentsPlaylists"/>
      </Recents>
      <section class="w-full h-full mb-28 mt-2">
        <div class="w-full flex items-center justify-between px-4">
          <a href="#" class="text-white text-2xl font-bold hover:underline">Made for Guilherme</a>
          <a href="#" class="text-zinc-400 text-sm font-semibold hover:underline mr-10">show more</a>
        </div>

        <div class="w-full flex flex-wrap items-center justify-start p-4 gap-3">
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
        </div>
      </section>
    </div>

      <footer class="w-full absolute bottom-0">
        <Player />
      </footer>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '@/components/SideBar.vue'
import Header from '@/components/Header.vue'
import PlaylistCompact from '@/components/PlaylistCompact.vue'
import Recents from '@/components/Recents.vue'
import PlaylistCard from '@/components/PlaylistCard.vue'
import Player from '@/components/Player.vue'

import { faker } from '@faker-js/faker'

export default defineComponent({
  name: 'HomePage',
  components: {
    SideBar,
    Header,
    PlaylistCompact,
    PlaylistCard,
    Player,
    Recents,
},
  data() {
    return {
      periodInDay: '',
      recentsPlaylists: [{
        name: faker.music.songName(),
        image: faker.image.urlPicsumPhotos(),
        description: faker.lorem.text()
      },{
        name: faker.music.songName(),
        image: faker.image.urlPicsumPhotos(),
        description: faker.lorem.text()
      },
      {
        name: faker.music.songName(),
        image: faker.image.urlPicsumPhotos(),
        description: faker.lorem.text()
      },
      {
        name: faker.music.songName(),
        image: faker.image.urlPicsumPhotos(),
        description: faker.lorem.text()
      },
      {
        name: faker.music.songName(),
        image: faker.image.urlPicsumPhotos(),
        description: faker.lorem.text()
      },
      {
        name: faker.music.songName(),
        image: faker.image.urlPicsumPhotos(),
        description: faker.lorem.text()
      }]
    }
  },
  methods: {
    getPeriod() {
      let date = new Date()
      let hours = date.getHours()
      this.periodInDay = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening'
    }
  },
  mounted() {
    this.getPeriod()
  },
})
</script>