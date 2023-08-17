<template>
  <section class="mt-6 w-full min-h-48 flex flex-wrap gap-4">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({
  name: 'Recents'
})
</script>