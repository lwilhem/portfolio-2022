<script setup>
  import { Icon } from "@iconify/vue";
  import { RouterView } from "vue-router";
  import navbarComponentVue from "./components/navbar-component.vue";
</script>

<template>
  <navbarComponentVue>
    <template v-slot:dark-mode-switch>
      <div class="flex">
        <Icon icon="bxs:moon" class="text-slate-200 w-6 h-6 mx-2" />
        <Icon icon="bxs:sun" class="text-yellow-500 h-6 w-6 mx-2" />
      </div>
    </template>
  </navbarComponentVue>
  <RouterView />
</template>

<style></style>
