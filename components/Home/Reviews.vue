<template>
  <Splide :options="options" class="container mx-auto review-slider">
    <SplideSlide class="">
      <div class="shadow-xl py-8 rounded-lg md:mx-4 sm:mx-1 bg-gray-100 flex flex-col h-full">
        <div>
          <img src="~/assets/images/global/avatar.jpg" alt="" class="w-20 h-20 rounded-full block mx-auto object-cover" />
        </div>
        <div class="px-6 h-full">
          <h2 class="text-lg font-bold mt-6 block hover:text-main_color_hover_2 text-center">{{ $t("my_name") }}</h2>
          <span class="block text-gray-600 mt-2 mb-4">{{ $t("lorem") }} </span>
        </div>
        <div class="flex items-center justify-between mt-8 px-4">
          <p class="font-medium text-xl text-main_color_2 mr-2">اسم القسم</p>
          <p class="font-medium text-xl text-main_color_2 mr-2">اخطاء شائعة</p>
        </div>
      </div>
    </SplideSlide>
  </Splide>
</template>
<style>
.review-slider .splide__arrow--next svg,
.review-slider .splide__arrow--prev svg {
  display: none;
}
.review-slider .splide__arrow--prev:focus {
  outline: none;
  border: none;
}
.review-slider .splide__arrow--prev {
  background-image: url("~/assets/images/global/arrow_right.png");
  background-size: cover;
  right: -1em;
}
.review-slider .splide__arrow--next {
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
  // autoplay: true,
  pagination: true,
  type: "loop",
  arrows: true,
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
</script>
