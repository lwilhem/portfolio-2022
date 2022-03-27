<script setup>
  import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
  import { Icon } from "@iconify/vue";
  import VueWriter from "vue-writer";

  const arr = ["Etudiant", "Développeur Fullstack", "UX/UI Designer"];
</script>

<template>
  <h2
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
            class="p-4 rounded-lg mx-2 font-hero uppercase font-bold w-52 hover:w-60 transition-all duration-500"
            :class="[
              selected
                ? 'bg-red-500 text-zinc-900 dark:bg-indigo-400 dark:text-zinc-900 w-60'
                : 'bg-red-400 text-slate-200 dark:bg-indigo-300 dark:text-zinc-900 dark:hover:bg-indigo-400 hover:bg-red-500 transition-all hover:text-zinc-900',
            ]"
          >
            Mon Parcours
          </button></Tab
        >
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
        <TabPanel class="flex p-12 bg-red-500 dark:bg-indigo-400">
          <div class="text-slate-200">
            <h2 class="text-zinc-900 font-title font-bold text-4xl">
              Wilhem Lecanu
            </h2>
            <VueWriter
              :array="arr"
              class="font-hero text-2xl font-semibold mb-8"
            />
            <span class="px-80 py-0 rounded-full bg-zinc-700"></span>
            <p class="w-5/6 font-body flex py-8">
              Actuellement étudiant en 2ème Année à l'IIM(Institut de l'Internet
              et du Multimédia) Dans un cursus Développement Web, je tends à me
              spécialiser vers des technologies back-end comme Node & PHP. Je
              viens à l'origine d'un cursus de graphisme, où j'ai eu l'occasion
              d'acquérir les bases du Branding, de l'UX/UI Design et du
              Graphisme.<br /><br />
              Je suis toujours à la recherche de nouvelles opportunités, ainsi
              que de différentes manières de perfectionner mes compétences.
            </p>
          </div>
          <img src="/wilhem-photo.jpg" alt="" class="w-1/2" />
        </TabPanel>
        <TabPanel>Content 2 </TabPanel>
        <TabPanel> Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  </section>
</template>

<script></script>
