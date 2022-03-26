<script>
  export default {
    props: ["toggleIsActive"],
  };
</script>

<template>
  <section
    class="fixed top-0 bottom-0 right-0 left-0 z-50 bg-zinc-900 opacity-50 flex items-center justify-center"
  >
    <slot />
    <button class="bg-slate-200" @click="() => toggleIsActive()">
      Know less
    </button>
  </section>
</template>

<style></style>
