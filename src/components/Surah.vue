<script setup>
  import { ref } from "@vue/reactivity";
  import { onMounted } from "@vue/runtime-core";
  import { useRoute, useRouter } from "vue-router";

  const router = useRouter();
  const route = useRoute();

  const surah = ref();
  const nama = ref();
  const arab = ref();
  const pre = ref();
  const basmalah = ref();

  onMounted(() => {
    return fetchSurah(route.params.no);
  });

  const fetchSurah = async (no) => {
    await fetch(`https://api.quran.sutanlab.id/surah/${no}`)
      .then((res) => res.json())
      .then((res) => {
        surah.value = res.data.verses;
        nama.value = res.data.name.transliteration.id;
        arab.value = res.data.name.long;
        pre.value = res.data.preBismillah;
        basmalah.value = res.data.preBismillah.text.arab;
      });
  };
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
      p-5
      shadow
      bg-white
      dark:bg-slate-700
      sm:w-[400px]
      mx-auto
      w-full
    "
  >
    <div class="text-xl flex items-center">
      <i
        class="fa fa-arrow-left-long mr-3 cursor-pointer text-xl"
        @click="router.back()"
      ></i>
      {{ nama }}
    </div>
  </div>
  <div class="pt-20 flex flex-col">
    <div
      class="
        w-full
        p-3
        mb-3
        mt-2
        shadow-md
        flex
        justify-center
        items-center
        bg-[#f59800]
        rounded-lg
        dark:bg-slate-700
      "
    >
      <h1 class="font-bold text-xl text-white font-[DroidarabickufiRegular]">
        {{ arab }}
      </h1>
    </div>
    <div class="flex flex-col mt-4">
      <h1
        v-if="pre != null"
        class="
          font-[DroidarabickufiRegular]
          mb-4
          text-lg text-center
          pb-4
          border-b
          dark:border-slate-200
          border-slate-800
          text-[#f59800]
          font-bold
        "
      >
        {{ basmalah }}
      </h1>
      <div v-for="ayat in surah" :key="ayat.number.inSurah">
        <div
          class="
            flex flex-col
            rounded-xl
            overflow-hidden
            bg-slate-100
            dark:bg-slate-800
          "
        >
          <h1
            class="text-2xl text-right font-bold font-[ScheherazadeRegular] p-4"
          >
            {{ ayat.text.arab }}
          </h1>
          <h1
            class="text-sm p-4 border-t dark:border-slate-200 border-slate-800"
          >
            {{ ayat.number.inSurah }} - {{ ayat.translation.id }}
          </h1>
        </div>
        <audio controls class="w-full mt-2 mb-4 rounded-xl">
          <source :src="`${ayat.audio.primary}.mp3`" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  </div>
</template>