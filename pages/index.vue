<template>
  <div>
    <!-- {{ $nuxt.$route.name }} -->
    <section class="py-20 lg:py-40 overlay relative hero-section">
      <ClientOnly>
        <div>
          <Splide :options="options_hero" aria-label="My Favorite Images test" class="absolute inset-0 visible">
            <SplideSlide>
              <img :src="globalStore.appSettings.hero_image_1" alt="image hero one" class="object-cover h-full w-full" />
            </SplideSlide>
            <SplideSlide>
              <img :src="globalStore.appSettings.hero_image_2" alt="image hero two" class="object-cover h-full w-full" />
            </SplideSlide>
            <SplideSlide>
              <img :src="globalStore.appSettings.hero_image_3" alt="image hero three" class="object-cover h-full w-full" />
            </SplideSlide>
          </Splide>
        </div>
      </ClientOnly>
      <div class="container mx-auto flex flex-col lg:flex-row justify-center items-center relative z-10 h-full">
        <div class="lg:w-1/2">
          <div class="flex flex-col justify-center">
            <h1 class="text-3xl lg:text-5xl py-2 font-bold text-white text-reflect type-writer">{{ $t("develop") }}</h1>
            <p class="text-lg lg:text-2xl text-white font-medium mt-8 leading-10">{{ $t("description_site") }}</p>
          </div>
          <div class="flex items-center gap-x-2 lg:gap-x-10 w-full my-10 lg:mt-20">
            <button
              type="button"
              class="text-white bg-fpOrange hover:bg-fpOrangeDark transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg w-3/6 text-md lg:text-lg px-2 lg:px-5 py-2 lg:py-2.5 block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
            >
              {{ $t("contact") }}
            </button>
            <button
              type="button"
              class="text-white bg-fpOrange hover:bg-fpOrangeDark transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg w-3/6 text-sm lg:text-lg px-2 lg:px-5 py-2.5 block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange whitespace-nowrap"
            >
              {{ $t("consultation") }}
            </button>
          </div>
        </div>
        <div class="lg:w-1/2">
          <img src="~/assets/images/home/hero_web.png" alt="hero web" />
        </div>
      </div>
    </section>
    <AboutFirstChoose />
    <section class="bg-fpBlueDark/10 py-8 lg:py-24" id="services">
      <div class="container mx-auto">
        <h2 class="text-4xl lg:text-5xl text-fpBlueDark dark:text-fpOrange font-bold border-b-2 border-fpOrange w-fit mx-auto pb-2 lg:pb-6">{{ $t("secvices_fingerprint") }}</h2>
        <p class="text-3xl font-medium text-fpBlueDark dark:text-fpOrange text-center mt-10">{{ $t("to_client_text") }}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <div class="p-8 rounded-2xl flex flex-col justify-center items-center text-center">
            <img src="~/assets/images/home/image_service_social.svg" alt="image service social" />
            <nuxt-link :to="localePath('/section/ads')" class="text-fpBlue dark:text-fpLightBack text-2xl mt-4 whitespace-nowrap font-bold">{{ $t("service_social") }}</nuxt-link>
            <p class="text-fpBlue dark:text-gray-300 text-md mt-2 font-medium">{{ $t("desc_service_social") }}</p>
          </div>
          <div class="p-8 rounded-2xl flex flex-col justify-center items-center text-center">
            <img src="~/assets/images/home/image_service_web.svg" alt="image service web" />
            <nuxt-link :to="localePath('/section/web')" class="text-fpBlue dark:text-fpLightBack text-2xl mt-4 font-bold">{{ $t("service_web") }}</nuxt-link>
            <p class="text-fpBlue dark:text-gray-300 text-md mt-2 font-medium">{{ $t("desc_service_web") }}</p>
          </div>
          <div class="p-8 rounded-2xl flex flex-col justify-center items-center text-center">
            <img src="~/assets/images/home/image_service_video.svg" alt="image service video" />
            <nuxt-link :to="localePath('/section/video')" class="text-fpBlue dark:text-fpLightBack text-2xl mt-4 font-bold">{{ $t("service_video") }}</nuxt-link>
            <p class="text-fpBlue dark:text-gray-300 text-md mt-2 font-medium">{{ $t("desc_service_video") }}</p>
          </div>
          <div class="p-8 rounded-2xl flex flex-col justify-center items-center text-center lg:-mt-8">
            <img src="~/assets/images/home/image_service_ads.svg" alt="image service ads" />
            <nuxt-link :to="localePath('/section/ads')" class="text-fpBlue dark:text-fpLightBack text-2xl mt-4 font-bold">{{ $t("service_ads") }}</nuxt-link>
            <p class="text-fpBlue dark:text-gray-300 text-md mt-2 font-medium">{{ $t("desc_service_ads") }}</p>
          </div>
          <div class="p-8 rounded-2xl flex flex-col justify-center items-center text-center">
            <img src="~/assets/images/home/image_service_video_motion.svg" alt="image service motion" />
            <nuxt-link :to="localePath('/section/motion')" class="text-fpBlue dark:text-fpLightBack text-2xl mt-4 font-bold whitespace-nowrap">{{
              $t("service_motion")
            }}</nuxt-link>
            <p class="text-fpBlue dark:text-gray-300 text-md mt-2 font-medium">{{ $t("desc_service_video_motion") }}</p>
          </div>
          <div class="p-8 rounded-2xl flex flex-col justify-center items-center text-center">
            <img src="~/assets/images/home/image_service_design_photos.svg" alt="image service photos" />
            <nuxt-link :to="localePath('/section/social')" class="text-fpBlue dark:text-fpLightBack text-2xl mt-4 font-bold">{{ $t("service_design_photos") }}</nuxt-link>
            <p class="text-fpBlue dark:text-gray-300 text-md mt-2 font-medium">{{ $t("desc_service_design_photos") }}</p>
          </div>
          <div class="p-8 rounded-2xl flex flex-col justify-center items-center text-center">
            <img src="~/assets/images/home/image_service_seo.svg" alt="image service seo" />
            <nuxt-link :to="localePath('/section/seo')" class="text-fpBlue dark:text-fpLightBack text-2xl mt-4 font-bold">{{ $t("service_seo") }}</nuxt-link>
            <p class="text-fpBlue dark:text-gray-300 text-md mt-2 font-medium">{{ $t("desc_service_seo") }}</p>
          </div>
          <div class="p-8 rounded-2xl flex flex-col justify-center items-center text-center">
            <img src="~/assets/images/home/image_puctur_product.svg" alt="image service product" />
            <nuxt-link :to="localePath('/section/video')" class="text-fpBlue dark:text-fpLightBack text-2xl mt-4 font-bold">{{ $t("puctur_product") }}</nuxt-link>
            <p class="text-fpBlue dark:text-gray-300 text-md mt-2 font-medium">{{ $t("desc_puctur_product") }}</p>
          </div>
          <div class="p-8 rounded-2xl flex flex-col justify-center items-center text-center">
            <img src="~/assets/images/home/image_clients_manege.svg" alt="image service social manege" />
            <b class="text-fpBlue dark:text-fpLightBack text-2xl mt-4 font-bold">{{ $t("clients_manege") }}</b>
            <p class="text-fpBlue dark:text-gray-300 text-md mt-2 font-medium">{{ $t("desc_clients_manege") }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-fpBlue dark:bg-gray-800 sm:pb-16 py-10" id="main-count-items">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div class="text-center">
            <b class="text-5xl text-white"><span data-number="49" class="count-number">0</span><span class="text-fpOrange text-6xl">+</span></b>
            <p class="text-white ltr:text-4xl rtl:text-5xl sm:mt-2 lg:my-8 font-medium">{{ $t("site_count") }}</p>
          </div>
          <div class="text-center sm:mt-16">
            <b class="text-5xl text-white"><span data-number="146" class="count-number">0</span><span class="text-fpOrange text-6xl">+</span></b>
            <p class="text-white ltr:text-4xl rtl:text-5xl sm:mt-2 lg:my-8 font-medium">{{ $t("big_ads") }}</p>
          </div>
          <div class="text-center sm:mt-16">
            <b class="text-5xl text-white"><span data-number="10" class="count-number">0</span><span class="text-fpOrange text-6xl">+</span></b>
            <p class="text-white ltr:text-4xl rtl:text-5xl sm:mt-2 lg:my-8 font-medium">{{ $t("years_experiance") }}</p>
          </div>
          <div class="text-center sm:mt-16">
            <b class="text-5xl text-white"><span data-number="34" class="count-number">0</span><span class="text-fpOrange text-6xl">+</span></b>
            <p class="text-white ltr:text-4xl rtl:text-5xl sm:mt-2 lg:my-8 font-medium">{{ $t("client") }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- <section id="clintes">
      <div class="container mx-auto pb-16 pt-20 lg:pt-36">
        <h2 class="text-3xl lg:text-5xl text-fpBlueDark dark:text-fpOrange font-bold border-b-2 border-fpOrange w-fit mx-auto pb-2 lg:pb-6 mb-4 mb-16">
          {{ $t("success_partners") }}
        </h2>
        <ClientOnly>
          <Splide :options="options_partners" aria-label="My Favorite Images" class="">
            <SplideSlide>
              <img src="~/assets/images/home/antikiano.jpg" alt="antikiano" class="mx-auto" />
            </SplideSlide>
            <SplideSlide>
              <img src="~/assets/images/home/qias.png" alt="qias" class="mx-auto" />
            </SplideSlide>
            <SplideSlide>
              <img src="~/assets/images/home/futur.png" alt="futur" class="mx-auto" />
            </SplideSlide>
            <SplideSlide>
              <img src="~/assets/images/home/sidra.png" alt="sidra" class="mx-auto" />
            </SplideSlide>
          </Splide>
        </ClientOnly>
      </div>
    </section> -->
    <section>
      <div class="container mx-auto pt-10 lg:pt-16">
        <h2 class="text-3xl lg:text-5xl text-fpBlueDark dark:text-fpOrange font-bold border-b-2 border-fpOrange w-fit mx-auto pb-2 lg:pb-6 mb-4 lg:mb-16">{{ $t("blog") }}</h2>
        <BlogSlider />
      </div>
    </section>
    <section id="reviews" class="lg:pt-40">
      <div class="container mx-auto pb-20 lg:pb-40">
        <h2 class="text-3xl lg:text-5xl text-fpBlueDark dark:text-fpOrange font-bold border-b-2 border-fpOrange w-fit mx-auto pb-2 lg:pb-6 mb-4 lg:mb-16">{{ $t("reviews") }}</h2>
        <HomeReviews />
      </div>
    </section>
  </div>
</template>
<script setup>
import {useGlobalStore} from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const baseURL = useRuntimeConfig().public.baseURL;
const {t} = useI18n();
useHead({
  title: t("home"),
  meta: [{name: "title", content: t("home")}],
});
const {currentLocale, dir} = useLang();
const options_hero = {
  rewind: true,
  direction: dir.value,
  perPage: 1,
  perMove: 1,
  autoplay: true,
  pagination: true,
  type: "loop",
  arrows: false,
  interval: 4000,
  breakpoints: {
    768: {
      arrows: false,
      perPage: 1,
    },
  },
};

const options_partners = {
  rewind: true,
  direction: dir.value,
  perPage: 4,
  perMove: 1,
  autoplay: true,
  pagination: true,
  type: "loop",
  arrows: false,
  interval: 4000,
  breakpoints: {
    768: {
      arrows: false,
      perPage: 1,
    },
    1024: {
      arrows: false,
      perPage: 2,
    },
  },
};
const incressNumber = () => {
  let nums = document.querySelectorAll(".count-number");
  let section = document.getElementById("main-count-items");
  let started = false; // Function Started ? No

  window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 700) {
      if (!started) {
        nums.forEach(num => startCount(num));
      }
      started = true;
    }
  };

  function startCount(el) {
    let number = el.dataset.number;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == number) {
        clearInterval(count);
      }
    }, 2000 / number);
  }
};
onMounted(() => {
  incressNumber();
});
</script>

<style>
[dir="rtl"] .rounded-bs-main {
  border-bottom-right-radius: 10rem;
}
[dir="ltr"] .rounded-bs-main {
  border-bottom-left-radius: 10rem;
}

.absolute {
  position: absolute !important;
}
.hero-section .splide__track.splide__track--slide {
  height: 100% !important;
}
.hero-section .splide__track {
  height: 100%;
}
</style>
