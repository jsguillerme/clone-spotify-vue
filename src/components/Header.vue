<template>
  <header class="w-full h-24 flex items-center justify-between pr-6">
    <button :disabled="pathHome" class="h-10 w-10 rounded-full bg-slate-700 hover:bg-slate-700/60 transition-all duration-150 flex items-center justify-center disabled:cursor-not-allowed">
      <font-awesome-icon icon="fa-solid fa-chevron-left" color="white"/>
    </button>

    <button class="h-14 w-14 rounded-full outline-offset-1 outline outline-emerald-800 hover:outline-emerald-700 hover:transition-all duration-100 relative">
      <img src="https://i.scdn.co/image/ab67757000003b82639ca6802dbb91b12a83c968" alt="profile photo" class="rounded-full h-14 w-14">
      <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75 left-0 bottom-0" ></span>
      <span class="absolute inline-flex rounded-full h-3 w-3 bg-emerald-500 left-0 bottom-0" title="online"></span>
    </button>
  </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Header',
  data() {
    return {
      pathHome: true
    }
  }
})
</script>