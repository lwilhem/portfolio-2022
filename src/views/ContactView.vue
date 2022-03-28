<script setup>
  import { Icon } from "@iconify/vue";
</script>

<template>
  <h2
    class="font-title font-bold text-8xl text-zinc-900 dark:text-slate-200 bg-slate-200 dark:bg-zinc-900 text-center py-12 pt-16 w-full flex items-center justify-center"
  >
    <Icon
      icon="mdi:web"
      class="w-32 h-32 mx-2 text-red-500 dark:text-indigo-400"
      :inline="true"
    />
    Contact
  </h2>
  <section
    class="pb-48 bg-slate-200 flex items-center justify-center dark:bg-zinc-900 text-red-500 dark:text-indigo-400"
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
      <a href="https://github.com/lwilhem" class="m-2">Wilhem Lecanu</a>
    </div>
  </section>
</template>

<script></script>
