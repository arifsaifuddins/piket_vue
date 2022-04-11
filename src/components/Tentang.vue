<script setup>
  import Layout from "./Layout.vue";
  import json from "../../public/json/tech.json";
</script>

<template>
  <Layout>
    <div class="py-20">
      <div class="p-4 text-center">
        <img src="/assets/icons/icon.png" alt="icon" class="w-52 mx-auto" />
        <h1 class="mt-5 text-3xl font-extrabold">Piket Sabtu Ramadhan</h1>
      </div>
      <hr class="border-b-1 w-[98%] mx-auto border-slate-800" />
      <div
        class="
          w-full
          p-3
          mt-16
          shadow-md
          rounded-lg
          flex
          justify-between
          items-center
          dark:bg-slate-700
        "
      >
        <h1 class="font-bold text-2xl text-[#f59800]">
          Dibuat dengan Teknologi :
        </h1>
      </div>

      <a
        v-for="tech in json[0]"
        target="_blank"
        :href="tech.url"
        :key="tech.name"
      >
        <div class="p-3 pt-6 text-xl">
          <img
            :src="'/assets/logo/' + tech.icon + '.png'"
            alt="icon"
            class="w-8 h-8 inline mr-3"
          />{{ tech.name }}
        </div>
        <hr class="border-b-1 w-[98%] mx-auto border-slate-800" />
      </a>

      <div
        class="
          w-full
          p-3
          mt-20
          shadow-md
          rounded-lg
          flex
          justify-center
          items-center
          dark:bg-slate-700
        "
      >
        <h1 class="font-bold text-2xl text-[#f59800]">Temukan kami di :</h1>
      </div>
      <div class="my-10 w-full flex justify-around items-center">
        <a
          v-for="sosial in json[1]"
          target="_blank"
          :href="sosial.url"
          :key="sosial.name"
        >
          <i :class="`fab fa-${sosial.name} text-3xl`"></i>
        </a>
      </div>
      <footer class="text-center">Created &copy; 2022 | Khartoum</footer>
    </div>
  </Layout>
</template>