<script setup>
  import { Icon } from "@iconify/vue";
  import { RouterLink } from "vue-router";
  import VueWriter from "vue-writer";
  const arr = [
    "UX/UI Design...",
    "Front-End Development...",
    "Back-End Development...",
    "Deploy...",
    "Profit & Repeat...",
  ];
</script>

<template>
  <section
    class="border-0 bg-slate-200 dark:bg-zinc-900 max-w-full min-h-screen h-content flex flex-col xl:flex-row-reverse justify-center items-center xl:justify-evenly text-zinc-900 dark:text-slate-200 xl:px-12"
  >
    <div
      class="text-indigo-700 dark:text-indigo-400 flex flex-col items-center justify-center min-w-fit pb-8"
    >
      <Icon
        icon="ion:cog"
        class="w-64 h-64 xl:w-96 xl:h-96 animate-spin-slow"
      />
      <VueWriter :array="arr" class="font-hero font-bold text-xl xl:text-2xl" />
    </div>
    <div
      class="bg-slate-200 dark:bg-zinc-900 max-w-3xl flex flex-col items-center justify-center"
    >
      <div class="flex items-center xl:justify-start justify-center">
        <Icon
          icon="ic:baseline-local-fire-department"
          :inline="true"
          class="w-8 h-8 text-red-500 dark:text-slate-200 xl:w-24 xl:h-24"
        />
        <h1
          class="font-title uppercase text-2xl font-bold dark:text-red-500 xl:text-4xl"
        >
          Je suis Wilhem Lecanu !
        </h1>
      </div>
      <p class="text-center p-4 font-body max-w-xl xl:text-xl xl:text-left">
        Actuellement étudiant en 2ème année à l'Institut de l'Internet & du
        Multimédia dans le cursus Développement Web. Avec une expérience
        précédente dans le graphisme. Bien que j'aspire à être le plus versatile
        possible, je préfère me spécialiser dans les technologies Back-end
        telles que NodeJS et symfony.
      </p>
      <RouterLink
        to="/contactme"
        class="flex items-center justify-center p-4 my-4 w-52 xl:w-72 bg-indigo-700 text-slate-200 rounded-md dark:bg-slate-200 dark:text-red-500"
      >
        <Icon icon="fa-solid:bolt" :inline="true" class="xl:w-8 xl:h-8" />
        <span class="px-4 font-hero font-semibold text-sm xl:text-lg"
          >Où me trouver !</span
        >
        <Icon
          icon="bi:arrow-right-circle-fill"
          :inline="true"
          class="xl:w-8 xl:h-8"
        />
      </RouterLink>
      <div class="flex text-indigo-700 dark:text-red-500">
        <a href="https://github.com/lwilhem">
          <Icon
            icon="akar-icons:github-fill"
            class="w-8 h-8 xl:w-16 xl:h-16 xl:mx-12 xl:my-6 m-4 hover:text-zinc-900 dark:hover:text-slate-200 transition-all duration-500"
          />
        </a>
        <a href="https://www.linkedin.com/in/wilhem-lecanu-4181a31a1">
          <Icon
            icon="icomoon-free:linkedin"
            class="w-8 h-8 xl:w-16 xl:h-16 xl:mx-12 xl:my-6 m-4 hover:text-zinc-900 dark:hover:text-slate-200 transition-all duration-500"
          />
        </a>
        <a href="https://stackoverflow.com/users/18608571/wilhem-lecanu">
          <Icon
            icon="fontisto:stack-overflow"
            class="w-8 h-8 xl:w-16 xl:h-16 xl:mx-12 xl:my-6 m-4 hover:text-zinc-900 dark:hover:text-slate-200 transition-all duration-500"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<style></style>
