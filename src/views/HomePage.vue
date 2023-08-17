<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '@/components/SideBar.vue'
import Header from '@/components/Header.vue'
import PlaylistCompact from '@/components/PlaylistCompact.vue'
import Recents from '@/components/Recents.vue'
import PlaylistCard from '@/components/PlaylistCard.vue'
import Player from '@/components/Player.vue'
import { useStore } from '@/store'
import { FormatterEncodeBody } from '@/utils/formatter-encode-body'
const store = useStore()

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
      myOwnPlaylists: store.$state.myOwnPlaylists,
      featuredPlaylists: store.$state.featuredPlaylists,
      isAuthorized: false,
      user: store.$state.user
    }
  },
  computed: {
    getProfileUser() {
      return store.$state.user
    },

    getPlaylists() {
      return store.$state.myOwnPlaylists
    },

    getFeaturedPlaylists() {
      return store.$state.featuredPlaylists
    },
  },
  methods: {
    getPeriod() {
      let date = new Date()
      let hours = date.getHours()
      this.periodInDay = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening'
    },

    async getAccessToken(code: string) {
      const url = 'https://accounts.spotify.com/api/token';
      const clientId: string = process.env.VUE_APP_CLIENT_ID as string;
      const clientSecret: string = process.env.VUE_APP_CLIENT_SECRET as string;

      const base64Credentials = btoa(`${clientId}:${clientSecret}`);
      const dataForm = {
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.VUE_APP_REDIRECT_URI as string,
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${base64Credentials}`,
        },
        body: FormatterEncodeBody(dataForm),
      }

      fetch(url, requestOptions)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          const { access_token, refresh_token } = data
          const dataSession = {
            accessToken: access_token,
            refreshToken: refresh_token,
            createdAt: Date.now(),
          }
          let dataSessionString = JSON.stringify(dataSession)
          localStorage.setItem('data-session', dataSessionString)
          this.getMeProfile(access_token)
          this.getRecentsPlaylists(access_token)
          this.getFeaturedPlaylist(access_token)
        })
        .catch((error) => console.log('error', error))
    },

    async getRefreshToken(refreshToken: string) {
      const url = 'https://accounts.spotify.com/api/token';
      const clientId: string = process.env.VUE_APP_CLIENT_ID as string;
      const clientSecret: string = process.env.VUE_APP_CLIENT_SECRET as string;

      const base64Credentials = btoa(`${clientId}:${clientSecret}`);
      const dataForm = {
        grant_type: 'authorization_code',
        refresh_token: refreshToken,
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${base64Credentials}`,
        },
        body: FormatterEncodeBody(dataForm),
      }

      fetch(url, requestOptions)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
          const { access_token } = data
          const dataSession = {
            accessToken: access_token,
            refreshToken: refreshToken,
            createdAt: Date.now(),
          }
          let dataSessionString = JSON.stringify(dataSession)
          localStorage.setItem('data-session', dataSessionString)
          this.getMeProfile(access_token)
          this.getRecentsPlaylists(access_token)
          this.getFeaturedPlaylist(access_token)
          this.getUserPlaylists(access_token)
        })
        .catch((error) => console.log('error', error))
    },

    async getMeProfile(accessToken: string) {
      const url = 'https://api.spotify.com/v1/me'
      const requestOptions = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }

      fetch(url, requestOptions)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          store.$state.user = {
            email: data.email,
            name: data.display_name,
            images: data.images[0].url,
            followers: data.followers.total,
            id: data.id,
            type: data.type,
          }
        })
        .catch((error) => console.log('error', error))

    },

    async getRecentsPlaylists(accessToken: string) {
      const url = 'https://api.spotify.com/v1/me/playlists?limit=6'
      const requestOptions = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }

      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          const { items } = data
          const playlists = items.map((item: any) => {
            return {
              id: item.id,
              name: item.name,
              images: item.images[0].url,
              description: item.description,
              owner: item.owner.display_name,
              tracks: item.tracks.total,
            }
          })
          store.$state.myOwnPlaylists = playlists
        })
        .catch((error) => console.log('error', error))
    },

    async getFeaturedPlaylist(accessToken: string) {
      const url = `https://api.spotify.com/v1/browse/featured-playlists?country=BR&offset=0&limit=50`
      const requestOptions = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }

      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          const { items } = data.playlists
          const featuredPlaylists = items.map((item: any) => {
            return {
              id: item.id,
              name: item.name,
              images: item.images[0].url,
              description: item.description,
              owner: item.owner.display_name,
              tracks: item.tracks.total,
            }
          })
          store.$state.featuredPlaylists = featuredPlaylists
        })
        .catch((error) => console.log('error', error))
    },

    async getUserPlaylists(accessToken: string) {
      const url = 'https://api.spotify.com/v1/me/playlists?limit=50'
      const requestOptions = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }

      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          const { items } = data
          const playlists = items.map((item: any) => {
            return {
              id: item.id,
              name: item.name,
            }
          })

          store.$state.playlistsNames = playlists
        })
        .catch((error) => console.log('error', error))
    }
  },
  mounted() {
    this.getPeriod()

    const code = this.$route.query.code as string
    const localData = JSON.parse(localStorage.getItem('data-session') as string) || null

    if (!code) {
      this.$router.push({ name: 'login' })
    }

    if (!localData) {
      this.getAccessToken(code)
    }

    if (localData) {
      const { createdAt } = localData
      if ((Date.now() - createdAt) / 1000 > 3600) {
        this.getRefreshToken(localData.refreshToken)
      } else {
        this.getMeProfile(localData.accessToken)
        this.getRecentsPlaylists(localData.accessToken)
        this.getFeaturedPlaylist(localData.accessToken)
        this.getUserPlaylists(localData.accessToken)
      }
    }
  }
})
</script>

<template>
  <main class="w-full h-screen bg-gradient-to-t from-gray-900 to-slate-950 grid grid-cols-two-columns max-[820px]:grid-cols-one-columns ">
    <SideBar />
    <div class="w-full h-screen flex flex-col items-start p-4 gap-2 overflow-y-scroll scroll-smooth">
      <Header />
      <h2 class="text-white text-4xl font-bold">{{ periodInDay }}</h2>
      <Recents>
        <PlaylistCompact v-for="playlist in getPlaylists" :name="playlist.name" :cover="playlist.images" />
      </Recents>
      <section class="w-full h-full mb-28 mt-2">
        <div class="w-full flex items-center justify-between px-4">
          <a href="#" class="text-white text-2xl font-bold hover:underline">Made for {{ getProfileUser.name}}</a>
          <a href="#" class="text-zinc-400 text-sm font-semibold hover:underline mr-10">show more</a>
        </div>

        <div class="w-full flex flex-wrap items-center justify-start p-4 gap-3">
          <PlaylistCard v-for="playlist in getFeaturedPlaylists" :artist="playlist.owner.display_name || 'Spotify'" :cover="playlist.images" :description="playlist.description" :name="playlist.name"/>
        </div>
      </section>
    </div>

    <footer class="w-full absolute bottom-0">
      <Player />
    </footer>
  </main>
</template>