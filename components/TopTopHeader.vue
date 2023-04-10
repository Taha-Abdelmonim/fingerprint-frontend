<template>
  <section class="bg-fpBlueDark py-3">
    <div class="container flex mx-auto">
      <div class="w-1/3 flex items-center gap-x-2">
        <Icon class="text-fpOrange text-3xl" :name="locale == 'ar' ? 'ic-baseline-phone-enabled' : 'ic-baseline-local-phone'" />
        <p class="text-white text-lg">201090844348</p>
        <Icon class="text-fpOrange text-3xl ms-5 mt-1" name="ic-baseline-chat-bubble" />
        <p class="text-white text-lg">info@fingerprintm.com</p>
      </div>
      <div class="w-1/3">
        <ul class="flex items-center gap-x-3 justify-center">
          <li>
            <a href="#"><Icon class="text-white hover:text-[#1877f2] transition hover:scale-110 text-4xl" name="uil-facebook" /></a>
          </li>
          <li>
            <a href="#"><Icon class="text-white hover:text-[#1da1f2] transition hover:scale-110 text-4xl" name="mdi-twitter-box" /></a>
          </li>
          <li>
            <a href="#"><Icon class="text-white hover:text-[#c13584] transition hover:scale-110 text-4xl" name="ri-instagram-fill" /></a>
          </li>
          <li>
            <a href="#"><Icon class="text-white hover:text-[#0a66c2] transition hover:scale-110 text-4xl" name="mdi-linkedin" /></a>
          </li>
          <li>
            <a href="#"><Icon class="text-white hover:text-[#fffc00] transition hover:scale-110 text-4xl" name="uil-snapchat-square" /></a>
          </li>
        </ul>
      </div>
      <div class="w-1/3">
        <button
          type="button"
          class="text-white bg-fpOrange hover:bg-fpOrangeDark transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg px-5 py-1.5 ms-auto block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
        >
          {{ $t("order") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const {locale, setLocale} = useI18n();
</script>

<style></style>
