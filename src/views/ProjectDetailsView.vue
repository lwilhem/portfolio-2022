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
    class="font-title font-extrabold bg-slate-200 dark:bg-zinc-900 text-indigo-700 dark:text-slate-200 text-4xl w-full text-center py-4"
  >
    {{ projectDetails.name }}
  </h2>
  <section
    class="bg-slate-200 dark:bg-zinc-900 w-full h-content px-32 py-12 flex items-center justify-evenly"
  >
    <div class="w-2/5">
      <p class="font-hero font-bold mb-2 text-2xl text-center">What is It ?</p>
      <p class="border-l-4 p-2 border-indigo-700">
        {{ projectDetails.description }}
      </p>
    </div>
    <div class="flex flex-wrap p-12 items-center justify-evenly">
      <Icon
        v-for="tech in projectDetails.technologies"
        :icon="tech"
        :inline="true"
        class="w-24 h-24 text-indigo-700 dark:text-slate-200 m-2"
      />
    </div>
  </section>
  <section
    class="flex items-center justify-center bg-slate-200 dark:bg-zinc-900"
  ></section>
</template>

<style></style>
