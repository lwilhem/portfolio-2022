<script setup>
  import { Icon } from "@iconify/vue";
  import { ref } from "vue";
  import { RouterLink } from "vue-router";
  import projectList from "../components/utilities/projectList";
  const portfolioContent = ref(projectList);
</script>

<template>
  <!--   <h2
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
  </section> -->
  <h2
    class="flex uppercase items-center justify-center p-8 text-2xl font-title font-bold bg-slate-200 dark:bg-zinc-900 text-zinc-900 dark:text-slate-200 lg:text-6xl xl:text-8xl"
  >
    <Icon
      icon="fa6-solid:bolt"
      :inline="true"
      class="w-12 h-12 text-red-500 dark:text-indigo-400 lg:w-16 lg:h-16 xl:w-24 xl:h-24"
    />
    Mes Projets !
  </h2>
  <section
    class="bg-slate-200 dark:bg-zinc-900 w-full h-content flex flex-wrap p-6 items-center justify-center"
  >
    <article
      v-for="project in portfolioContent"
      :id="project.id"
      class="flex flex-col w-4/5 sm:w-96 hover:bg-indigo-800 transition-all dark:bg-slate-200 dark:text-zinc-900 dark:hover:bg-red-500 dark:hover:text-slate-200 items-center justify-center p-4 m-4 bg-indigo-700 text-slate-200 rounded-lg"
    >
      <h3 class="font-hero text-xs sm:text-lg py-2 text-center">
        {{ project.name }}
      </h3>
      <p class="font-body line-clamp-3 text-xs">
        {{ project.description }}
      </p>
      <div class="flex py-4">
        <Icon
          v-for="icon in project.technologies"
          :icon="icon"
          class="w-8 h-8 p-2 sm:w-12 sm:h-12"
        />
      </div>
      <RouterLink
        :to="{
          name: 'singleProject',
          params: { test: project.id },
        }"
        class="flex bg-red-500 dark:bg-zinc-900 dark:text-slate-200 p-4 rounded-lg dark:hover:bg-slate-200 dark:hover:text-zinc-900 transition-all"
      >
        <span>Know More</span>
        <Icon
          icon="bi:arrow-up-right-circle-fill"
          :inline="true"
          class="w-6 h-6 mx-2"
        />
      </RouterLink>
    </article>
  </section>
</template>

<style></style>
