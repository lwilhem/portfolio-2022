<script setup>
  import { Icon } from "@iconify/vue";
  import VueWriter from "vue-writer";
  const arr = [
    "UX/UI Design...",
    "Front-End Development...",
    "Back-End Development...",
    "Deploy...",
    "Profit & Repeat...",
  ];
</script>

<template>
  <section
    class="bg-slate-200 w-full h-screen p-6 dark:bg-zinc-900 flex items-center justify-evenly"
  >
    <div class="w-2/5 h-content p-6 flex flex-col items-center justify-center">
      <div class="flex items-center align-middle">
        <Icon
          icon="ic:baseline-local-fire-department"
          class="w-16 h-16 text-red-600"
        />
        <h1
          class="font-title font-bold text-4xl uppercase underline underline-offset-8 decoration-red-500 decoration-2 hover:decoration-4"
        >
          I'm Wilhem Lecanu !
        </h1>
      </div>
      <p class="my-8 font-body text-center">
        21 years-old French Undergraduate Web Development Student at
        IIM(Institut de L'Internet et du multimédia), With some Experience in
        Graphic Design. While I strive to be as versatile as possible, I tend to
        specialize in Backend Development, with Technologies such as Node,
        Symfony & Python.
      </p>
      <div
        class="flex items-center bg-indigo-700 px-8 py-6 rounded-lg text-slate-200 hover:shadow-md shadow-2xl transition-all"
      >
        <Icon icon="fa-solid:bolt" class="w-8 h-8 mx-4" />
        <span class="uppercase font-hero text-2xl">Where to Find Me</span>
        <Icon icon="bi:arrow-right-circle-fill" class="w-8 h-8 mx-4" />
      </div>
      <div
        class="flex items-center justify-between w-full px-4 my-12 text-indigo-700"
      >
        <a href="">
          <Icon
            icon="akar-icons:github-fill"
            class="w-12 h-12 mx-4 hover:text-indigo-900"
          />
        </a>
        <a href="">
          <Icon
            icon="icomoon-free:linkedin"
            class="w-12 h-12 mx-4 hover:text-indigo-900"
          />
        </a>
        <a href="">
          <Icon
            icon="fontisto:stack-overflow"
            class="w-12 h-12 mx-4 hover:text-indigo-900"
          />
        </a>
      </div>
    </div>
    <div class="w-2/5 h-content p-6 flex flex-col items-center justify-center">
      <Icon icon="ion:cog" class="w-72 h-72 animate-spin-slow mb-12" />
      <VueWriter
        :array="arr"
        class="font-hero font-bold text-center text-4xl w-full mb-24"
      />
    </div>
  </section>
</template>

<style></style>
