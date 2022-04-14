<script setup>
  import Layout from "./Layout.vue";
  import json from "../../public/json/anggota.json";
</script>

<template>
  <Layout>
    <div class="py-20 flex flex-col">
      <div
        class="
          w-full
          p-3
          mb-5
          mt-4
          shadow-md
          flex
          justify-center
          items-center
          bg-[#f59800]
          rounded-lg
          dark:bg-slate-700
        "
      >
        <h1 class="font-bold text-xl text-white">Anggota I</h1>
      </div>

      <router-link
        v-for="peng in json[0]"
        :to="`/anggota/${peng.id}`"
        :key="peng.id"
        class="
          w-full
          p-4
          flex
          hover:bg-slate-50
          dark:hover:bg-slate-800
          justify-start
          items-center
          rounded-lg
          shadow
          dark:shadow-black dark:shadow-sm
          mb-3
        "
      >
        <img
          :src="`/assets/img/${peng.icon}.jpg`"
          :alt="`${peng.icon}`"
          class="w-20 mr-4 rounded-full"
        />
        <div class="flex flex-col">
          <h1 class="text-xl font-bold">{{ peng.nama }}</h1>
          <h3 class="text-md">{{ peng.daerah }}</h3>
          <h3 class="text-[#f59800] font-extrabold">{{ peng.jabatan }}</h3>
        </div>
      </router-link>

      <div
        class="
          w-full
          p-3
          mt-10
          shadow-md
          flex
          justify-center
          items-center
          bg-[#f59800]
          rounded-lg
          dark:bg-slate-700
        "
      >
        <h1 class="font-bold text-xl text-white">Anggota II</h1>
      </div>

      <div class="grid grid-cols-3 w-full gap-3 mt-5">
        <a
          v-for="angg in json[1]"
          :href="`https://wa.me//${angg.no}`"
          :key="angg.no"
          class="
            shadow
            rounded-lg
            pb-4
            overflow-hidden
            flex flex-col
            items-center
            hover:bg-slate-50
            dark:hover:bg-slate-800 dark:shadow-black dark:shadow-sm
          "
        >
          <img
            :src="`/assets/img/${angg.nama}.jpg`"
            :alt="`${angg.nama}`"
            class="mb-3"
          />
          <h1 class="text-xl font-bold">{{ angg.nama }}</h1>
          <h3 class="text-[#f59800] text-sm font-extrabold">
            {{ angg.jabatan }}
          </h3>
        </a>
      </div>
    </div>
  </Layout>
</template>