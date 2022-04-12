<script setup>
  import { ref } from "@vue/reactivity";
  import { onMounted } from "@vue/runtime-core";
  import Layout from "./Layout.vue";
  import Jadwal from "./Jadwal.vue";

  const kota = ref("Khartoum");
  const negara = ref("Sudan");

  const kotaLoc = ref("Khartoum");
  const negaraLoc = ref("Sudan");
  const uv = ref("1");
  const kondisi = ref("Clear");
  const time = ref("Africa/Khartoum");
  const baru = ref("2022-04-13 00:30");

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
        uv.value = res.current.uv;
        time.value = res.location.tz_id;
        baru.value = res.current.last_updated;
        kondisi.value = res.current.condition.text;
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

  const refresh = (kot, neg) => {
    kota.value = kot;
    negara.value = neg;

    return fetchData();
  };
</script>

<template>
  <Layout>
    <div class="py-20 flex flex-col">
      <div class="p-4 text-center">
        <h1 class="text-7xl mb-8 font-bold w-full">
          {{ Math.ceil(parseInt(cuaca)) }}
          <div class="text-6xl inline">&deg;C</div>
        </h1>
        <h1 class="text-xl text-[#f59800] mb-4">
          {{ `Wilayah ${kotaLoc}, ${negaraLoc}` }}
        </h1>
        <h1 class="text-3xl font-extrabold">
          Shalat | Cuaca
          <i
            class="fa fa-rotate text-3xl ml-2 cursor-pointer"
            @click="refresh('khartoum', 'sudan')"
          ></i>
        </h1>
      </div>
      <hr
        class="
          border-b-1
          w-[98%]
          mt-6
          mb-3
          mx-auto
          dark:border-slate-200
          border-slate-800
        "
      />
      <div class="text-md">
        <div class="flex px-3 justify-between">
          <h3>Kondisi</h3>
          <h3>{{ kondisi }}</h3>
        </div>
        <div class="flex px-3 justify-between">
          <h3>UV</h3>
          <h3>{{ uv }}</h3>
        </div>
        <div class="flex px-3 justify-between">
          <h3>Zona Waktu</h3>
          <h3>{{ time }}</h3>
        </div>
        <div class="flex px-3 justify-between">
          <h3>Diperbarui Saat</h3>
          <h3>{{ baru }}</h3>
        </div>
      </div>
      <hr
        class="
          border-b-1
          w-[98%]
          mt-3
          mx-auto
          dark:border-slate-200
          border-slate-800
        "
      />
      <div class="flex mt-6 flex-col">
        <Jadwal :jadwal="jadwal" />
      </div>
      <div class="mt-10 w-full flex">
        <input
          type="text"
          class="
            bg-transparent
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
            bg-transparent
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