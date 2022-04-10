<script setup>
  import Layout from "./Layout.vue";
  import menus from "../../public/json/piket.json";
  import { onMounted, ref } from "@vue/runtime-core";

  const no = ref("1");

  onMounted(() => {
    setInterval(() => {
      return (no.value = Math.ceil(Math.random() * 5).toString());
    }, 3000);
  });
</script>

<template>
  <Layout>
    <div class="py-20 flex flex-col">
      <div class="mb-5">
        <img
          :src="`/assets/slide/ramadhan${no}.jpg`"
          alt="slide"
          class="w-full rounded-lg shadow-lg"
        />
      </div>

      <div v-for="menu in menus" class="flex flex-col" :key="menu.id">
        <div
          class="
            w-full
            p-6
            shadow-md
            rounded-lg
            flex
            justify-between
            items-center
          "
        >
          <h1 class="font-bold text-3xl text-[#f59800]">{{ menu.menu }}</h1>
          <img
            :src="`/assets/svg/navbar/${menu.icon}.svg`"
            alt="icon"
            class="w-8 h-8"
          />
        </div>
        <div class="mb-10 mt-6">
          <router-link
            v-for="daf in menu.daftar"
            :to="`../menu/${daf.id}`"
            :key="daf.id"
          >
            <div
              class="
                p-3
                pt-6
                text-xl
                hover:bg-slate-50
                rounded-lg
                hover:text-slate-800
                text-[#f59800]
              "
            >
              <img
                :src="`/assets/svg/${daf.judul}.svg`"
                alt="icon"
                class="w-8 h-8 inline mr-3"
              />{{ daf.judul }}
            </div>
            <hr class="border-b-1 mb-2 w-[98%] mx-auto border-slate-800" />
          </router-link>
        </div>
      </div>
    </div>
  </Layout>
</template>