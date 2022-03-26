<script setup>
  import { Icon } from "@iconify/vue";
  const props = defineProps(["toggleIsActive", "name", "tech", "desc", "link"]);
</script>

<template>
  <section
    class="fixed top-0 bottom-0 right-0 left-0 z-50 bg-popup-bg flex items-center justify-center"
  >
    <div
      class="w-2/3 h-2/3 bg-slate-200 opacity-100 p-4 py-2 rounded-lg flex flex-col items-center justify-center"
    >
      <div class="w-full h-content bg-red-500 m-4">
        <h4 class="font-hero font-semibold text-lg">{{ props.name }}</h4>
        <p class="text-left font-body font-normal p-4 w-2/3 text-sm">
          {{ props.desc }}
        </p>
      </div>
      <button
        class="text-slate-200 bg-red-500 p-4 rounded-md font-hero flex items-center justify-center"
        @click="() => props.toggleIsActive()"
      >
        Return to list
        <Icon
          icon="ant-design:fullscreen-exit-outlined"
          :inline="true"
          class="w-6 h-6 mx-2"
        />
      </button>
    </div>
  </section>
</template>

<style></style>
