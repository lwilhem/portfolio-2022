<script setup>
  import { Icon } from "@iconify/vue";
  import { ref } from "vue";
  const projectList = ref([
    {
      id: 0,
      name: "SPA animal Register",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla commodo ipsum leo. Praesent arcu mauris, malesuada quis augue a, rutrum mattis leo. Praesent id viverra libero. Duis tempus tristique dui, vitae blandit turpis lacinia in. Etiam vel justo pretium, sodales mi congue, iaculis quam. Maecenas ut nisl ac leo pharetra volutpat nec eget arcu. Nullam mauris ligula, pulvinar quis tempor vitae, vehicula a lorem. Vivamus velit ex, semper eget ex id, tempus maximus tortor.",
      technologies: [
        "akar-icons:php-fill",
        "akar-icons:html-fill",
        "akar-icons:css-fill",
        "akar-icons:bootstrap-fill",
      ],
      repoLink: "https://github.com/lwilhem/spa-project",
    },
    {
      id: 1,
      name: "Node Messaging Api",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla commodo ipsum leo. Praesent arcu mauris, malesuada quis augue a, rutrum mattis leo. Praesent id viverra libero. Duis tempus tristique dui, vitae blandit turpis lacinia in. Etiam vel justo pretium, sodales mi congue, iaculis quam. Maecenas ut nisl ac leo pharetra volutpat nec eget arcu. Nullam mauris ligula, pulvinar quis tempor vitae, vehicula a lorem. Vivamus velit ex, semper eget ex id, tempus maximus tortor.",
      technologies: ["akar-icons:node-fill", "logos:express", "ri:vuejs-fill"],
      repoLink: "https://github.com/lwilhem/node-instant-messaging-api",
    },
    {
      id: 2,
      name: "Portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla commodo ipsum leo. Praesent arcu mauris, malesuada quis augue a, rutrum mattis leo. Praesent id viverra libero. Duis tempus tristique dui, vitae blandit turpis lacinia in. Etiam vel justo pretium, sodales mi congue, iaculis quam. Maecenas ut nisl ac leo pharetra volutpat nec eget arcu. Nullam mauris ligula, pulvinar quis tempor vitae, vehicula a lorem. Vivamus velit ex, semper eget ex id, tempus maximus tortor.",
      technologies: [
        "ri:vuejs-fill",
        "file-icons:tailwind",
        "simple-icons:vite",
      ],
      repoLink: "https://github.com/lwilhem/spa-project",
    },
    {
      id: 3,
      name: "Devlab: E-Commerce Client",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla commodo ipsum leo. Praesent arcu mauris, malesuada quis augue a, rutrum mattis leo. Praesent id viverra libero. Duis tempus tristique dui, vitae blandit turpis lacinia in. Etiam vel justo pretium, sodales mi congue, iaculis quam. Maecenas ut nisl ac leo pharetra volutpat nec eget arcu. Nullam mauris ligula, pulvinar quis tempor vitae, vehicula a lorem. Vivamus velit ex, semper eget ex id, tempus maximus tortor.",
      technologies: [
        "ri:vuejs-fill",
        "file-icons:tailwind",
        "simple-icons:vite",
      ],
      repoLink: "https://github.com/lwilhem/vite-devlab-goodies-client",
    },
    {
      id: 4,
      name: "Devlab: E-Commerce Backend",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla commodo ipsum leo. Praesent arcu mauris, malesuada quis augue a, rutrum mattis leo. Praesent id viverra libero. Duis tempus tristique dui, vitae blandit turpis lacinia in. Etiam vel justo pretium, sodales mi congue, iaculis quam. Maecenas ut nisl ac leo pharetra volutpat nec eget arcu. Nullam mauris ligula, pulvinar quis tempor vitae, vehicula a lorem. Vivamus velit ex, semper eget ex id, tempus maximus tortor.",
      technologies: [
        "file-icons:nestjs",
        "akar-icons:node-fill",
        "file-icons:typescript-alt",
        "fa:cc-stripe",
      ],
      repoLink: "https://github.com/lwilhem/vite-devlab-goodies-client",
    },
    {
      id: 5,
      name: "E-Commerce Fullstack",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla commodo ipsum leo. Praesent arcu mauris, malesuada quis augue a, rutrum mattis leo. Praesent id viverra libero. Duis tempus tristique dui, vitae blandit turpis lacinia in. Etiam vel justo pretium, sodales mi congue, iaculis quam. Maecenas ut nisl ac leo pharetra volutpat nec eget arcu. Nullam mauris ligula, pulvinar quis tempor vitae, vehicula a lorem. Vivamus velit ex, semper eget ex id, tempus maximus tortor.",
      technologies: [
        "akar-icons:php-fill",
        "logos:symfony",
        "akar-icons:bootstrap-fill",
        "file-icons:twig",
      ],
      repoLink: "https://github.com/lwilhem/vite-devlab-goodies-client",
    },
  ]);
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
    <div class="flex flex-wrap">
      <div v-for="project in projectList" :id="project.id">
        <span>{{ project.name }}</span>
        <Icon v-for="technology in project.technologies" :icon="technology" />
      </div>
    </div>
  </section>
</template>

<style></style>
