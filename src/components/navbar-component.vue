<script setup>
  import { CubeTransparentIcon, MoonIcon, SunIcon } from "@heroicons/vue/solid";
  import { ref } from "vue";
  import { RouterLink } from "vue-router";
  import LinkList from "./utilities/NavbarLinkList";

  const linkFormat = ref(LinkList);
</script>

<template>
  <header class="w-full h-16 fixed flex items-center justify-between px-16">
    <RouterLink to="/" class="flex items-center justify-center text-slate-200">
      <CubeTransparentIcon class="w-8 h-8"></CubeTransparentIcon>
      <h1 class="uppercase font-title font-bold text-2xl">Wilhem.</h1>
    </RouterLink>
    <div>
      <nav>
        <RouterLink
          v-for="link in linkFormat"
          class="text-slate-200 font-hero font-extrabold px-3"
          :to="link.linkRoute"
        >
          <span>{{ link.linkName }}</span>
        </RouterLink>
      </nav>
    </div>
    <div class="flex items-center justify-center">
      <MoonIcon class="w-8 h-8 text-slate-200"></MoonIcon>
      <div class="bg-slate-200 w-8 h-4 mx-2 rounded-full"></div>
      <SunIcon class="w-8 h-8 text-yellow-300"></SunIcon>
    </div>
  </header>
</template>

<style></style>
