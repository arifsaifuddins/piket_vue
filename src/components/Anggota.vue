<script setup>
  import Layout from "./Layout.vue";
  import json from "../../public/json/anggota.json";
</script>

<template>
  <Layout>
    <div className="py-20 flex flex-col">
      <div
        className="w-full p-3 mb-10 shadow-md rounded-lg flex justify-center items-center"
      >
        <h1 className="font-bold text-2xl text-[#f59800]">Anggota</h1>
      </div>

      <a
        v-for="peng in json[0]"
        :href="'https://wa.me//' + peng.no"
        :key="peng.id"
        target="_blank"
        className="w-full p-4 flex hover:bg-slate-50 justify-start items-center rounded-lg shadow bg-white mb-5"
      >
        <img
          :src="`/assets/img/${peng.icon}.jpg`"
          :alt="`${peng.icon}`"
          className="w-24 mr-4 rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{{ peng.nama }}</h1>
          <h3 className="text-lg">{{ peng.daerah }}</h3>
          <h3 className="text-[#f59800] font-extrabold">{{ peng.jabatan }}</h3>
        </div>
      </a>

      <div className="grid grid-cols-2 w-full gap-5 mt-10">
        <a
          v-for="angg in json[1]"
          :href="`https://wa.me//${angg.no}`"
          :key="angg.no"
          className="shadow rounded-lg p-4 flex flex-col items-center hover:bg-slate-50"
        >
          <img
            :src="`/assets/img/${angg.nama}.jpg`"
            :alt="`${angg.nama}`"
            className="rounded-full mb-4"
          />
          <h1 className="text-2xl font-bold">{{ angg.nama }}</h1>
          <h3 className="text-[#f59800] font-extrabold">{{ angg.jabatan }}</h3>
        </a>
      </div>
    </div>
  </Layout>
</template>