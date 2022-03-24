<script setup>
  import { RouterView } from "vue-router";
  import navbarComponentVue from "./components/navbar-component.vue";
</script>

<template>
  <navbarComponentVue>
    <template v-slot:dark-mode-switch>
      <div class="bg-slate-200 w-12 h-4"></div>
    </template>
  </navbarComponentVue>
  <RouterView />
</template>

<style></style>
