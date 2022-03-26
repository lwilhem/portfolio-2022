<script setup>
  import { ref } from "vue";
  import projectList from "../components/utilities/projectList";

  const formatedList = ref(projectList);
</script>

<template>
  <section
    class="p-4 text-center w-full h-screen bg-slate-200 dark:bg-zinc-900"
  >
    <h2
      class="font-title font-bold text-4xl text-indigo-700 dark:text-slate-200"
    >
      What I've been cooking !
    </h2>
    <div class="flex flex-wrap"></div>
  </section>
</template>

<style></style>
