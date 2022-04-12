<script setup>
  import menus from "../../public/json/menu.json";
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
      py-5
      shadow
      bg-white
      dark:bg-slate-700
      sm:w-[400px]
      mx-auto
      w-full
      px-6
    "
  >
    <div class="text-xl flex items-center">
      <i
        class="fa fa-arrow-left-long mr-3 cursor-pointer text-xl"
        @click="router.back()"
      ></i>
      {{
        `${menus[$route.params.id][0].menu} - ${
          menus[$route.params.id][0].kategori
        }`
      }}
    </div>
  </div>
  <div class="pt-20 px-3 flex flex-col">
    <div v-for="menu in menus[$route.params.id]" :key="menu.nama">
      <div class="text-xl pl-2 mt-3 flex items-center">
        {{ menu.nama }}
      </div>
      <hr
        class="
          border-b-1
          my-4
          w-[98%]
          mx-auto
          dark:border-slate-200
          border-slate-800
        "
      />
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
          mb-14
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
    </div>
  </div>
</template>

