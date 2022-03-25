<script setup>
  import { Icon } from "@iconify/vue";
  import { ref } from "vue";
  import { RouterLink } from "vue-router";
  import DarkThemeSwitch from "./utilities/dark-theme-switch.vue";
  import LinkList from "./utilities/NavbarLinkList";

  const linkFormat = ref(LinkList);
</script>

<template>
  <header
    class="w-full h-16 flex items-center justify-between px-16 py-4 text-center bg-slate-200 dark:bg-zinc-900"
  >
    <RouterLink
      to="/"
      class="flex items-center justify-center text-zinc-900 dark:text-slate-200"
    >
      <Icon icon="heroicons-solid:cube-transparent" class="w-8 h-8" />
      <h1 class="uppercase font-title font-bold text-2xl">W/L.</h1>
    </RouterLink>
    <div>
      <nav class="flex">
        <RouterLink
          v-for="link in linkFormat"
          class="text-zinc-900 font-hero font-extrabold px-3 hover:text-slate-200 dark:text-slate-200 dark:hover:text-zinc-900"
          :to="link.linkRoute"
        >
          <span class="link-underline p-1 align-middle">{{
            link.linkName
          }}</span>
        </RouterLink>
      </nav>
    </div>
    <DarkThemeSwitch></DarkThemeSwitch>
  </header>
</template>

<style></style>
