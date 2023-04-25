<template>
  <ClientOnly>
    <div>
      <Splide :options="options" class="container mx-auto review-slider sm:px-0">
        <SplideSlide class="" v-for="review in reviews" :key="review.id">
          <div class="shadow-xl py-8 rounded-lg md:mx-4 sm:mx-1 bg-gray-100 dark:bg-gray-800 flex flex-col h-full">
            <div>
              <img
                v-if="review.user.photo"
                :src="review.user.oauth_type == null ? `${baseURL}/images/${review.user.photo}` : `${review.user.photo}`"
                alt="user photo"
                class="w-20 h-20 rounded-full block mx-auto object-cover"
              />
              <img v-else src="~/assets/images/global/avatar.jpg" alt="user photo" class="w-20 h-20 rounded-full block mx-auto object-cover" />
            </div>
            <div class="px-6 h-full">
              <h2 class="text-lg font-bold mt-6 block hover:text-main_color_hover_2 text-center dark:text-fpOrange" v-text="review.user.name"></h2>
              <span class="block text-gray-600 dark:text-gray-300 mt-2 mb-4" v-text="review.comment"></span>
            </div>
            <div class="flex items-center justify-between mt-8 px-4 dark:text-fpLightBack">
              <p class="font-medium text-md lg:text-xl text-main_color_2 mr-2" v-text="$t('name_section')"></p>
              <!-- :to="localePath(`/${review.section.url}`)" -->
              <p class="font-medium text-md lg:text-xl hover:text-fpRed mr-2" v-text="currentLocale == 'ar' ? review.section.name_ar : review.section.name_en"></p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
      <nuxt-link
        :to="localePath('/review')"
        class="text-white bg-fpOrange hover:bg-fpOrangeDark transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg px-4 py-2.5 block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange w-fit mx-auto mt-10"
      >
        <Icon name="ic-outline-mode-edit-outline" class="text-3xl -mt-2" />
        {{ $t("write_review") }}
      </nuxt-link>
    </div>
  </ClientOnly>
</template>
<script setup>
const {currentLocale, dir} = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
let reviews = ref([]);
const getReviewsSlider = async () => {
  try {
    await $fetch(`${useRuntimeConfig().public.apiURL}/getReviewsSlider`, {
      method: "POST",
    }).then(res => {
      reviews.value = res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
getReviewsSlider();

const options = {
  direction: dir.value,
  type: "loop",
  arrows: true,
  autoplay: true,
  interval: 3000,
  pagination: false,
  perPage: 3,
  gap: "2rem",
  breakpoints: {
    768: {
      perPage: 2,
      arrows: false,
    },
    640: {
      perPage: 1,
      arrows: false,
    },
  },
};
</script>
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
  /* right: -1em; */
}
.review-slider .splide__arrow--next {
  background-image: url("~/assets/images/global/arrow_left.png");
  background-size: cover;
  /* left: -1em; */
}
</style>
