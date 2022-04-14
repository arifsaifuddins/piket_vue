import { createRouter, createWebHashHistory } from "vue-router";

import Menus from "./components/Menus.vue";
import Menu from "./components/Menu.vue";
import Welcome from "./components/Welcome.vue";
import NotFound from "./components/NotFound.vue";
import Tentang from "./components/Tentang.vue";
import Anggota from "./components/Anggota.vue";
import Shalat from "./components/Shalat.vue";
import Detail from "./components/Detail.vue";
import Quran from "./components/Quran.vue";
import Surah from "./components/Surah.vue";

const routes = [
  {
    name: 'Root',
    path: '/',
    component: Welcome
  },
  {
    name: 'Menu',
    path: '/menu',
    component: Menus
  },
  {
    name: 'Anggota',
    path: '/anggota',
    component: Anggota
  },
  {
    name: 'Shalat',
    path: '/shalat',
    component: Shalat
  },
  {
    name: 'Tentang',
    path: '/tentang',
    component: Tentang
  },
  {
    name: 'Param',
    path: '/:id',
    component: Menu
  },
  {
    name: 'Detail',
    path: '/anggota/:id',
    component: Detail
  },
  {
    name: 'Quran',
    path: '/quran',
    component: Quran
  },
  {
    name: 'Surah',
    path: '/quran/:no',
    component: Surah
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
