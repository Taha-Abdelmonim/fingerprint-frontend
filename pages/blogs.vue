<template>
  <section class="lg:pb-[100px] sm:mb-20 relative">
    <BreadCrumbs :classes="' bg-breadcrumb put h-[450px] overlay text-white text-5xl lg:text-3xl'" :contents="[$t('blog')]" />
    <!--  | &ThinSpace; <Icon name="mingcute-share-2-line" class="text-3xl" /> مشاركة -->
    <div class="container mx-auto flex gap-x-20 sm:flex-col-reverse sm:items-center mt-20">
      <div class="sm:mt-40 lg:w-3/4 space-y-40 lg:space-y-20">
        <!-- start -->
        <div v-for="post in posts.data" :key="post.id">
          <div class="w-full mb-8 relative">
            <NuxtLink :to="localePath(`/blog/${post.slug}`)">
              <img :src="`${baseURL}/images/${post.photo}`" alt="user photo" class="w-full lg:h-[400px]" />
            </NuxtLink>
            <span
              class="absolute sm:top-[-3rem] lg:top-[-2rem] start-14 lg:start-0 rtl:translate-x-[50%] ltr:-translate-x-[50%] bg-fpOrange w-28 h-20 grid place-items-center text-white text-lg lg:rounded-md sm:w-28 sm:h-12 sm:right-12"
              v-text="getDate(post.created_at)"
            >
            </span>
          </div>

          <div class="text-gray-400 text-lg lg:text-xl mb-8">
            <img v-if="post.user.photo" :src="`${baseURL}/images/${post.user.photo}`" alt="user photo" class="object-cover w-10 h-10 lg:w-14 lg:h-14 rounded-full inline" />
            <img v-else src="~/assets/images/global/avatar.jpg" alt="user photo" class="object-cover w-10 h-10 lg:w-14 lg:h-14 rounded-full inline" />
            {{ post.user.name }} &ThinSpace; | &ThinSpace; <Icon name="uil-comment-dots" class="text-3xl" />
            <span>{{ $t("comments") }} ({{ post.comment.length }})</span> &ThinSpace;
          </div>
          <NuxtLink
            :to="localePath(`/blog/${post.slug}`)"
            class="font-bold text-fpOrange hover:text-fpRed text-2xl lg:text-4xl sm:my-4 lg:mb-6 block hover:dark:text-white transition"
            v-text="currentLocale == 'ar' ? post.name_ar : post.name_en"
          >
          </NuxtLink>
          <p class="text-gray-600 dark:text-gray-300 w-5/6" v-text="currentLocale == 'ar' ? post.description_ar : post.description_en"></p>
          <NuxtLink
            :to="localePath(`/blog/${post.slug}`)"
            class="arro-hover leading-none relative bg-fpOrange hover:bg-fpOrangeDark transition py-1 px-4 text-base font-normal text-white rounded-md whitespace-nowrap flex items-center mt-10 w-fit"
          >
            <Icon v-if="currentLocale == 'en'" name="ic-outline-arrow-back" class="text-lg lg:text-3xl arrow-animate" />
            <span class="ml-2 text-lg lg:text-3xl">{{ $t("read_more") }}</span>
            <Icon v-if="currentLocale == 'ar'" name="ic-outline-arrow-back" class="text-lg lg:text-3xl arrow-animate" />
          </NuxtLink>
        </div>
      </div>
      <div class="lg:w-1/4 lg:ml-auto">
        <div class="relative">
          <div class="relative h-fit">
            <input
              @input="e => searchPosts(e.target.value)"
              id="posts-search"
              type="text"
              :placeholder="$t('search')"
              class="focus:outline-none bg-gray-200 dark:bg-gray-800 dark:text-fpLightBack focus:bg-gray-100 rounded-e-xl p-6 py-2 font-light text-xl w-full"
            />
            <Icon name="ic-baseline-search" class="absolute bg-fpOrange w-10 h-full end-0 top-0 grid place-items-center text-4xl text-white rounded-e-lg" />
          </div>
          <div
            v-if="resultSearch.length > 0"
            id="dropdown"
            class="z-10 bg-white divide-y divide-gray-100 rounded w-full dark:bg-gray-700 absolute top-10 inset-x-0 shadow-lg max-h-[200px] overflow-y-auto"
          >
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200 divide-y-2" aria-labelledby="dropdown-button">
              <li v-for="post in resultSearch">
                <NuxtLink
                  :to="localePath(`/blog/${post.slug}`)"
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  v-text="currentLocale == 'ar' ? post.name_ar : post.name_en"
                ></NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-10">
          <h2
            class="text-fpOrange font-medium text-3xl lg:text-4xl pb-6 relative after:content-[''] after:absolute after:w-1/2 after:h-2 after:bg-fpOrange after:start-0 after:bottom-0 after:translate-y-[50%]"
          >
            {{ $t("sections") }}
          </h2>
          <hr />
        </div>
        <div class="mt-8 space-y-2">
          <div class="flex justify-between font-medium text-gray-600 text-lg" v-for="section in sectionsStore.sections" :key="section.id">
            <label :for="`checkbox_${section.id}`" v-text="currentLocale == 'ar' ? section.name_ar : section.name_en" class="select-none"></label>
            <input @change="filterPosts(section.id, $event)" class="fileter_checkbox w-6 h-6" type="checkbox" :id="`checkbox_${section.id}`" name="checkbox" :value="section.id" />
          </div>
        </div>
        <div class="mt-20 lg:mt-10">
          <h2
            class="text-fpOrange font-medium text-3xl lg:text-4xl pb-6 relative after:content-[''] after:absolute after:w-1/2 after:h-2 after:bg-fpOrange after:start-0 after:bottom-0 after:translate-y-[50%]"
          >
            {{ $t("more_see") }}
          </h2>
          <hr />
        </div>
        <div class="pt-4 bg-gray-100 divide-y-2 overflow-y-scroll sm:max-h-[500px] lg:max-h-[700px] w-full no-scroll sm:shadow-md lg:shadow-lg">
          <!-- mostWatchedPosts -->
          <div class="flex items-center w-full p-2 py-4 hover:bg-gray-200 transition" v-for="post in mostWatchedPosts" :key="post.id">
            <NuxtLink :to="localePath(`/blog/${post.slug}`)" class="block me-4 w-[40%] h-full">
              <img :src="`${baseURL}/images/${post.photo}`" alt="post photo" class="me-6 object-cover" />
            </NuxtLink>
            <div class="w-[60%]">
              <NuxtLink
                :to="localePath(`/blog/${post.slug}`)"
                class="text-fpOrange text-xl lg:text-xl font-bold block mb-1"
                v-text="currentLocale == 'ar' ? post.name_ar : post.name_en"
              ></NuxtLink>
              <Icon name="ic-outline-edit-calendar" class="text-gray-400 text-xl" /> <span class="text-fpOrange me-4" v-text="getDate(post.created_at)"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-32">
      <div class="container ml-24 flex flex-col lg:flex-row sm:gap-y-8 justify-between items-center">
        <div class="flex items-center gap-x-6">
          <button
            :disabled="posts.prev_page_url == null"
            type="button"
            class="bg-gray-200 hover:bg-gray-300 cursor-pointer transition rounded-lg px-4 py-3"
            :class="[posts.prev_page_url == null ? 'disabled' : '']"
            @click="getPostsPage(posts.prev_page_url)"
          >
            <Icon name="ic-round-arrow-forward-ios" class="text-4xl" :class="currentLocale == 'en' ? 'rotate-180' : ''" />
          </button>
          <button
            v-for="i in posts.last_page"
            @click="getPostsPage(`http://127.0.0.1:8000/api/getPosts?page=${i}`)"
            :class="`cursor-pointer transition rounded-lg px-4 py-3 text-2xl ${
              posts.current_page == i ? 'bg-fpOrange text-white hover:text-white hover:bg-fpRed' : 'bg-gray-200 hover:bg-gray-300'
            }`"
          >
            <span>{{ i }}</span>
          </button>
          <button
            @click="getPostsPage(posts.next_page_url)"
            :disabled="posts.next_page_url == null"
            type="button"
            class="bg-gray-200 hover:bg-gray-300 cursor-pointer transition rounded-lg px-2 py-3"
            :class="[posts.next_page_url == null ? 'disabled' : '']"
          >
            <Icon name="ic-baseline-arrow-back-ios" class="text-4xl me-3" :class="currentLocale == 'en' ? 'rotate-180' : ''" />
          </button>
        </div>
        <div class="flex items-center gap-x-6">
          <p class="bg-gray-200 px-8 py-4 rounded-xl text-4xl text-gray-500">{{ posts.current_page }}/{{ posts.last_page }}</p>
          <b class="text-3xl px-8 py-4 rounded-xl bg-gray-300 text-gray-500">{{ posts.total }}</b>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import {useSectionStore} from "@/store/SectionStore";
const sectionsStore = useSectionStore();
const baseURL = useRuntimeConfig().public.baseURL;
const {currentLocale, dir} = useLang();
const {t} = useI18n();
useHead({
  title: t("blog"),
  meta: [{name: "title", content: t("blog")}],
});
let posts = ref([]);
let resultSearch = ref([]);
const getPosts = async () => {
  try {
    await $fetch(`${useRuntimeConfig().public.apiURL}/getPosts`).then(res => {
      posts.value = res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
getPosts();
const getPostsPage = async page => {
  try {
    await $fetch(page).then(res => {
      posts.value = res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
sectionsStore.getSections();
const searchPosts = async value => {
  if (value == "") {
    return (resultSearch.value = []);
  }
  try {
    await $fetch(`${useRuntimeConfig().public.apiURL}/searchPosts`, {
      method: "POST",
      body: {locale: currentLocale.value, search: value},
    }).then(res => {
      resultSearch.value = res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
function getDate(date) {
  var $created_at = new Date(date);
  let year = $created_at.getFullYear();
  let month = $created_at.getMonth() < 10 ? `0${$created_at.getMonth()}` : $created_at.getMonth();
  let dey = $created_at.getDay() < 10 ? `0${$created_at.getDay()}` : $created_at.getDay();

  return `${dey}-${month}-${year}`;
}
let sections_id = ref([]);
async function filterPosts(id, event) {
  try {
    let all = "";
    if (id == 1) {
      all = true;
    }
    if (event.target.checked) {
      sections_id.value.push(id);
    } else {
      sections_id.value = sections_id.value.filter(ele => ele != id);
    }
    await $fetch(`${useRuntimeConfig().public.apiURL}/filterPosts?sections_id=[${sections_id.value}]&all=${all}`, {
      method: "GET",
      // body: {locale: currentLocale.value, sections_id: sections_id.value, all},
    }).then(res => {
      posts.value = res.data;
    });
  } catch (error) {
    console.log(error);
  }
}
let mostWatchedPosts = ref([]);
async function mostWatched() {
  try {
    await $fetch(`${useRuntimeConfig().public.apiURL}/mostWatched`, {
      method: "POST",
    }).then(res => {
      mostWatchedPosts.value = res.data;
    });
  } catch (error) {
    console.log(error);
  }
}
mostWatched();
</script>
