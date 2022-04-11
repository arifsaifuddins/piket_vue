<script setup>
  import Layout from "./Layout.vue";
  import json from "../../public/json/anggota.json";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const date = new Date();
  const year = date.getFullYear();
</script>

<template>
  <Layout>
    <div class="py-20 px-3 flex flex-col">
      <div class="text-md mt-3 mb-10 flex justify-start font-bold items-center">
        <i
          class="fa fa-arrow-left mr-2 cursor-pointer text-md"
          @click="router.back()"
        ></i>
        <img
          :src="`/assets/img/${json[0][$route.params.id].icon}.jpg`"
          alt="icon"
          class="w-8 h-8 rounded-full mr-2"
        />
        {{ json[0][$route.params.id].nama }}
      </div>
      <div class="p-4 text-center">
        <img
          :src="`/assets/img/${json[0][$route.params.id].icon}.jpg`"
          alt="icon"
          class="w-48 h-48 rounded-full mx-auto"
        />
        <h1 class="mt-6 mb-4 text-3xl font-extrabold">
          {{ json[0][$route.params.id].nama }}
        </h1>
        <div>{{ json[0][$route.params.id].no }}</div>
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
      <h1 class="mt-3 p-2 flex items-start text-xl font-bold">
        <div class="w-28 text-[#f59800]">Daerah</div>
        <div>: {{ json[0][$route.params.id].daerah }}</div>
      </h1>
      <h1 class="mt-3 p-2 flex items-start text-xl font-bold">
        <div class="w-28 text-[#f59800]">Posisi</div>
        <div>: {{ json[0][$route.params.id].jabatan }}</div>
      </h1>
      <h1 class="mt-3 p-2 flex items-start text-xl font-bold">
        <div class="w-28 inline text-[#f59800]">Kuliah</div>
        <div>: {{ json[0][$route.params.id].kuliah }}</div>
      </h1>
      <h1 class="mt-3 p-2 flex items-start text-xl font-bold">
        <div class="w-28 inline text-[#f59800]">Kampus</div>
        <div>: {{ json[0][$route.params.id].kampus }}</div>
      </h1>
      <h1 class="mt-3 p-2 flex items-start text-xl font-bold">
        <div class="w-28 inline text-[#f59800]">Angkatan</div>
        <div>: {{ json[0][$route.params.id].angkatan }} - {{ year }}</div>
      </h1>
      <a
        target="_blank"
        :href="`https://wa.me//${json[0][$route.params.id].no}`"
        class="
          w-full
          my-4
          bg-[#f59800]
          p-3
          text-white
          font-bold
          text-xl
          block
          rounded-lg
          text-center
        "
        ><i class="fab fa-whatsapp"></i> Whatsapp</a
      >
    </div>
  </Layout>
</template>
