<script setup>
  import { Icon } from "@iconify/vue";
  import { ref } from "vue";
  import { RouterLink } from "vue-router";
  import SingleProjectComponent from "../components/single-project-component.vue";
  import projectList from "../components/utilities/projectList";

  var isActive = ref(false);
  const portfolioContent = ref(projectList);

  function toggleIsActive(id) {
    isActive.value = !isActive.value;
  }
</script>

<template>
  <section
    class="p-4 text-center w-full h-content bg-slate-200 dark:bg-zinc-900"
  >
    <h2
      class="font-title font-bold text-4xl text-indigo-700 dark:text-slate-200"
    >
      What I've been cooking !
    </h2>
    <div class="flex flex-wrap p-6 items-center justify-center">
      <article
        class="bg-indigo-700 w-2/5 h-80 shadow-2xl hover:shadow-lg dark:shadow-none rounded-3xl m-2 dark:bg-slate-200 hover:w-3/6 transition-all duration-500 ease-in-out px-4 py-2 flex flex-col justify-evenly items-center"
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
        <div class="flex items-center justify-center">
          <Icon
            v-for="icon in project.technologies"
            :icon="icon"
            class="w-6 h-6 m-2"
          />
        </div>
        <button
          class="bg-red-500 hover:px-8 dark:bg-red-700 shadow-none hover:shadow-xl flex items-center justify-center p-4 rounded-full transition-all"
          @click="() => toggleIsActive()"
        >
          <span class="mx-2 font-hero">Know More</span>
          <Icon
            icon="bi:arrow-up-right-circle-fill"
            :inline="true"
            class="w-6 h-6 mx-2"
          />
        </button>
        <SingleProjectComponent
          v-if="isActive"
          :toggleIsActive="() => toggleIsActive()"
          :name="project.name"
          :desc="project.description"
          :tech="project.technologies"
          :link="project.repoLink"
        >
        </SingleProjectComponent>
        <RouterLink
          :to="{ name: 'singleProject', params: { test: project.id } }"
        >
          <span>test</span>
        </RouterLink>
      </article>
    </div>
  </section>
</template>

<style></style>
