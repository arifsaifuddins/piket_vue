<script setup>
  import { onMounted } from "@vue/runtime-core";

  onMounted(() => {
    if (localStorage.key("mode")) {
      document.querySelector("html").classList.add("dark");
    }
  });
</script>

<template>
  <div
    class="
      bg-white
      dark:bg-slate-900 dark:text-slate-200
      text-slate-800
      h-[100vh]
      sm:w-[400px]
      mx-auto
      w-full
      p-5
      overflow-x-hidden
      shadow
    "
  >
    <router-view />
  </div>
</template>