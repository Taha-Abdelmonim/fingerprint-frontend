<template>
  <section>
    <footer class="bg-header py-10 relative">
      <img src="~/assets/images/global/logo_footer.png" alt="" class="absolute end-0 top-5 w-3/12" />
      <div class="container mx-auto flex gap-x-10">
        <div class="w-1/4">
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
        <div class="w-1/4 pt-7">
          <h2 class="text-fpOrange text-4xl font-bold">{{ $t("our_services") }}</h2>
          <ul class="mt-4 space-y-2">
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("service_social") }}</a>
            </li>
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("service_web") }}</a>
            </li>
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("service_video") }}</a>
            </li>
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("service_video_motion") }}</a>
            </li>
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("service_design_photos") }}</a>
            </li>
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("service_seo") }}</a>
            </li>
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("service_ads") }}</a>
            </li>
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("our_services") }}</a>
            </li>
          </ul>
        </div>
        <div class="w-1/4 pt-7">
          <h2 class="text-fpOrange text-4xl font-bold">{{ $t("important_links") }}</h2>
          <ul class="mt-4 space-y-2">
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("clintes") }}</a>
            </li>
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("services") }}</a>
            </li>
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("blog") }}</a>
            </li>
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("about") }}</a>
            </li>
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("order") }}</a>
            </li>
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("privacy_policy") }}</a>
            </li>
            <li>
              <a href="#" class="text-white text-md hover:text-fpOrange transition">{{ $t("Frequently_asked_questions") }}</a>
            </li>
          </ul>
        </div>
        <div class="w-1/4 pt-7">
          <h2 class="text-fpOrange text-4xl font-bold">{{ $t("contact") }}</h2>
          <a href="#" class="text-white text-md hover:text-fpOrange transition mt-4 block"><Icon class="text-xl text-inherit" name="ic-sharp-email" /> info@fingerprintm.com</a>
          <a href="#" class="text-white text-md hover:text-fpOrange transition mt-2 block"><Icon class="text-xl text-inherit" name="ic-baseline-phone-enabled" /> 01090844348</a>
          <a href="#" class="text-white text-md hover:text-fpOrange transition mt-2 block"
            ><Icon class="text-xl text-inherit" name="ic-outline-admin-panel-settings" /> {{ $t("contact_manege") }}</a
          >
          <h3 class="text-fpOrange text-2xl font-bold mt-12">{{ $t("social_contact") }}</h3>
          <ul class="flex items-center gap-x-3 mt-4">
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
      </div>
    </footer>
    <div class="bg-[#704ABA] py-2">
      <p class="text-center text-white text-xl">{{ $t("text_footer") }}</p>
    </div>
  </section>
</template>

<script setup></script>
