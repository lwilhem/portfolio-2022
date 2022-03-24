<script setup>
  import { Switch } from "@headlessui/vue";
  import { Icon } from "@iconify/vue";
  import { ref } from "vue";

  const enabled = ref(false);
</script>

<template>
  <div class="flex items-center justify-center align-middle">
    <Icon icon="heroicons-solid:sun" class="w-8 h-8 text-yellow-500 mx-3" />
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-zinc-900' : 'bg-zinc-700'"
      class="relative inline-flex items-center h-6 rounded-full w-11"
    >
      <span class="sr-only">Enable notifications</span>
      <span
        :class="enabled ? 'translate-x-6' : 'translate-x-1'"
        class="inline-block w-4 h-4 transform bg-white rounded-full"
      />
    </Switch>
    <Icon icon="bi:moon-fill" class="w-6 h-6 text-zinc-900 mx-3" />
  </div>
</template>

<style></style>
