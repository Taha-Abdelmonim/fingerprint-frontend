<template>
  <div class="sm:hidden">
    <BreadCrumbs :classes="'bg-breadcrumb put h-[450px] overlay text-white text-3xl'" :contents="[$t('about')]" />
  </div>
  <div class="lg:hidden">
    <BreadCrumbs :classes="'text-3xl'" :contents="[$t('about')]" />
  </div>
  <section class="bg-fpBlueDark/10 pt-10 pb-40">
    <div class="container mx-auto">
      <div>
        <h1 class="text-3xl lg:text-5xl text-fpBlueDark dark:text-fpOrange font-bold border-b-2 border-fpOrange w-fit mx-auto pb-2 lg:pb-6 mb-16">
          {{ $t("fingerprint_company") }}
        </h1>
        <p class="text-md lg:text-2xl font-medium dark:text-gray-300" v-html="$t('about_desc_1')"></p>
        <p class="text-md lg:text-2xl font-medium mt-6 dark:text-gray-300" v-html="$t('about_desc_2')"></p>
        <p class="text-md lg:text-2xl font-medium mt-6 dark:text-gray-300" v-html="$t('about_desc_3')"></p>
      </div>
      <div class="mt-20">
        <h1 class="text-3xl lg:text-5xl text-fpBlueDark dark:text-fpOrange font-bold border-b-2 border-fpOrange w-fit mx-auto pb-2 lg:pb-6 mb-10">{{ $t("about_fingerprint") }}</h1>
        <p class="text-md lg:text-2xl font-medium dark:text-gray-300" v-html="$t('desc_about_fingerprint')"></p>
        <p class="text-md lg:text-2xl font-medium mt-10 dark:text-gray-300" v-html="$t('desc_about_fingerprint_2')"></p>
      </div>
    </div>
  </section>
  <AboutFirstChoose class="mt-10" />
  <section class="bg-fpRed py-6">
    <div class="container mx-auto">
      <div>
        <h2 class="text-3xl lg:text-4xl text-fpOrange font-bold">{{ $t("see_us") }}</h2>
        <p class="text-md lg:text-xl text-white font-bold mt-4">{{ $t("desc_see_us") }}</p>
      </div>
      <div class="mt-10">
        <h2 class="text-3xl lg:text-4xl text-fpOrange font-bold">{{ $t("mission_us") }}</h2>
        <p class="text-md lg:text-xl text-white font-bold mt-4">{{ $t("desc_mission_us") }}</p>
      </div>
      <div class="mt-10">
        <h2 class="text-3xl lg:text-4xl text-fpOrange font-bold">{{ $t("target_us") }}</h2>
        <p class="text-md lg:text-xl text-white font-bold mt-4">{{ $t("desc_target_us") }}</p>
      </div>
      <div class="mt-10">
        <h2 class="text-3xl lg:text-4xl text-fpOrange font-bold">{{ $t("planning") }}</h2>
        <p class="text-md lg:text-xl text-white font-bold mt-4">{{ $t("desc_planning") }}</p>
      </div>
      <div class="mt-10">
        <h2 class="text-3xl lg:text-4xl text-fpOrange font-bold">{{ $t("the_job") }}</h2>
        <p class="text-md lg:text-xl text-white font-bold mt-4">{{ $t("desc_the_job") }}</p>
      </div>
      <div class="mt-10">
        <h2 class="text-3xl lg:text-4xl text-fpOrange font-bold">{{ $t("follow_up") }}</h2>
        <p class="text-md lg:text-xl text-white font-bold mt-4">{{ $t("desc_follow_up") }}</p>
      </div>
    </div>
  </section>
  <section class="bg-fpBlueDark/10 py-10 pb-20 lg:pb-40">
    <h2 class="text-3xl lg:text-5xl text-fpBlueDark font-bold border-b-2 border-fpOrange w-fit mx-auto pb-2 lg:pb-6 mb-16">{{ $t("steps_start") }}</h2>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center">
        <div class="bg-fpRed rounded-full flex flex-col justify-center items-center py-6">
          <Icon class="text-6xl text-white sm:-rotate-90" :name="dir == 'rtl' ? 'mdi-arrow-left-bold-outline' : 'mdi-arrow-right-bold-outline'" />
          <p class="text-fpOrange text-xl lg:text-2xl font-bold">{{ $t("step_1") }}</p>
        </div>
        <div class="bg-fpRed rounded-full flex flex-col justify-center items-center py-6">
          <Icon class="text-6xl text-white sm:-rotate-90" :name="dir == 'rtl' ? 'mdi-arrow-left-bold-outline' : 'mdi-arrow-right-bold-outline'" />
          <p class="text-fpOrange text-xl lg:text-2xl font-bold">{{ $t("step_2") }}</p>
        </div>
        <div class="bg-fpRed rounded-full flex flex-col justify-center items-center py-6">
          <Icon class="text-6xl text-white sm:-rotate-90" :name="dir == 'rtl' ? 'mdi-arrow-left-bold-outline' : 'mdi-arrow-right-bold-outline'" />
          <p class="text-fpOrange text-xl lg:text-2xl font-bold">{{ $t("step_3") }}</p>
        </div>
        <div class="bg-fpRed rounded-full flex flex-col justify-center items-center py-6">
          <Icon class="text-6xl text-white sm:-rotate-90" :name="dir == 'rtl' ? 'mdi-arrow-left-bold-outline' : 'mdi-arrow-right-bold-outline'" />
          <p class="text-fpOrange text-xl lg:text-2xl font-bold">{{ $t("step_4") }}</p>
        </div>
        <div class="bg-fpRed rounded-full flex flex-col justify-center items-center py-6">
          <Icon class="text-6xl text-white sm:-rotate-90" :name="dir == 'rtl' ? 'mdi-arrow-left-bold-outline' : 'mdi-arrow-right-bold-outline'" />
          <p class="text-fpOrange text-xl lg:text-2xl font-bold">{{ $t("step_5") }}</p>
        </div>
        <div class="bg-fpRed rounded-full flex flex-col justify-center items-center py-6">
          <Icon class="text-6xl text-white sm:-rotate-90" :name="dir == 'rtl' ? 'mdi-arrow-left-bold-outline' : 'mdi-arrow-right-bold-outline'" />
          <p class="text-fpOrange text-lg lg:text-2xl font-bold">{{ $t("step_6") }}</p>
        </div>
        <div class="bg-fpRed rounded-full flex flex-col justify-center items-center py-6">
          <Icon class="text-6xl text-white sm:-rotate-90" :name="dir == 'rtl' ? 'mdi-arrow-left-bold-outline' : 'mdi-arrow-right-bold-outline'" />
          <p class="text-fpOrange text-xl lg:text-2xl font-bold">{{ $t("step_7") }}</p>
        </div>
        <div class="bg-fpRed rounded-full flex flex-col justify-center items-center py-6">
          <Icon class="text-6xl text-white sm:-rotate-90" :name="dir == 'rtl' ? 'mdi-arrow-left-bold-outline' : 'mdi-arrow-right-bold-outline'" />
          <p class="text-fpOrange text-xl lg:text-2xl font-bold">{{ $t("step_8") }}</p>
        </div>
        <div class="bg-fpRed rounded-full flex flex-col justify-center items-center py-6">
          <Icon class="text-6xl text-white sm:-rotate-90" :name="dir == 'rtl' ? 'mdi-arrow-left-bold-outline' : 'mdi-arrow-right-bold-outline'" />
          <p class="text-fpOrange text-xl lg:text-2xl font-bold">{{ $t("step_9") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const {currentLocale, dir} = useLang();
const {t} = useI18n();
useHead({
  title: t("about"),
  meta: [{name: "title", content: t("about")}],
});
</script>
