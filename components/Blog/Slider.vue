<template>
  <ClientOnly>
    <Splide :options="options" class="container mx-auto blog-slider">
      <SplideSlide class="pb-20 rounded-2xl overflow-hidden">
        <div class="shadow-xl pb-8 my-10 rounded-lg md:mx-4 sm:mx-1 bg-white dark:bg-gray-800 flex flex-col h-full">
          <a href="#">
            <img src="~/assets/images/home/hero.png" alt="" class="w-full rounded-t-2xl" />
          </a>
          <div class="px-6 h-full">
            <div class="">
              <a href="#" class="text-xl dark:text-fpLightBack font-bold mt-6 block">اخطاء متعملهاش وانتا بتبتدي مشروعك</a>
              <span class="block text-gray-600 dark:text-gray-300 mt-2 mb-4">{{ $t("lorem") }}</span>
            </div>
          </div>
          <div class="flex justify-between items-center px-6">
            <div class="flex items-center">
              <img src="~/assets/images/global/avatar.jpg" class="w-10 h-10 rounded-full" alt="" />
              <p class="font-medium text-xl text-main_color_2 mr-2 dark:text-fpOrange">{{ $t("my_name") }}</p>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <span class="font-bold text-xl -mb-2 dark:text-gray-300">199</span>
                <Icon name="ph:user-circle" class="text-4xl dark:text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </ClientOnly>
</template>

<style>
.blog-slider .splide__arrow--next svg,
.blog-slider .splide__arrow--prev svg {
  display: none;
}
.blog-slider .splide__arrow--prev:focus {
  outline: none;
  border: none;
}
.blog-slider .splide__arrow--prev {
  background-image: url("~/assets/images/global/arrow_right.png");
  background-size: cover;
  right: -1em;
}
.blog-slider .splide__arrow--next {
  background-image: url("~/assets/images/global/arrow_left.png");
  background-size: cover;
  left: -1em;
}
</style>
<script setup>
const {currentLocale, dir} = useLang();
const options = {
  rewind: true,
  direction: dir.value,
  perPage: 3,
  perMove: 1,
  autoplay: true,
  pagination: true,
  type: "loop",
  arrows: true,
  interval: 3000,
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
</script>
