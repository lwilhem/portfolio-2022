<script setup>
  import { CubeTransparentIcon, MoonIcon, SunIcon } from "@heroicons/vue/solid";

  const linkList = ["Home.", "About.", "Skills.", "Projects.", "Contact."];
</script>

<template>
  <header class="w-full h-16 fixed flex items-center justify-between px-16">
    <div class="flex items-center justify-center text-slate-200">
      <CubeTransparentIcon class="w-8 h-8"></CubeTransparentIcon>
      <h1 class="uppercase font-title font-bold text-2xl">Wilhem.</h1>
    </div>
    <div>
      <nav>
        <a
          href="#"
          v-for="link in linkList"
          :key="link"
          class="text-slate-200 font-hero font-extrabold px-3"
          >{{ link }}</a
        >
      </nav>
    </div>
    <div class="flex">
      <MoonIcon class="w-8 h-8 text-slate-200"></MoonIcon>
      <SunIcon class="w-8 h-8 text-yellow-300"></SunIcon>
    </div>
  </header>
</template>

<style></style>
