<template>
  <BreadCrumbs :classes="'bg-white'" :contents="[$t('contact')]" />
  <section class="bg-fpBlueDark/10 pt-10 pb-40">
    <div
      class="sm:py-10 sm:mx-3 mx-auto lg:w-[1200px] flex flex-col-reverse lg:flex-row justify-center items-center gap-x-10 bg-white rounded-xl overflow-hidden shadow-xl p-0 lg:h-[70vh]"
    >
      <div class="lg:w-1/2 lg:ps-4 lg:ms-8 sm:px-4">
        <h1 class="font-bold text-center text-3xl lg:text-5xl text-fpBlueDark">{{ $t("title_contact") }}</h1>
        <p class="mt-4 text-center text-lg">{{ $t("desc_contact") }}</p>
        <div>
          <div class="mb-6 mt-10">
            <label for="success" class="block mb-2 text-sm lg:text-md font-medium text-gray-700 dark:text-green-500">{{ $t("title_message") }}</label>
            <input
              type="text"
              class="bg-gray-50 border text-green-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:outline-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
              :placeholder="$t('title')"
            />
            <!-- <p class="mt-2 text-sm text-red-500"><span class="font-medium">Well done!</span> Some success message.</p> -->
          </div>
          <div class="mb-6">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t("message_contact") }}</label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none focus:outline-fpLightGray h-40"
              :placeholder="$t('write_message')"
            ></textarea>
            <!-- <p class="mt-2 text-sm text-red-500"><span class="font-medium">Well done!</span> Some success message.</p> -->
          </div>
          <button
            type="button"
            class="text-fpBlueDark bg-fpOrange hover:bg-fpOrange/90 transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg lg:text-2xl mt-6 px-4 lg:px-10 py-2 lg:py-3 mx-auto block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
          >
            {{ $t("submit") }}
          </button>
          <div class="flex justify-between my-8">
            <p class="text-2xl text-fpBlueDark font-bold">201090844348</p>
            <p class="text-2xl text-fpBlueDark font-bold">info@fingerprintm.com</p>
          </div>
          <ul class="flex items-center gap-x-3 mt-4">
            <li>
              <a href="#"><Icon class="text-gray-800 hover:text-[#1877f2] transition hover:scale-110 text-4xl" name="uil-facebook" /></a>
            </li>
            <li>
              <a href="#"><Icon class="text-gray-800 hover:text-[#1da1f2] transition hover:scale-110 text-4xl" name="mdi-twitter-box" /></a>
            </li>
            <li>
              <a href="#"><Icon class="text-gray-800 hover:text-[#c13584] transition hover:scale-110 text-4xl" name="ri-instagram-fill" /></a>
            </li>
            <li>
              <a href="#"><Icon class="text-gray-800 hover:text-[#0a66c2] transition hover:scale-110 text-4xl" name="mdi-linkedin" /></a>
            </li>
            <li>
              <a href="#"><Icon class="text-gray-800 hover:text-[#fffc00] transition hover:scale-110 text-4xl" name="uil-snapchat-square" /></a>
            </li>
          </ul>
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
