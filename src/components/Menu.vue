<script setup>
  import Layout from "./Layout.vue";
  import menus from "../../public/json/menu.json";
  import { useRouter } from "vue-router";

  const router = useRouter();
</script>

<template>
  <Layout>
    <div class="py-20 flex flex-col">
      <div v-for="menu in menus[$route.params.id]" :key="menu.nama">
        <div class="text-xl mb-5 flex items-center">
          <img
            @click="router.back()"
            src="/assets/svg/navbar/back.svg"
            alt="icon"
            class="w-5 cursor-pointer inline mr-3"
          />{{ `${menu.menu} - ${menu.kategori} - ${menu.nama}` }}
        </div>
        <img
          :src="`/assets/menu/${menu.gambar}.jpeg`"
          :alt="`${menu.gambar}`"
          class="w-full rounded-lg mb-4"
        />
        <h1 class="font-bold text-3xl text-[#f59800] mb-4">{{ menu.nama }}</h1>
        <p
          class="
            first-letter:text-6xl
            text-lg
            first-letter:font-bold first-letter:mr-3 first-letter:float-left
          "
        >
          {{ menu.desc }}
        </p>
        <a
          target="_blank"
          :href="menu.url"
          class="
            w-full
            mt-4
            bg-[#f59800]
            p-3
            text-white
            font-bold
            text-xl
            block
            rounded-lg
            text-center
          "
          >Baca Lebih Lanjut...</a
        >
        <hr class="border-b-1 my-4 w-[98%] mx-auto border-slate-800" />
      </div>
    </div>
  </Layout>
</template>