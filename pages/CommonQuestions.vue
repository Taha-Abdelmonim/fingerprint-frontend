<template>
  <section class="bg-fpBlueDark/10 privacy-policy">
    <BreadCrumbs :classes="'bg-breadcrumb h-28 lg:h-[500px] text-white'" :contents="['اﻷسئلة الشائعة']" />
    <div class="container mx-auto bg-gray-100 my-box-shadow pt-24 pb-40">
      <h1 class="text-center text-4xl font-bold text-main_color_2 border-b-2 w-fit mx-auto border-main_color_2">اﻷسئلة الشائعة</h1>

      <div class="mt-20">
        <h2 id="accordion-collapse-heading-1 ">
          <button
            @click="openqution_1 = !openqution_1"
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <span>كم تكليفة الموقع؟</span>
            <Icon name="zondicons-cheveron-down" class="text-2xl transition-all duration-300" :class="openqution_1 ? 'rotate-180' : ''" />
          </button>
        </h2>
        <div v-show="openqution_1">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p class="mb-2 text-gray-500 dark:text-gray-400">{{ $t("lorem") }} {{ $t("lorem") }}</p>
            <p class="text-gray-500 dark:text-gray-400">
              {{ $t("lorem") }}
            </p>
          </div>
        </div>

        <h2>
          <button
            @click="openqution_2 = !openqution_2"
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <span>What are the differences between Flowbite and Tailwind UI?</span>
            <Icon name="zondicons-cheveron-down" class="text-2xl transition-all duration-300" :class="openqution_2 ? 'rotate-180' : ''" />
          </button>
        </h2>
        <div v-show="openqution_2">
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that
              Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
useHead({
  title: "اﻷسئلة الشائعة",
});
let openqution_1 = ref(true);
let openqution_2 = ref(false);
</script>
<style>
.bg-breadcrumb {
  background-image: url("~/assets/images/home/hero.png");
  background-size: cover;
}
</style>
