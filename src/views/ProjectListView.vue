<script setup>
  import { Icon } from "@iconify/vue";
  import { ref } from "vue";
  import { RouterLink } from "vue-router";
  import projectList from "../components/utilities/projectList";
  const portfolioContent = ref(projectList);
</script>

<template>
  <h2
    class="font-title font-bold text-8xl text-zinc-900 dark:text-slate-200 bg-slate-200 dark:bg-zinc-900 text-center py-12 pt-16 w-full flex items-center justify-center"
  >
    <Icon
      icon="fa6-solid:bolt"
      class="w-32 h-32 mx-2 text-red-500 dark:text-indigo-400"
      :inline="true"
    />
    Mes Projets !
  </h2>
  <section
    class="p-4 text-center w-full h-content bg-slate-200 dark:bg-zinc-900"
  >
    <div class="flex flex-wrap p-6 items-center justify-center">
      <article
        class="bg-indigo-700 hover:bg-indigo-800 dark:hover:bg-indigo-400 w-2/5 h-80 shadow-2xl hover:shadow-lg dark:shadow-none rounded-3xl m-2 dark:bg-slate-200 hover:w-3/6 transition-all duration-500 ease-in-out px-4 py-2 flex flex-col justify-evenly items-center"
        v-for="project in portfolioContent"
        :id="project.id"
      >
        <h3
          class="font-title font-bold uppercase text-2xl text-slate-200 dark:text-red-700"
        >
          {{ project.name }}
        </h3>
        <p
          class="text-slate-200 font-body text-md font-light line-clamp-3 w-96 dark:text-zinc-900"
        >
          {{ project.description }}
        </p>
        <div class="flex items-center justify-center h-8 max-h-8">
          <Icon
            v-for="icon in project.technologies"
            :icon="icon"
            class="w-6 h-6 m-2 text-slate-200 dark:text-zinc-900 hover:w-8 hover:h-8 hover:text-red-500 dark:hover:text-red-700 transition-all ease-in-out duration-500"
          />
        </div>
        <RouterLink
          :to="{
            name: 'singleProject',
            params: { test: project.id },
          }"
          class="bg-red-500 hover:px-8 dark:bg-red-700 shadow-none hover:shadow-xl flex items-center justify-center p-4 rounded-full transition-all"
        >
          <span class="mx-2 font-hero">Know More</span>
          <Icon
            icon="bi:arrow-up-right-circle-fill"
            :inline="true"
            class="w-6 h-6 mx-2"
          />
        </RouterLink>
      </article>
    </div>
  </section>
</template>

<style></style>
