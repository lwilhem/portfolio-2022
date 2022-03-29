<script setup>
  import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
  import { Icon } from "@iconify/vue";
  import { ref } from "vue";
  import VueWriter from "vue-writer";
  import SkillsList from "../components/utilities/skillsList";

  const arr = ["Etudiant", "Développeur Fullstack", "UX/UI Designer"];
  const list = ref(SkillsList);
</script>

<template>
  <!--   <h2
    class="font-title font-bold text-8xl text-zinc-900 dark:text-slate-200 bg-slate-200 dark:bg-zinc-900 text-center py-12 pt-16 w-full flex items-center justify-center"
  >
    <Icon
      icon="mdi:face-man-profile"
      class="w-32 h-32 mx-2 text-red-500 dark:text-indigo-400"
      :inline="true"
    />
    About Me !
  </h2>
  <section class="bg-slate-200 dark:bg-zinc-900 flex flex-col">
    <TabGroup>
      <TabList class="p-5 flex items-center justify-center">
        <Tab v-slot="{ selected }" as="template">
          <button
            class="p-4 rounded-lg mx-2 font-hero uppercase font-bold w-52 hover:w-60 transition-all duration-500"
            :class="[
              selected
                ? 'bg-red-500 text-zinc-900 dark:bg-indigo-400 dark:text-zinc-900 w-60'
                : 'bg-red-400 text-slate-200 dark:bg-indigo-300 dark:text-zinc-900 dark:hover:bg-indigo-400 hover:bg-red-500 transition-all hover:text-zinc-900',
            ]"
          >
            Qui suis-je ?
          </button>
        </Tab>
        <Tab v-slot="{ selected }" as="template">
          <button
            class="p-4 rounded-lg mx-2 font-hero uppercase w-52 font-bold hover:w-60 transition-all duration-500"
            :class="[
              selected
                ? 'bg-red-500 text-zinc-900 dark:bg-indigo-400 dark:text-zinc-900 w-60'
                : 'bg-red-400 text-slate-200 dark:bg-indigo-300 dark:text-zinc-900 dark:hover:bg-indigo-400 hover:bg-red-500 transition-all hover:text-zinc-900',
            ]"
          >
            Mes Compétences
          </button></Tab
        >
      </TabList>
      <TabPanels>
        <TabPanel class="flex p-12 w-full h-content md:shrink-0">
          <div class="text-zinc-900 dark:text-slate-200 m-4">
            <h2
              class="text-zinc-900 dark:text-indigo-400 font-title font-bold text-4xl"
            >
              Wilhem Lecanu
            </h2>
            <VueWriter
              :array="arr"
              class="font-hero text-2xl font-semibold mb-8 text-indigo-500 dark:text-slate-200"
            />
            <span
              class="p-80 py-0 rounded-full bg-zinc-700 dark:bg-indigo-400"
            ></span>
            <p class="font-body py-8 max-w-4xl">
              Je suis un jeune étudiant de 21 ans, Actuellement en Développement
              Web, et auparavant dans le deomaine du graphisme & du Design. J'ai
              grandi entouré par Internet et par les innovations techniques qui
              entoure ce domaine, j'ai envie de m'y investir et de perfectionner
              mes compétences. Je suis aussi passionée de Cinématographie, de
              Littérature, et je suis pratiquant d'escalade depuis 10 ans.<br /><br />
              Je suis toujours à la recherche de nouvelles opportunités, ainsi
              que de différentes manières de perfectionner mes compétences.
            </p>
          </div>
          <div
            class="w-96 m-4 rounded-xl bg-about-photo bg-cover bg-center"
          ></div>
        </TabPanel>
        <TabPanel class="flex p-12 flex-wrap items-center justify-center">
          <ve-progress
            v-for="skill in list"
            reverse
            :progress="skill.progression"
            color="rgb(239 68 68)"
            empty-color="transparent"
            :empty-color-fill="emptyColorFill"
            :size="180"
            :thickness="5"
            :empty-thickness="3"
            lineMode="out 5"
            :legend="false"
            animation="rs 700 1000"
            fontSize="1.5rem"
            class="m-4"
          >
            <Icon
              slot="legend-caption"
              :icon="skill.icon"
              class="w-24 h-24 text-red-500"
            />
          </ve-progress>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </section> -->
  <h2
    class="flex uppercase items-center justify-center p-8 text-2xl font-title font-bold bg-slate-200 dark:bg-zinc-900 text-zinc-900 dark:text-slate-200 lg:text-6xl xl:text-8xl"
  >
    <Icon
      icon="mdi:face-man-profile"
      :inline="true"
      class="w-12 h-12 text-red-500 dark:text-indigo-400 lg:w-16 lg:h-16 xl:w-24 xl:h-24"
    />
    About Me !
  </h2>
  <section
    class="bg-slate-200 dark:bg-zinc-900 text-zinc-900 dark:text-slate-200"
  >
    <TabGroup>
      <TabList>
        <Tab v-slot="{ selected }" as="template">
          <button
            class="px-6 py-2 w-1/2 font-title font-semibold"
            :class="[
              selected
                ? 'bg-red-500 text-zinc-900 dark:bg-indigo-400 dark:text-zinc-900'
                : 'bg-red-400 text-slate-200 dark:bg-indigo-300 dark:text-zinc-900 dark:hover:bg-indigo-400 hover:bg-red-500 transition-all hover:text-zinc-900',
            ]"
          >
            Qui suis-je ?
          </button>
        </Tab>
        <Tab v-slot="{ selected }" as="template">
          <button
            class="py-2 w-1/2 font-title font-semibold"
            :class="[
              selected
                ? 'bg-red-500 text-zinc-900 dark:bg-indigo-400 dark:text-zinc-900'
                : 'bg-red-400 text-slate-200 dark:bg-indigo-300 dark:text-zinc-900 dark:hover:bg-indigo-400 hover:bg-red-500 transition-all hover:text-zinc-900',
            ]"
          >
            Mes Compétences
          </button>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel
          class="flex md:py-24 flex-col md:flex-row items-center md:justify-evenly p-4 bg-slate-200 dark:bg-zinc-900 text-zinc-900 dark:text-slate-200"
        >
          <div class="md:w-1/2 p-4">
            <h2 class="font-title font-bold text-lg md:text-2xl">
              Wilhem Lecanu
            </h2>
            <VueWriter :array="arr" class="font-hero md:text-xl" />
            <p class="my-4 text-sm md:text-base font-body">
              Je suis un jeune étudiant de 21 ans, Actuellement en Développement
              Web, et auparavant dans le deomaine du graphisme & du Design. J'ai
              grandi entouré par Internet et par les innovations techniques qui
              entoure ce domaine, j'ai envie de m'y investir et de perfectionner
              mes compétences. Je suis aussi passionée de Cinématographie, de
              Littérature, et je suis pratiquant d'escalade depuis 10 ans.<br /><br />
              Je suis toujours à la recherche de nouvelles opportunités, ainsi
              que de différentes manières de perfectionner mes compétences.
            </p>
          </div>
          <div
            class="rounded-xl bg-about-photo bg-center bg-cover w-64 h-64 sm:w-96 sm:h-96"
          ></div>
        </TabPanel>
        <TabPanel
          class="flex items-center flex-wrap justify-center p-2 md:p-6 lg:p-12 bg-slate-200 dark:bg-zinc-900 text-zinc-900 dark:text-slate-200"
        >
          <ve-progress
            v-for="skill in list"
            reverse
            :progress="skill.progression"
            color="rgb(239 68 68)"
            empty-color="transparent"
            :empty-color-fill="emptyColorFill"
            :size="180"
            :thickness="5"
            :empty-thickness="3"
            lineMode="out 5"
            :legend="false"
            animation="rs 700 1000"
            fontSize="1.5rem"
            class="m-4"
          >
            <Icon
              slot="legend-caption"
              :icon="skill.icon"
              class="w-24 h-24 text-red-500"
            />
          </ve-progress>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </section>
</template>

<style></style>
