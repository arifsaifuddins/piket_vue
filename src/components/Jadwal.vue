<script setup>
  defineProps({
    jadwal: Object,
  });
</script>

<template>
  <div>
    <div
      class="
        w-full
        p-2
        mt-4
        shadow-md
        rounded-lg
        flex
        justify-between
        items-center
      "
    >
      <h1 class="text-[#f59800] font-bold text-2xl flex items-center">
        <i class="fas text-black dark:text-slate-200 fa-clock mr-3 text-2xl"></i
        >Shubuh
      </h1>
      <div
        class="
          bg-[#f59800]
          shadow-lg
          h-full
          px-4
          py-2
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
      class="
        w-full
        p-2
        mt-4
        shadow-md
        rounded-lg
        flex
        justify-between
        items-center
      "
    >
      <h1 class="text-[#f59800] font-bold text-2xl flex items-center">
        <i class="fas text-black dark:text-slate-200 fa-sun mr-3 text-2xl"></i
        >Terbit
      </h1>
      <div
        class="
          bg-[#f59800]
          shadow-lg
          h-full
          px-4
          py-2
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
      class="
        w-full
        p-2
        mt-4
        shadow-md
        rounded-lg
        flex
        justify-between
        items-center
      "
    >
      <h1 class="text-[#f59800] font-bold text-2xl flex items-center">
        <i class="fas text-black dark:text-slate-200 fa-clock mr-3 text-2xl"></i
        >Dzuhur
      </h1>
      <div
        class="
          bg-[#f59800]
          shadow-lg
          h-full
          px-4
          py-2
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
      class="
        w-full
        p-2
        mt-4
        shadow-md
        rounded-lg
        flex
        justify-between
        items-center
      "
    >
      <h1 class="text-[#f59800] font-bold text-2xl flex items-center">
        <i class="fas text-black dark:text-slate-200 fa-clock mr-3 text-2xl"></i
        >Asar
      </h1>
      <div
        class="
          bg-[#f59800]
          shadow-lg
          h-full
          px-4
          py-2
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
      class="
        w-full
        p-2
        mt-4
        shadow-md
        rounded-lg
        flex
        justify-between
        items-center
      "
    >
      <h1 class="text-[#f59800] font-bold text-2xl flex items-center">
        <i class="fas text-black dark:text-slate-200 fa-clock mr-3 text-2xl"></i
        >Maghrib
      </h1>
      <div
        class="
          bg-[#f59800]
          shadow-lg
          h-full
          px-4
          py-2
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
      class="
        w-full
        p-2
        mt-4
        shadow-md
        rounded-lg
        flex
        justify-between
        items-center
      "
    >
      <h1 class="text-[#f59800] font-bold text-2xl flex items-center">
        <i class="fas text-black dark:text-slate-200 fa-clock mr-3 text-2xl"></i
        >Isya'
      </h1>
      <div
        class="
          bg-[#f59800]
          shadow-lg
          h-full
          px-4
          py-2
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
      class="
        w-full
        p-2
        mt-4
        shadow-md
        rounded-lg
        flex
        justify-between
        items-center
      "
    >
      <h1 class="text-[#f59800] font-bold text-2xl flex items-center">
        <i class="fas text-black dark:text-slate-200 fa-moon mr-3 text-2xl"></i
        >Imsak
      </h1>
      <div
        class="
          bg-[#f59800]
          shadow-lg
          h-full
          px-4
          py-2
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