<script setup>
  defineProps({
    jadwal: Object,
  });
</script>

<template>
  <div>
    <div
      class="w-full p-3 shadow-md rounded-lg flex justify-between items-center"
    >
      <h1 class="text-[#f59800] font-bold text-2xl flex items-center">
        <i
          class="fas text-black dark:text-slate-200 fa-mosque mr-3 text-3xl"
        ></i
        >Shubuh
      </h1>
      <div
        class="
          bg-[#f59800]
          shadow-lg
          h-full
          px-6
          py-3
          font-extrabold
          text-2xl
          rounded-lg
          text-white
        "
      >
        {{ jadwal.Fajr }}
      </div>
    </div>
    <div
      class="w-full p-3 shadow-md rounded-lg flex justify-between items-center"
    >
      <h1 class="text-[#f59800] font-bold text-2xl flex items-center">
        <i class="fas text-black dark:text-slate-200 fa-sun mr-3 text-3xl"></i
        >Terbit
      </h1>
      <div
        class="
          bg-[#f59800]
          shadow-lg
          h-full
          px-6
          py-3
          font-extrabold
          text-2xl
          rounded-lg
          text-white
        "
      >
        {{ jadwal.Sunrise }}
      </div>
    </div>
    <div
      class="w-full p-3 shadow-md rounded-lg flex justify-between items-center"
    >
      <h1 class="text-[#f59800] font-bold text-2xl flex items-center">
        <i
          class="fas text-black dark:text-slate-200 fa-mosque mr-3 text-3xl"
        ></i
        >Dzuhur
      </h1>
      <div
        class="
          bg-[#f59800]
          shadow-lg
          h-full
          px-6
          py-3
          font-extrabold
          text-2xl
          rounded-lg
          text-white
        "
      >
        {{ jadwal.Dhuhr }}
      </div>
    </div>
    <div
      class="w-full p-3 shadow-md rounded-lg flex justify-between items-center"
    >
      <h1 class="text-[#f59800] font-bold text-2xl flex items-center">
        <i
          class="fas text-black dark:text-slate-200 fa-mosque mr-3 text-3xl"
        ></i
        >Asar
      </h1>
      <div
        class="
          bg-[#f59800]
          shadow-lg
          h-full
          px-6
          py-3
          font-extrabold
          text-2xl
          rounded-lg
          text-white
        "
      >
        {{ jadwal.Asr }}
      </div>
    </div>
    <div
      class="w-full p-3 shadow-md rounded-lg flex justify-between items-center"
    >
      <h1 class="text-[#f59800] font-bold text-2xl flex items-center">
        <i
          class="fas text-black dark:text-slate-200 fa-mosque mr-3 text-3xl"
        ></i
        >Maghrib
      </h1>
      <div
        class="
          bg-[#f59800]
          shadow-lg
          h-full
          px-6
          py-3
          font-extrabold
          text-2xl
          rounded-lg
          text-white
        "
      >
        {{ jadwal.Maghrib }}
      </div>
    </div>
    <div
      class="w-full p-3 shadow-md rounded-lg flex justify-between items-center"
    >
      <h1 class="text-[#f59800] font-bold text-2xl flex items-center">
        <i
          class="fas text-black dark:text-slate-200 fa-mosque mr-3 text-3xl"
        ></i
        >Isya'
      </h1>
      <div
        class="
          bg-[#f59800]
          shadow-lg
          h-full
          px-6
          py-3
          font-extrabold
          text-2xl
          rounded-lg
          text-white
        "
      >
        {{ jadwal.Isha }}
      </div>
    </div>
    <div
      class="w-full p-3 shadow-md rounded-lg flex justify-between items-center"
    >
      <h1 class="text-[#f59800] font-bold text-2xl flex items-center">
        <i class="fas text-black dark:text-slate-200 fa-moon mr-3 text-3xl"></i
        >Imsak
      </h1>
      <div
        class="
          bg-[#f59800]
          shadow-lg
          h-full
          px-6
          py-3
          font-extrabold
          text-2xl
          rounded-lg
          text-white
        "
      >
        {{ jadwal.Imsak }}
      </div>
    </div>
  </div>
</template>