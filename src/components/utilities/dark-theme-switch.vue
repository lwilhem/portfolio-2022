<script setup>
  import { Icon } from "@iconify/vue";
  import { ref } from "vue";

  const checked = ref(true);
</script>

<template>
  <div class="flex items-center justify-center align-middle">
    <Icon icon="heroicons-solid:sun" class="w-8 h-8 text-yellow-500 mx-3" />
    <input type="checkbox" id="switch-mode" v-model="checked" class="hidden" />
    <label
      for="switch-mode"
      class="flex items-center bg-zinc-400 cursor-pointer h-4 w-8 rounded-xl relative"
    >
      <div
        class="absolute bg-slate-200 rounded-full w-6 h-6 border-zinc-900 border-2"
      ></div>
    </label>
    <Icon icon="bi:moon-fill" class="w-6 h-6 text-zinc-900 mx-3" />
  </div>
</template>

<style></style>
