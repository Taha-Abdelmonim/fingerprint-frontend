<template>
  <section class="bg-fpBlue py-3">
    <div class="container justify-center flex mx-auto">
      <div class="w-1/3 hidden lg:flex items-center gap-x-2">
        <Icon class="text-fpOrange text-3xl" :name="locale == 'ar' ? 'ic-baseline-phone-enabled' : 'ic-baseline-local-phone'" />
        <a href="tel: +201090844348" target="_blank" class="text-white text-lg hover:text-fpOrange">201090844348</a>
        <Icon class="text-fpOrange text-3xl ms-5 mt-1" name="ic-baseline-chat-bubble" />
        <a href="mailto:info@fingerprintm.com" target="_blank" class="text-white text-lg hover:text-fpOrange">info@fingerprintm.com</a>
      </div>
      <div class="lg:w-1/3">
        <ul class="flex items-center gap-x-3 justify-center">
          <li>
            <a href="https://www.facebook.com/fingerprintmedia1?mibextid=ZbWKwL" target="_blank"
              ><Icon class="text-white hover:text-[#1877f2] transition hover:scale-110 text-4xl" name="uil-facebook"
            /></a>
          </li>
          <li>
            <a href="#" target="_blank"><Icon class="text-white hover:text-[#1da1f2] transition hover:scale-110 text-4xl" name="mdi-twitter-box" /></a>
          </li>
          <li>
            <a href="https://instagram.com/fingerprint_media_1?igshid=ZDdkNTZiNTM=" target="_blank"
              ><Icon class="text-white hover:text-[#c13584] transition hover:scale-110 text-4xl" name="ri-instagram-fill"
            /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/finger-print-2528361b1" target="_blank"
              ><Icon class="text-white hover:text-[#0a66c2] transition hover:scale-110 text-4xl" name="mdi-linkedin"
            /></a>
          </li>
          <li>
            <a href="https://www.snapchat.com/add/fingerprintm" target="_blank"
              ><Icon class="text-white hover:text-[#fffc00] transition hover:scale-110 text-4xl" name="uil-snapchat-square"
            /></a>
          </li>
          <li>
            <a href="http://wa.me/201090844348" target="_blank"><Icon class="text-white hover:text-[#4aae20] transition hover:scale-110 text-4xl" name="ri-whatsapp-fill" /></a>
          </li>
        </ul>
      </div>
      <div class="w-1/3 hidden lg:flex items-center">
        <nuxt-link
          :to="localePath('/login')"
          class="text-white bg-fpOrange hover:bg-fpOrangeDark transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg px-2 py-1.5 ms-auto block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
        >
          <Icon name="mdi-lock-open" class="text-white text-2xl -mt-1 me-1" />
          {{ $t("login") }}
        </nuxt-link>
        <nuxt-link
          :to="localePath('/register')"
          class="text-white bg-fpOrange hover:bg-fpOrangeDark transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg px-2 py-1.5 ms-auto block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
        >
          <Icon name="mdi-account-plus" class="text-white text-2xl -mt-1 me-1" />
          {{ $t("create_new_account") }}
        </nuxt-link>
        <nuxt-link
          :to="localePath('/contact')"
          class="text-white bg-fpOrange hover:bg-fpOrangeDark transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg px-2 py-1.5 ms-auto block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
        >
          {{ $t("order") }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const {locale, setLocale} = useI18n();
</script>

<style></style>
