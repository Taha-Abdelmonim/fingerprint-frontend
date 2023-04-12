<template>
  <BreadCrumbs :classes="'bg-breadcrumb'" :contents="[$t('login')]" />
  <section class="bg-fpBlueDark/10 pt-10 pb-40">
    <div
      class="sm:py-10 sm:mx-3 mx-auto lg:w-[1200px] flex flex-col-reverse lg:flex-row justify-center items-center gap-x-10 bg-white rounded-xl overflow-hidden shadow-xl p-0 lg:h-[70vh]"
    >
      <div class="lg:w-1/2 lg:ps-4 lg:ms-28 sm:px-4">
        <h1 class="font-bold text-center text-3xl lg:text-5xl text-fpBlueDark mb-10">{{ $t("welcome_back") }}</h1>
        <div>
          <div class="mb-6">
            <label for="success" class="block mb-2 text-sm lg:text-md font-medium text-gray-700 dark:text-green-500">{{ $t("email_user") }}</label>
            <input
              type="text"
              class="bg-gray-50 border text-green-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:outline-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
              placeholder="name@example.com"
            />
            <!-- <p class="mt-2 text-sm text-red-500"><span class="font-medium">Well done!</span> Some success message.</p> -->
          </div>
          <div class="mb-6">
            <label for="success" class="block mb-2 text-sm lg:text-md font-medium text-gray-700 dark:text-green-500">{{ $t("password_user") }}</label>
            <input
              type="text"
              class="bg-gray-50 border text-green-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:outline-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
              placeholder="********"
            />
            <!-- <p class="mt-2 text-sm text-red-500"><span class="font-medium">Well done!</span> Some success message.</p> -->
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <input checked id="green-checkbox" type="checkbox" value="" class="w-6 h-6 cursor-pointer text-green-600 bg-gray-100 border-gray-300 rounded" />
              <label for="green-checkbox" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300 cursor-pointer select-none">{{ $t("remember") }}</label>
            </div>
            <a href="#" class="text-red-500">{{ $t("forgot_password") }}</a>
          </div>
          <button
            type="button"
            class="text-fpBlueDark bg-fpOrange hover:bg-fpOrange/90 transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg lg:text-2xl mt-6 px-4 lg:px-10 py-2 lg:py-3 mx-auto block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
          >
            {{ $t("login") }}
          </button>
          <div class="flex items-center justify-center mt-10">
            <span class="w-20 h-1.5 bg-fpBlueDark rounded-full mt-1 me-4"></span>
            <p class="text-fpBlueDark font-bold text-xl lg:text-3xl">{{ $t("or_register_from") }}</p>
            <span class="w-20 h-1.5 bg-fpBlueDark rounded-full mt-1 ms-4"></span>
          </div>
          <div class="flex flex-col lg:flex-row sm:gap-y-4 items-center justify-between mt-10">
            <button class="border-2 px-4 py-2 rounded-lg">
              <Icon name="mdi-google" class="text-green-500" />
              <span class="">تسجيل الدخول عبر جوجل</span>
            </button>
            <button class="border-2 px-4 py-2 rounded-lg">
              <Icon name="mdi-google" class="text-green-500" />
              <span class="">تسجيل الدخول عبر جوجل</span>
            </button>
          </div>
          <div class="text-md lg:text-xl mt-5 lg:mt-10">
            <span>{{ $t("dont_account") }}</span>
            <nuxt-link :to="localePath(`/register`)" class="text-fpBlueDark font-bold ms-1">{{ $t("new_account") }}</nuxt-link>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2 max-h-full">
        <img src="~/assets/images/login_small.png" alt="Login" class="object-cover h-[70vh] ms-auto" />
      </div>
    </div>
  </section>
</template>
<script setup>
const {t} = useI18n();
useHead({
  title: t("login"),
});
</script>
