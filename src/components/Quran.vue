<script setup>
  import { onMounted, ref } from "@vue/runtime-core";
  import Layout from "./Layout.vue";

  const quran = ref();

  onMounted(() => {
    return fetchQuran();
  });

  const fetchQuran = async () => {
    await fetch("https://api.quran.sutanlab.id/surah")
      .then((res) => res.json())
      .then((res) => {
        quran.value = res.data;
      });
  };

  const detail = (e) => {
    e.target.classList.toggle("-rotate-180");
    e.target.parentElement.nextElementSibling.classList.toggle("hidden");
  };
</script>

<template>
  <Layout>
    <div class="py-20 flex flex-col">
      <div class="p-4 text-center">
        <img src="/assets/icons/alquran.png" alt="icon" class="w-32 mx-auto" />
        <h1 class="mt-5 text-3xl font-extrabold">Al Qur'an Al Karim</h1>
      </div>
      <hr
        class="
          border-b-1
          w-[98%]
          mx-auto
          dark:border-slate-200
          border-slate-800
          mb-4
        "
      />
      <div v-for="surah in quran" :key="surah.number" class="flex flex-col">
        <div
          class="
            z-10
            w-full
            mt-4
            p-3
            px-4
            shadow-md
            rounded-lg
            flex
            justify-between
            items-center
            bg-white
            dark:bg-slate-700
          "
        >
          <router-link :to="`/quran/${surah.number}`" class="flex items-center">
            <i
              class="
                fas
                fa-book
                font-bold
                text-2xl
                mr-4
                dark:text-slate-200
                text-[#f59800]
              "
            ></i>
            <h1
              class="
                font-bold
                text-2xl
                font-[DroidarabickufiRegular]
                text-[#f59800]
              "
            >
              {{ surah.name.short }}
            </h1>
          </router-link>
          <i
            class="
              cursor-pointer
              fas
              fa-angle-down
              font-bold
              text-2xl
              dark:text-slate-200
              text-[#f59800]
              transition-all
              duration-300
            "
            @click="(e) => detail(e)"
          ></i>
        </div>
        <div
          class="
            -m-2
            w-full
            dark:bg-gray-800
            bg-gray-100
            hidden
            rounded-lg
            p-2
            pt-5
            mx-auto
          "
        >
          <div
            class="
              flex
              justify-between
              items-center
              mb-3
              px-2
              font-bold
              text-xl
            "
          >
            <h1>{{ surah.name.transliteration.id }}</h1>
            <h1 class="font-[DroidarabickufiRegular]">{{ surah.name.long }}</h1>
          </div>
          <div
            class="
              text-md
              flex flex-col
              mb-3
              dark:bg-slate-900
              bg-white
              px-2
              rounded-xl
            "
          >
            <div
              class="
                flex
                justify-between
                items-center
                py-3
                border-b
                dark:border-slate-200
                border-slate-800
              "
            >
              <h1>Urutan Surat</h1>
              <h1 class="p-1 bg-[#f59800] dark:bg-slate-700 rounded-full px-4">
                {{ surah.number }}
              </h1>
            </div>
            <div
              class="
                flex
                justify-between
                items-center
                py-3
                border-b
                dark:border-slate-200
                border-slate-800
              "
            >
              <h1>Jumlah Ayat {{ surah.name.transliteration.id }}</h1>
              <h1 class="p-1 bg-[#f59800] dark:bg-slate-700 rounded-full px-4">
                {{ surah.numberOfVerses }}
              </h1>
            </div>
            <div class="flex justify-between items-center py-2">
              <h1>Jenis Surat</h1>
              <h1 class="p-1 bg-[#f59800] dark:bg-slate-700 rounded-full px-4">
                {{ surah.revelation.id }}
              </h1>
            </div>
          </div>
          <h1
            class="
              mt-4
              text-xl text-center
              pb-2
              border-b
              dark:border-slate-200
              border-slate-800
              text-[#f59800]
              font-bold
            "
          >
            Terjemah Surat
          </h1>
          <p
            class="mt-3 text-justify dark:bg-slate-900 bg-white p-2 rounded-xl"
          >
            {{ surah.tafsir.id }}
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>