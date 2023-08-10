<template>
  <section class="mt-6 w-full h-full max-h-48 grid grid-cols-3 gap-4">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({
  name: 'Recents'
})
</script>