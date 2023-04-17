<template>
  <ClientOnly>
    <div>
      <Splide :options="options" class="container mx-auto blog-slider">
        <SplideSlide class="pb-20 rounded-2xl overflow-hidden" v-for="post in posts" :key="post.id">
          <div class="shadow-xl pb-8 my-10 rounded-lg md:mx-4 sm:mx-1 bg-white dark:bg-gray-800 flex flex-col h-full">
            <nuxt-link :to="localePath(`/blog/${post.slug}`)">
              <img :src="`${baseURL}/images/${post.photo}`" alt="" class="w-full h-[250px] object-cover rounded-t-2xl" />
            </nuxt-link>
            <div class="px-6 h-full">
              <div class="">
                <nuxt-link
                  :to="localePath(`/blog/${post.slug}`)"
                  class="text-xl dark:text-fpLightBack hover:text-fpRed font-bold mt-6 block"
                  v-text="currentLocale == 'ar' ? post.name_ar : post.name_en"
                ></nuxt-link>
                <span class="block text-gray-600 dark:text-gray-300 mt-2 mb-4">{{ String(currentLocale == "ar" ? post.description_ar : post.description_en).slice(0, 86) }}</span>
              </div>
            </div>
            <div class="flex justify-between items-center px-6">
              <div class="flex items-center">
                <img v-if="post.user.photo" :src="`${baseURL}/images/${post.user.photo}`" class="w-10 h-10 rounded-full" alt="" />
                <img v-else src="~/assets/images/global/avatar.jpg" class="w-10 h-10 rounded-full" alt="" />
                <p class="font-medium text-xl text-main_color_2 mr-2 dark:text-fpOrange">{{ $t("my_name") }}</p>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <span class="font-bold text-xl dark:text-gray-300" v-text="post.views"></span>
                  <Icon name="ph:user-circle" class="text-4xl dark:text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </ClientOnly>
</template>
<script setup>
const {currentLocale, dir} = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
let posts = ref([]);
const getPostsSlider = async () => {
  try {
    await $fetch(`${useRuntimeConfig().public.apiURL}/getPostsSlider`, {
      method: "POST",
    }).then(res => {
      posts.value = res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
getPostsSlider();

const options = {
  rewind: true,
  direction: dir.value,
  // type: "loop",
  arrows: true,
  autoplay: true,
  interval: 3000,
  pagination: false,
  perPage: 3,
  gap: "2rem",
  breakpoints: {
    768: {
      perPage: 2,
      gap: "1rem",
    },
    640: {
      perPage: 1,
      gap: ".7rem",
    },
  },
};
</script>
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
