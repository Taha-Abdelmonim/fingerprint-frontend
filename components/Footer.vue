<template>
  <section class="relative bg-fpOrange dark:bg-gray-800">
    <section class="lg:absolute -top-16 right-1/2 lg:translate-x-1/2 lg:w-1/2 z-50">
      <div class="container mx-auto flex justify-center items-center">
        <div class="bg-fpOrange dark:bg-gray-900 lg:rounded-3xl flex justify-between items-center py-4 lg:px-28 lg:py-6">
          <p class="text-fpBlueDark lg:text-4xl font-bold me-10 whitespace-nowrap">{{ $t("consultation") }}</p>
          <nuxt-link
            :to="localePath('/contact')"
            class="text-white text-sm lg:text-lg whitespace-nowrap bg-fpBlueDark hover:bg-fpBlue transition-colors focus:ring-4 focus:ring-fpBlue font-bold rounded-lg px-4 lg:px-8 py-3 lg:py-4 ms-auto block focus:outline-none"
          >
            {{ $t("contact_now") }}
          </nuxt-link>
        </div>
      </div>
    </section>
    <footer class="bg-header py-10 relative">
      <img src="~/assets/images/global/logo_footer.png" alt="" class="absolute end-0 top-5 w-3/12 hidden lg:block" />
      <div class="container mx-auto flex flex-col lg:flex-row items-center gap-x-10">
        <div class="lg:w-1/4">
          <div class="flex items-center gap-x-2">
            <div class="border-e-4 pe-2">
              <p class="text-white text-3xl font-bold">fingerprint</p>
              <p class="text-white text-xs mt-4 whitespace-nowrap">Digital Marketing & Website design</p>
            </div>
            <div class="">
              <img src="~/assets/images/global/logo-transparent.png" alt="" class="" />
            </div>
          </div>
          <p class="text-white text-justify">{{ $t("description_site_2") }}</p>
        </div>
        <div class="lg:w-1/4 pt-7 text-center lg:text-start">
          <h2 class="text-fpOrange text-4xl font-bold">{{ $t("our_services") }}</h2>
          <ul class="mt-4 space-y-2">
            <li>
              <span class="cursor-default text-white text-md hover:text-fpOrange transition">{{ $t("service_social") }}</span>
            </li>
            <li>
              <span class="cursor-default text-white text-md hover:text-fpOrange transition">{{ $t("service_web") }}</span>
            </li>
            <li>
              <span class="cursor-default text-white text-md hover:text-fpOrange transition">{{ $t("service_video") }}</span>
            </li>
            <li>
              <span class="cursor-default text-white text-md hover:text-fpOrange transition">{{ $t("service_motion") }}</span>
            </li>
            <li>
              <span class="cursor-default text-white text-md hover:text-fpOrange transition">{{ $t("service_design_photos") }}</span>
            </li>
            <li>
              <span class="cursor-default text-white text-md hover:text-fpOrange transition">{{ $t("service_seo") }}</span>
            </li>
            <li>
              <span class="cursor-default text-white text-md hover:text-fpOrange transition">{{ $t("service_ads") }}</span>
            </li>
            <li>
              <span class="cursor-default text-white text-md hover:text-fpOrange transition">{{ $t("our_services") }}</span>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/4 pt-7 text-center lg:text-start">
          <h2 class="text-fpOrange text-4xl font-bold">{{ $t("important_links") }}</h2>
          <ul class="mt-4 space-y-2">
            <li>
              <nuxt-link :to="{path: '/', hash: '#clintes'}" class="text-white text-md hover:text-fpOrange transition">{{ $t("clintes") }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{path: '/', hash: '#services'}" class="text-white text-md hover:text-fpOrange transition">{{ $t("services") }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/blogs')" class="text-white text-md hover:text-fpOrange transition">{{ $t("blog") }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/about')" class="text-white text-md hover:text-fpOrange transition">{{ $t("about") }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/contact')" class="text-white text-md hover:text-fpOrange transition">{{ $t("order") }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/privacyPolicy')" class="text-white text-md hover:text-fpOrange transition">{{ $t("privacy_policy") }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/CommonQuestions')" class="text-white text-md hover:text-fpOrange transition">{{ $t("Frequently_asked_questions") }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/4 pt-7 text-center lg:text-start relative">
          <h2 class="text-fpOrange text-4xl font-bold">{{ $t("contact") }}</h2>
          <a href="mailto:info@fingerprintm.com" target="_blank" class="text-white text-md hover:text-fpOrange transition mt-4 block"
            ><Icon class="text-xl text-inherit" name="ic-sharp-email" />info@fingerprintm.com</a
          >
          <a href="tel: +201090844348" target="_blank" class="text-white text-md hover:text-fpOrange transition mt-2 block"
            ><Icon class="text-xl text-inherit" name="ic-baseline-phone-enabled" />201090844348</a
          >
          <a href="http://wa.me/201090844348" target="_blank" class="text-white text-md hover:text-fpOrange transition mt-2 block sm:hidden"
            ><Icon class="text-xl text-inherit" name="ic-outline-admin-panel-settings" /> {{ $t("contact_manege") }}</a
          >
          <a href="http://wa.me/201090844348" target="_blank" class="text-white text-md hover:text-fpOrange transition mt-2 block lg:hidden"
            ><Icon class="text-xl text-inherit" name="ic-outline-admin-panel-settings" /> {{ $t("contact_manege") }}</a
          >
          <h3 class="text-fpOrange text-2xl font-bold mt-12">{{ $t("social_contact") }}</h3>
          <ul class="flex items-center gap-x-3 mt-4">
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
      </div>
    </footer>
    <div class="bg-[#704ABA] py-2">
      <p class="text-center text-white text-xl">{{ $t("text_footer") }}</p>
    </div>
  </section>
</template>

<script setup></script>
