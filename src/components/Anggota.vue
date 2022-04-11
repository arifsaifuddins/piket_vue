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
          shadow-md
          rounded-lg
          flex
          justify-center
          items-center
          dark:bg-slate-700
        "
      >
        <h1 class="font-bold text-2xl text-[#f59800]">Anggota</h1>
      </div>

      <a
        v-for="peng in json[0]"
        :href="'https://wa.me//' + peng.no"
        :key="peng.id"
        target="_blank"
        class="
          w-full
          p-4
          flex
          hover:bg-slate-50
          dark:hover:bg-slate-600 dark:bg-slate-700
          justify-start
          items-center
          rounded-lg
          shadow
          bg-white
          mb-3
        "
      >
        <img
          :src="`/assets/img/${peng.icon}.jpg`"
          :alt="`${peng.icon}`"
          class="w-24 mr-4 rounded-full"
        />
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold">{{ peng.nama }}</h1>
          <h3 class="text-lg">{{ peng.daerah }}</h3>
          <h3 class="text-[#f59800] font-extrabold">{{ peng.jabatan }}</h3>
        </div>
      </a>

      <hr
        class="
          border-b-1
          mb-2
          w-[98%]
          mx-auto
          border-slate-800
          dark:border-slate-200
        "
      />

      <div
        class="
          w-full
          p-3
          mt-10
          shadow-md
          rounded-lg
          flex
          justify-center
          items-center
          dark:bg-slate-700
        "
      >
        <h1 class="font-bold text-2xl text-[#f59800]">Anggota</h1>
      </div>

      <div class="grid grid-cols-3 w-full gap-3 mt-5">
        <a
          v-for="angg in json[1]"
          :href="`https://wa.me//${angg.no}`"
          :key="angg.no"
          class="
            shadow
            rounded-lg
            p-4
            flex flex-col
            items-center
            hover:bg-slate-50
            dark:hover:bg-slate-600 dark:bg-slate-700
          "
        >
          <img
            :src="`/assets/img/${angg.nama}.jpg`"
            :alt="`${angg.nama}`"
            class="rounded-full mb-4"
          />
          <h1 class="text-2xl font-bold">{{ angg.nama }}</h1>
          <h3 class="text-[#f59800] font-extrabold">{{ angg.jabatan }}</h3>
        </a>
      </div>
    </div>
  </Layout>
</template>