<script setup>
  import Layout from "./Layout.vue";
  import menus from "../../public/json/piket.json";
  import { onMounted, ref } from "@vue/runtime-core";

  const no = ref("1");

  onMounted(() => {
    setInterval(() => {
      return (no.value = Math.ceil(Math.random() * 5).toString());
    }, 3000);

    if (localStorage.key("mode")) {
      document.querySelector(".mode").classList.add("justify-end");
      document.querySelector("html").classList.add("dark");
    }
  });

  const darkMode = () => {
    document.querySelector(".mode").classList.toggle("justify-end");
    document.querySelector("html").classList.toggle("dark");

    if (!localStorage.getItem("mode")) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.removeItem("mode");
    }
  };
</script>

<template>
  <Layout>
    <div class="py-20 flex flex-col">
      <div class="p-3 flex justify-between items-center">
        <div class="text-2xl font-bold">Dark Mode</div>
        <div
          class="
            w-12
            h-4
            flex
            items-center
            rounded-full
            cursor-pointer
            mode
            bg-slate-200
          "
          @click="darkMode()"
        >
          <div class="h-6 w-6 rounded-full bg-black dark:bg-[#f59800]"></div>
        </div>
      </div>
      <hr class="border-b-1 mb-5 w-[98%] mx-auto border-slate-800" />

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
            dark:bg-slate-700
          "
        >
          <h1 class="font-bold text-3xl text-[#f59800]">{{ menu.menu }}</h1>
          <i
            :class="`fas fa-${menu.icon} text-3xl dark:text-slate-200 text-[#f59800]`"
          ></i>
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
                py-5
                text-xl
                hover:bg-slate-50
                dark:hover:bg-slate-700 dark:hover:text-slate-200
                rounded-lg
                hover:text-slate-800
                text-[#f59800]
              "
            >
              <i
                :class="`fas fa-${daf.icon} text-2xl mr-3 text-black dark:text-slate-200`"
              ></i>
              {{ daf.judul }}
            </div>
            <hr class="border-b-1 mb-2 w-[98%] mx-auto border-slate-800" />
          </router-link>
        </div>
      </div>
    </div>
  </Layout>
</template>