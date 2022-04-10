<script setup>
  import { ref } from "@vue/reactivity";
  import { onMounted } from "@vue/runtime-core";
  import Layout from "./Layout.vue";
  import Jadwal from "./Jadwal.vue";

  const kota = ref("Khartoum");
  const negara = ref("Sudan");

  const kotaLoc = ref("Khartoum");
  const negaraLoc = ref("Sudan");

  const cuaca = ref(30);
  const jadwal = ref({});

  onMounted(() => {
    return fetchData();
  });

  const fetchWeather = async () => {
    return await fetch(
      `https://api.weatherapi.com/v1/current.json?key=c9ce1b8c35d04ec4bfe171021220801&q=${kota.value}`
    )
      .then((res) => res.json())
      .then((res) => {
        cuaca.value = res.current.temp_c;
        kotaLoc.value = res.location.name;
        negaraLoc.value = res.location.country;
      });
  };

  const fetchData = async () => {
    return await fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${kota.value}&country=${negara.value}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.code == "200") {
          fetchWeather();
          jadwal.value = res.data.timings;
          kota.value = "";
          negara.value = "";
        } else if (res.code == "400") {
          alert("Kota atau Negara tidak ada...!");
          kota.value = "";
          negara.value = "";
        } else {
          jadwal.value = res.data.timings;
        }
      });
  };

  const refresh = () => {
    return (window.location.href = "/");
  };
</script>

<template>
  <Layout>
    <div class="py-20 flex flex-col">
      <div class="p-4 text-center">
        <h1 class="text-8xl mb-8 font-bold w-full">
          {{ Math.ceil(parseInt(cuaca)) }}
          <div class="text-4xl align-top inline">&deg;</div>
          c
        </h1>
        <h1 class="text-xl text-[#f59800] mb-4">
          {{ `Wilayah ${kotaLoc}, ${negaraLoc}` }}
        </h1>
        <h1 class="text-4xl font-extrabold">
          Shalat | Cuaca
          <img
            src="/assets/svg/navbar/rotate.svg"
            class="w-8 inline ml-2 cursor-pointer"
            @click="refresh()"
            alt="refresh"
          />
        </h1>
      </div>
      <hr class="border-b-1 w-[98%] my-6 mx-auto border-slate-800" />
      <div class="flex flex-col">
        <Jadwal :jadwal="jadwal" />
      </div>
      <div class="mt-10 w-full flex">
        <input
          type="text"
          class="
            p-3
            text-xl
            outline-none
            focus:border-[#f59800]
            border
            w-[50%]
            mr-2
            shadow
            rounded-lg
            border-slate-800
          "
          placeholder="Kota..."
          required
          v-model="kota"
        />
        <input
          type="text"
          class="
            p-3
            text-xl
            outline-none
            focus:border-[#f59800]
            border
            w-[50%]
            ml-2
            shadow
            rounded-lg
            border-slate-800
          "
          placeholder="Negara..."
          required
          v-model="negara"
        />
      </div>
      <div
        class="
          mt-4
          bg-[#f59800]
          hover:bg-[#f58500]
          p-3
          shadow
          rounded-lg
          text-center
          font-bold
          text-2xl text-white
          cursor-pointer
        "
        @click="fetchData()"
      >
        Ubah Lokasi
      </div>
    </div>
  </Layout>
</template>