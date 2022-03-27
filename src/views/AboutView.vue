<script setup>
  import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
  import { Icon } from "@iconify/vue";
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
  <section class="bg-slate-200 dark:bg-zinc-900">
    <TabGroup>
      <TabList class="bg-red-500 p-5 flex items-center justify-center">
        <Tab>Qui suis-je ?</Tab>
        <Tab>Mon Parcours</Tab>
        <Tab>Mes Compétences</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  </section>
</template>

<script></script>
