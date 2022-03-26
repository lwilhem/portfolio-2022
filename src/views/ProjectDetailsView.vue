<script setup>
  import { Icon } from "@iconify/vue";
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import projectList from "../components/utilities/projectList";

  const route = useRoute();
  const articleId = route.params.test;

  const projectDetails = ref(projectList[articleId]);

  console.log(projectDetails.value);
</script>

<template>
  <section>
    <h2>{{ projectDetails.name }}</h2>
    <p>{{ projectDetails.description }}</p>
    <div>
      <Icon v-for="tech in projectDetails.technologies" :icon="tech" />
    </div>
    <section>
      <div v-for="link in projectDetails.repoLink">
        <a v-if="link.backend" :href="link.backend"> Repo Back</a>
        <a v-if="link.frontend" :href="link.frontend"> Repo Front</a>
        <a v-if="link.deployedAt" :href="link.deployedAt">Project Link</a>
      </div>
    </section>
  </section>
</template>

<style></style>
