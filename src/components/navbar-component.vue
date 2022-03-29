<script setup>
  import { Icon } from "@iconify/vue";
  import { ref } from "vue";
  import { RouterLink } from "vue-router";
  import DarkThemeSwitch from "./utilities/dark-theme-switch.vue";
  import LinkList from "./utilities/NavbarLinkList";

  const showMenu = ref(false);
  const linkFormat = ref(LinkList);

  function menuToggle() {
    showMenu.value = !showMenu.value;
  }
</script>

<template>
  <header
    class="w-full flex items-center relative justify-between h-content px-4 bg-slate-200 dark:bg-zinc-900 lg:py-8"
  >
    <RouterLink
      to="/"
      class="flex items-center justify-center text-zinc-900 dark:text-slate-200"
    >
      <Icon icon="heroicons-solid:cube-transparent" class="w-8 h-8" />
      <span class="uppercase font-title font-bold text-2xl">W/L.</span>
    </RouterLink>
    <!--RESPONSIVE MENU-->
    <div class="lg:hidden z-50 lg:z-0">
      <button class="py-6">
        <Icon
          icon="heroicons-solid:menu"
          @click="menuToggle"
          class="w-12 h-12 dark:text-slate-200"
        />
      </button>
      <div
        class="bg-slate-200 dark:bg-zinc-900 absolute w-2/3 md:w-1/3 border-none origin-top-right right-0 h-screen text-red-500"
        :class="[showMenu === true ? 'flex flex-col' : 'hidden']"
      >
        <nav class="flex flex-col px-4 py-2 my-4">
          <RouterLink
            v-for="link in linkFormat"
            class="text-zinc-900 my-4 font-hero text-center text-xl font-extrabold px-3 hover:text-slate-200 dark:text-slate-200 dark:hover:text-zinc-900"
            :to="link.linkRoute"
          >
            <span class="link-underline p-1 align-middle">{{
              link.linkName
            }}</span>
          </RouterLink>
        </nav>
        <DarkThemeSwitch></DarkThemeSwitch>
      </div>
    </div>
    <!-- DESKTOP MENU -->
    <div class="hidden lg:flex lg:items-center lg:justify-evenly">
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
    </div>
  </header>
</template>

<style></style>
