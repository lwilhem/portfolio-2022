<script setup>
  import { Icon } from "@iconify/vue";
</script>

<template>
  <h2
    class="flex uppercase items-center justify-center p-8 text-2xl font-title font-bold bg-slate-200 dark:bg-zinc-900 text-zinc-900 dark:text-slate-200 lg:text-6xl xl:text-8xl"
  >
    <Icon
      icon="mdi:web"
      :inline="true"
      class="w-12 h-12 text-red-500 dark:text-indigo-400 lg:w-16 lg:h-16 xl:w-24 xl:h-24"
    />
    Contact
  </h2>
  <section
    class="md:h-screen h-content bg-slate-200 flex flex-wrap items-start pt-6 md:pt-24 justify-center dark:bg-zinc-900 text-red-500 dark:text-indigo-400"
  >
    <div
      class="p-4 m-8 flex items-center justify-center flex-col font-body text-zinc-900 dark:text-slate-200"
    >
      <div
        class="m-4 w-32 h-32 rounded-full bg-red-500 flex items-center justify-center dark:bg-indigo-400"
      >
        <Icon icon="fluent:mail-28-filled" class="w-16 h-16" />
      </div>
      <h5
        class="uppercase font-bold text-3xl text-red-500 dark:text-indigo-400"
      >
        E-mail
      </h5>
      <a href="mailto:wilhem.lecanu@gmail.com" class="m-2"
        >Wilhem.lecanu@gmail.com</a
      >
    </div>
    <div
      class="p-4 m-8 flex items-center justify-center flex-col font-body text-zinc-900 dark:text-slate-200"
    >
      <div
        class="m-4 w-32 h-32 rounded-full bg-red-500 flex items-center justify-center dark:bg-indigo-400"
      >
        <Icon icon="bi:phone-fill" class="w-16 h-16" />
      </div>
      <h5
        class="uppercase font-bold text-3xl text-red-500 dark:text-indigo-400"
      >
        Télephone
      </h5>
      <span class="m-2">+33 6 51 45 24 10</span>
    </div>
    <div
      class="p-4 m-8 flex items-center justify-center flex-col font-body text-zinc-900 dark:text-slate-200"
    >
      <div
        class="m-4 w-32 h-32 rounded-full bg-red-500 flex items-center justify-center dark:bg-indigo-400"
      >
        <Icon icon="codicon:github" class="w-16 h-16" />
      </div>
      <h5
        class="uppercase font-bold text-3xl text-red-500 dark:text-indigo-400"
      >
        Github
      </h5>
      <a href="https://github.com/lwilhem" class="m-2">lwilhem</a>
    </div>
    <div
      class="p-4 m-8 flex items-center justify-center flex-col font-body text-zinc-900 dark:text-slate-200"
    >
      <div
        class="m-4 w-32 h-32 rounded-full bg-red-500 flex items-center justify-center dark:bg-indigo-400"
      >
        <Icon icon="brandico:linkedin" class="w-16 h-16" />
      </div>
      <h5
        class="uppercase font-bold text-3xl text-red-500 dark:text-indigo-400"
      >
        Linkedin
      </h5>
      <a href="https://www.linkedin.com/in/wilhem-lecanu-4181a31a1/" class="m-2"
        >Wilhem Lecanu</a
      >
    </div>
  </section>
</template>

<script></script>
