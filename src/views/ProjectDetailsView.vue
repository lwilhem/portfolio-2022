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
    class="font-title font-extrabold bg-slate-200 dark:bg-zinc-900 text-indigo-700 dark:text-slate-200 text-4xl w-full text-center py-12"
  >
    {{ projectDetails.name }}
  </h2>
  <section
    class="bg-slate-200 dark:bg-zinc-900 w-full h-content px-32 py-12 flex items-center justify-evenly"
  >
    <div class="w-4/5">
      <p
        class="font-hero font-bold mb-2 text-2xl text-indigo-700 dark:text-red-500 text-center"
      >
        What is It ?
      </p>
      <p
        class="font-body border-l-4 p-2 dark:border-red-500 border-indigo-700 dark:text-slate-200"
      >
        {{ projectDetails.description }}
      </p>
    </div>
    <div class="flex flex-wrap p-12 items-center justify-evenly">
      <Icon
        v-for="tech in projectDetails.technologies"
        :icon="tech"
        :inline="true"
        class="w-24 h-24 text-indigo-700 dark:text-red-500 m-2"
      />
    </div>
  </section>
  <section
    class="flex items-center justify-center bg-slate-200 dark:bg-zinc-900"
  ></section>
  <div
    class="flex items-center justify-center bg-slate-200 dark:bg-zinc-900 p-12 py-16"
    v-for="link in projectDetails.repoLink"
  >
    <a
      v-if="link.backend"
      :href="link.backend"
      class="flex items-center justify-evenly mx-4 bg-indigo-700 dark:bg-red-500 py-2 px-4 rounded-full text-slate-200 dark:text-zinc-900"
    >
      <Icon icon="akar-icons:github-fill" class="w-8 h-8" :inline="true" />
      <span class="px-2 font-hero font-medium">Back-End Repository</span>
    </a>
    <a
      v-if="link.frontend"
      :href="link.frontend"
      class="flex items-center justify-evenly mx-4 bg-indigo-700 dark:bg-red-500 py-2 px-4 rounded-full text-slate-200 dark:text-zinc-900"
    >
      <Icon icon="akar-icons:github-fill" class="w-8 h-8" :inline="true" />
      <span class="px-2 font-hero font-medium">Front-End Repository</span>
    </a>
    <a
      v-if="link.deployedAt"
      :href="link.deployedAt"
      class="flex items-center justify-evenly mx-4 bg-indigo-700 dark:bg-red-500 py-2 px-4 rounded-full text-slate-200 dark:text-zinc-900"
    >
      <Icon icon="mdi:web" class="w-8 h-8" :inline="true" />
      <span class="px-2 font-hero font-medium">See Live Project here !</span>
      <Icon icon="mdi:arrow-right-bold" class="w-8 h-8" :inline="true" />
    </a>
  </div>
</template>

<style></style>

<!--     <p>{{ projectDetails.description }}</p>
    <div>
      <Icon v-for="tech in projectDetails.technologies" :icon="tech" />
    </div>
    <section>
      <div v-for="link in projectDetails.repoLink">
        <a v-if="link.backend" :href="link.backend"> Repo Back</a>
        <a v-if="link.frontend" :href="link.frontend"> Repo Front</a>
        <a v-if="link.deployedAt" :href="link.deployedAt">Project Link</a>
      </div>
    </section> -->
