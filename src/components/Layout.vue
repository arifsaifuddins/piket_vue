<template>
  <div
    class="
      flex
      items-center
      fixed
      top-0
      right-0
      left-0
      py-4
      px-8
      shadow
      bg-white
      dark:bg-slate-700
      justify-between
      sm:w-[400px]
      mx-auto
      w-full
    "
  >
    <img src="/assets/icons/icon.png" alt="icon" class="w-10" />
    <h1 class="font-bold mx-3 text-2xl">
      Piket
      <span class="bg-[#f59800] px-3 py-1 rounded-md text-white shadow-sm"
        >Sabtu</span
      >
    </h1>
    <router-link to="/tentang">
      <i class="fas fa-list-check text-2xl"></i>
    </router-link>
  </div>

  <slot />

  <div
    class="
      shadow
      flex
      justify-around
      items-end
      py-2
      bg-white
      dark:bg-slate-700
      fixed
      bottom-0
      right-0
      left-0
      sm:w-[400px]
      mx-auto
      w-full
    "
  >
    <router-link to="/menu" class="flex flex-col items-center">
      <i class="fas fa-utensils text-xl"></i>
      <h3 class="text-sm">Menu</h3>
    </router-link>
    <router-link to="/quran" class="flex flex-col items-center">
      <i class="fas fa-book-open text-xl"></i>
      <h3 class="text-sm">Qur'an</h3>
    </router-link>
    <router-link to="/shalat" class="flex flex-col items-center">
      <i class="fas fa-clock text-xl"></i>
      <h3 class="text-sm">Shalat</h3>
    </router-link>
    <router-link to="/anggota" class="flex flex-col items-center">
      <i class="fas fa-user text-xl"></i>
      <h3 class="text-sm">Anggota</h3>
    </router-link>
  </div>
</template>

<style scoped>
  .router-link-active,
  .router-link-exact-active {
    color: #f59800;
    font-weight: bolder;
  }
</style>