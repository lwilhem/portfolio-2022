<script setup>
  import { Icon } from "@iconify/vue";
</script>

<template>
  <section
    class="bg-zinc-900 w-full h-screen flex items-end justify-evenly px-6"
  >
    <div class="flex flex-col justify-center items-center">
      <a href="https://github.com/lwilhem?tab=repositories">
        <Icon
          icon="akar-icons:github-fill"
          class="w-8 h-8 text-slate-200 my-2"
        />
      </a>
      <Icon
        icon="akar-icons:linkedin-box-fill"
        class="w-8 h-8 text-slate-200 my-2"
      />
      <Icon
        icon="akar-icons:instagram-fill"
        class="w-8 h-8 text-slate-200 my-2"
      />
      <span class="h-24 w-1 rounded-md bg-slate-200"></span>
    </div>
  </section>
</template>

<script></script>
