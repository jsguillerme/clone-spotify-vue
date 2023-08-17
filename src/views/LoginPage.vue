<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  methods: {
    async redirectToLoginWithSpotify() {
      const clientId: string = process.env.VUE_APP_CLIENT_ID as string;
      const redirectUriEncoded = encodeURIComponent(process.env.VUE_APP_REDIRECT_URI as string);

      const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUriEncoded}&scope=user-read-private%20user-read-email%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20user-library-read%20user-library-modify%20playlist-read-private%20playlist-modify-public%20playlist-modify-private%20playlist-read-collaborative%20user-follow-read%20user-follow-modify%20user-top-read%20user-read-recently-played`
      
      window.location.href = url
    }
  }
})
</script>

<template>
  <div class="h-screen w-full dark:bg-zinc-900 bg-slate-700 flex flex-col items-center justify-center gap-2 text-white text-center">
    <span class="flex flex-wrap items-center justify-center gap-2">
      <img src="../../public/images/spotifyLogo.png" alt="logo spotify" class="w-10 h-10">
      <h2 class="font-bold text-4xl text-emerald-500">Welcome to Spotify Clone UI</h2>
    </span>
    <p>
      a project developed by 
      <a
        class="hover:text-emerald-500 font-semibold underline text-slate-400 transition-colors duration-300 ease-in-out" 
        href="https://github.com/jsguillerme/">jsguillerm</a>
    </p>

    <button @click="redirectToLoginWithSpotify" class="w-52 h-10 p-2 bg-emerald-600 rounded-full border-none outline-none mt-10 hover:bg-emerald-700 transition-colors duration-300 ease-in-out font-semibold">
      Authorize with Spotify
    </button>
  </div>
</template>