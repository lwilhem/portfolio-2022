<script setup>
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import projectList from "../components/utilities/projectList";

  const route = useRoute();
  const articleId = route.params.test;

  const projectDetails = ref(projectList[articleId]);

  console.log(projectDetails.value);
</script>

<template>
  <section class="bg-slate-200 dark:bg-zinc-900">
    <h2
      class="font-title font-bold text-indigo-700 dark:text-slate-200 text-4xl w-full text-center py-4"
    >
      {{ projectDetails.name }}
    </h2>
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
  </section>
</template>

<style></style>
