<script setup>
  import { Icon } from "@iconify/vue";
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
    class="bg-slate-200 w-full h-screen p-6 dark:bg-zinc-900 flex items-center justify-evenly"
  >
    <div class="w-2/5 h-content p-6 flex flex-col items-center justify-center">
      <div class="flex items-center align-middle">
        <Icon
          icon="ic:baseline-local-fire-department"
          class="w-16 h-16 text-red-600 dark:text-slate-200"
        />
        <h1
          class="font-title font-bold text-4xl uppercase underline underline-offset-8 decoration-red-500 decoration-2 hover:decoration-4 dark:decoration-slate-200 dark:text-red-500"
        >
          Je suis Wilhem Lecanu !
        </h1>
      </div>
      <p class="my-8 py-4 font-body text-center dark:text-slate-300">
        Actuellement étudiant en 2ème année à l'Institut de l'Internet & du
        Multimédia dans le cursus Développement Web. Avec une expérience
        précédente dans le graphisme. Bien que j'aspire à être le plus versatile
        possible, je préfère me spécialiser dans les technologies Back-end
        telles que NodeJS et symfony.
      </p>
      <div
        class="flex items-center bg-indigo-700 dark:bg-slate-200 dark:text-red-500 px-8 py-6 rounded-lg text-slate-200 shadow-2xl"
      >
        <Icon icon="fa-solid:bolt" class="w-8 h-8 mx-4" />
        <span class="uppercase font-hero text-2xl">Où me trouver !</span>
        <Icon icon="bi:arrow-right-circle-fill" class="w-8 h-8 mx-4" />
      </div>
      <div
        class="flex items-center justify-between w-full px-4 my-12 text-red-500 dark:text-indigo-400"
      >
        <a href="https://github.com/lwilhem">
          <Icon
            icon="akar-icons:github-fill"
            class="w-12 h-12 mx-4 hover:text-zinc-900 dark:hover:text-slate-200 transition-all duration-500"
          />
        </a>
        <a href="https://www.linkedin.com/in/wilhem-lecanu-4181a31a1/">
          <Icon
            icon="icomoon-free:linkedin"
            class="w-12 h-12 mx-4 hover:text-zinc-900 dark:hover:text-slate-200 transition-all duration-500"
          />
        </a>
        <a href="https://stackoverflow.com/users/18608571/wilhem-lecanu">
          <Icon
            icon="fontisto:stack-overflow"
            class="w-12 h-12 mx-4 hover:text-zinc-900 dark:hover:text-slate-200 transition-all duration-500"
          />
        </a>
      </div>
    </div>
    <div class="w-2/5 h-content p-6 flex flex-col items-center justify-center">
      <Icon
        icon="ion:cog"
        class="w-72 h-72 animate-spin-slow mb-12 text-indigo-700 dark:text-indigo-400"
      />
      <VueWriter
        :array="arr"
        class="font-hero font-bold text-center text-4xl w-full mb-24 text-indigo-700 dark:text-indigo-400"
      />
    </div>
  </section>
</template>

<style></style>
