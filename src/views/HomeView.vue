<script setup>
  import { Icon } from "@iconify/vue";
  import VueWriter from "vue-writer";
  const arr = ["Hello", "From", "Vue Writer"];
</script>

<template>
  <section
    class="bg-slate-200 w-full h-screen p-6 dark:bg-zinc-900 flex items-center justify-evenly"
  >
    <div
      class="w-2/5 h-content bg-indigo-500 p-6 flex flex-col items-center justify-center"
    >
      <div class="flex items-center align-middle">
        <Icon
          icon="ic:baseline-local-fire-department"
          class="w-16 h-16 text-red-600"
        />
        <h1 class="font-title font-bold text-4xl uppercase">
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
      <div class="flex items-center">
        <Icon icon="fa-solid:bolt" class="w-8 h-8 mx-4" />
        <span class="uppercase font-hero text-2xl">Where to Find Me</span>
        <Icon icon="bi:arrow-right-circle-fill" class="w-8 h-8 mx-4" />
      </div>
      <div class="flex items-center justify-between w-full px-4 my-12">
        <a href="">
          <Icon icon="akar-icons:github-fill" class="w-12 h-12 mx-4" />
        </a>
        <a href="">
          <Icon icon="icomoon-free:linkedin" class="w-12 h-12 mx-4" />
        </a>
        <a href="">
          <Icon icon="fontisto:stack-overflow" class="w-12 h-12 mx-4" />
        </a>
      </div>
    </div>
    <div class="w-2/5 h-60 bg-red-500 p-6">
      <Icon icon="ion:cog" class="w-12 h-12 animate-spin-slow" />
      <VueWriter :array="arr" />
    </div>
  </section>
</template>

<style></style>
