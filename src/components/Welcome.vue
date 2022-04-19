<template>
  <div class="flex flex-col justify-around items-center h-full">
    <img src="/assets/welcome.svg" class="w-80" alt="svg" />
    <div class="w-full p-5 text-center">
      <h3 class="font-semibold my-5 text-2xl">Hai, Semua...</h3>
      <h4 class="mb-10 text-2xl">Selamat datang di Piket Sabtu</h4>
      <router-link
        to="/menu"
        class="
          bg-[#f59800]
          p-3
          rounded-md
          text-white
          font-extrabold
          w-full
          block
          shadow-lg
          text-2xl
          dark:bg-slate-700
        "
        >Lihat Menu Puasa
      </router-link>
    </div>
  </div>
</template>
