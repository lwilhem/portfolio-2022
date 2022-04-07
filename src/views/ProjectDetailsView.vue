<script setup>
  import { Icon } from "@iconify/vue";
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import projectList from "../components/utilities/projectList";

  const route = useRoute();
  const articleId = route.params.test;

  const projectDetails = ref(projectList[articleId]);
</script>

<template>
  <h2
    class="flex uppercase text-center items-center justify-center p-8 text-sm font-title font-bold bg-slate-200 dark:bg-zinc-900 text-zinc-900 dark:text-slate-200 lg:text-4xl xl:text-6xl"
  >
    <Icon
      icon="fluent:brain-circuit-24-filled"
      :inline="true"
      class="hidden md:block w-12 h-12 text-red-500 dark:text-indigo-400 lg:w-16 lg:h-16 xl:w-24 xl:h-24"
    />
    {{ projectDetails.name }}
  </h2>
  <section
    class="bg-slate-200 dark:bg-zinc-900 flex flex-col lg:items-center justify-center lg:flex-row p-2 lg:p-12"
  >
    <div class="lg:w-3/5">
      <p
        class="text-indigo-700 dark:text-red-500 uppercase font-hero text-center font-bold py-4"
      >
        What is It ?
      </p>
      <p
        class="font-body text-xs sm:text-base border-l-2 lg:border-l-4 p-2 dark:border-red-500 border-indigo-700 dark:text-slate-200"
      >
        {{ projectDetails.description }}
      </p>
    </div>
    <div class="flex flex-wrap items-center justify-center py-6">
      <Icon
        v-for="tech in projectDetails.technologies"
        :icon="tech"
        :inline="true"
        class="w-10 h-10 sm:w-20 sm:h-20 mx-4 my-2 text-indigo-700 dark:text-red-500"
      />
    </div>
  </section>
  <section
    class="flex items-center pb-24 sm:pb-32 md:pb-48 justify-center bg-slate-200 dark:bg-zinc-900"
    v-for="link in projectDetails.repoLink"
  >
    <a
      v-if="link.backend"
      :href="link.backend"
      class="flex items-center justify-center p-2 bg-indigo-700 rounded-md m-2 text-slate-200 dark:bg-red-500"
    >
      <Icon icon="akar-icons:github-fill" class="w-6 h-6 m-2" :inline="true" />
      <span class="text-xs">Back-End Repository</span>
    </a>
    <a
      v-if="link.frontend"
      :href="link.frontend"
      class="flex items-center justify-center p-2 bg-indigo-700 rounded-md m-2 text-slate-200 dark:bg-red-500"
    >
      <Icon icon="akar-icons:github-fill" class="w-6 h-6 m-2" :inline="true" />
      <span class="text-xs">Front-End Repository</span>
    </a>
    <a
      v-if="link.deployedAt"
      :href="link.deployedAt"
      class="flex items-center justify-center p-2 bg-indigo-700 rounded-md m-2 text-slate-200 dark:bg-red-500"
    >
      <Icon icon="mdi:web" :inline="true" class="w-6 h-6 m-2" />
      <span class="text-xs">Lien du projet</span>
    </a>
  </section>
</template>

<style></style>
