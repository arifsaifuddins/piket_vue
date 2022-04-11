<template>
  <div
    class="
      flex
      items-center
      fixed
      top-0
      right-0
      left-0
      h-20
      shadow
      bg-white
      dark:bg-slate-700
      justify-center
      sm:w-[400px]
      mx-auto
      w-full
    "
  >
    <img src="/assets/icons/icon.png" alt="icon" class="w-14" />
    <h1 class="text-4xl font-bold mx-3">
      Piket
      <span class="bg-[#f59800] px-3 py-1 rounded-md text-white shadow-sm"
        >Sabtu</span
      >
    </h1>
  </div>

  <slot />

  <div
    class="
      shadow
      flex
      justify-around
      items-end
      py-3
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
      <h3 class="text-sm mt-1">Menu</h3>
    </router-link>
    <router-link to="/anggota" class="flex flex-col items-center">
      <i class="fas fa-user-group text-xl"></i>
      <h3 class="text-sm mt-1">Anggota</h3>
    </router-link>
    <router-link to="/shalat" class="flex flex-col items-center">
      <i class="fas fa-clock text-xl"></i>
      <h3 class="text-sm mt-1">Shalat</h3>
    </router-link>
    <router-link to="/tentang" class="flex flex-col items-center">
      <i class="fas fa-list-check text-xl"></i>
      <h3 class="text-sm mt-1">Tentang</h3>
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