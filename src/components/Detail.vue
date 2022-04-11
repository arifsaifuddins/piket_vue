<script setup>
  import Layout from "./Layout.vue";
  import json from "../../public/json/anggota.json";
  import { useRouter } from "vue-router";

  const router = useRouter();
</script>

<template>
  <Layout>
    <div class="py-20 flex flex-col">
      <div class="text-xl my-5 mb-10 flex justify-start items-center">
        <i
          class="fa fa-arrow-left-long mr-3 cursor-pointer text-2xl"
          @click="router.back()"
        ></i>
        <img
          :src="`/assets/img/${json[0][$route.params.id].icon}.jpg`"
          alt="icon"
          class="w-10 h-10 rounded-full inline mr-3"
        />
        {{ json[0][$route.params.id].nama }}
      </div>
      <div class="p-4 text-center">
        <img
          :src="`/assets/img/${json[0][$route.params.id].icon}.jpg`"
          alt="icon"
          class="w-48 h-48 rounded-full mx-auto"
        />
        <h1 class="mt-6 text-3xl font-extrabold">
          {{ json[0][$route.params.id].nama }}
        </h1>
      </div>
      <hr
        class="
          border-b-1
          w-[98%]
          mx-auto
          dark:border-slate-200
          border-slate-800
        "
      />
    </div>
  </Layout>
</template>
