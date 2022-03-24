<script setup>
  import { Switch } from "@headlessui/vue";
  import { Icon } from "@iconify/vue";
  import { onMounted, ref, watch } from "vue";

  const enabled = ref(false);

  onMounted(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  watch(enabled, () => {
    const currentTheme = localStorage.getItem("theme");
    console.log(enabled.value);
    console.log(currentTheme);

    if (currentTheme === "light") {
      localStorage.theme = "dark";
      document.documentElement.className = "dark";
    } else {
      localStorage.theme = "light";
      document.documentElement.className = "light";
    }
  });
</script>

<template>
  <div class="flex items-center justify-center align-middle">
    <Icon icon="heroicons-solid:sun" class="w-8 h-8 text-yellow-500 mx-3" />
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-zinc-900' : 'bg-zinc-700'"
      class="relative inline-flex items-center h-6 rounded-full w-11"
    >
      <span class="sr-only">Enable Dark Mode</span>
      <span
        :class="enabled ? 'translate-x-6' : 'translate-x-1'"
        class="transition duration-200 ease-in-out inline-block w-4 h-4 transform bg-white rounded-full"
      />
    </Switch>
    <Icon icon="bi:moon-fill" class="w-6 h-6 text-zinc-900 mx-3" />
  </div>
</template>

<style></style>
