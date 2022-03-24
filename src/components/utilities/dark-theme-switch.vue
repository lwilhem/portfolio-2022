<script setup>
  import { Icon } from "@iconify/vue";
  import { ref } from "vue";

  const checked = ref(true);
</script>

<template>
  <Icon icon="heroicons-solid:sun" class="w-6 h-6 text-yellow-500" />
  <input type="checkbox" id="switch-mode" v-model="checked" />
  <Icon icon="heroicons-solid:moon" class="w-6 h-6 text-slate-200" />
</template>

<style></style>
