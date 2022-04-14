<script setup>
  import { useRouter } from "vue-router";

  const router = useRouter();
</script>


<template>
  <div
    class="
      flex
      items-center
      fixed
      top-0
      right-0
      left-0
      p-5
      shadow
      bg-white
      dark:bg-slate-700
      sm:w-[400px]
      mx-auto
      w-full
    "
  >
    <div class="text-xl flex items-center">
      <i
        class="fa fa-arrow-left-long mr-3 cursor-pointer text-xl"
        @click="router.back()"
      ></i>
      {{ $route.params.no }}
    </div>
  </div>
  <div class="py-20 flex flex-col">
    <h1>{{ $route.params.no }}</h1>
  </div>
</template>