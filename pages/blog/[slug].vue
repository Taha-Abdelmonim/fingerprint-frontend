<template>
  <article class="blog">
    <BreadCrumbs
      :classes="'bg-breadcrumb put h-[200px] lg:h-[450px] overlay text-white text-3xl blog-slug'"
      :contents="[$t('blog'), currentLocale == 'ar' ? post.name_ar : post.name_en]"
    />
    <section class="section-2 lg:py-[100px] relative" v-if="Object.keys(post).length">
      <div class="container mx-auto">
        <div class="w-full sm:mt-20">
          <div class="">
            <div class="w-full mb-8 relative">
              <img :src="`${baseURL}/images/${post.photo}`" alt="post image" class="w-full h-[200px] lg:h-[400px]" />
              <span
                class="absolute sm:top-[-3rem] lg:top-[-2rem] start-14 lg:start-0 rtl:translate-x-[50%] ltr:-translate-x-[50%] bg-fpOrange w-28 h-20 grid place-items-center text-white text-lg lg:rounded-md sm:w-28 sm:h-12 sm:right-12"
                v-text="getDate(post.created_at)"
              >
              </span>
            </div>
            <div class="text-gray-400 text-lg lg:text-xl mb-8">
              <img
                v-if="post.user.photo"
                :src="`${baseURL}/images/${post.user.photo}`"
                alt="user photo"
                class="sm:mb-4 object-cover w-10 h-10 lg:w-14 lg:h-14 rounded-full inline"
              />
              <img v-else src="~/assets/images/global/avatar.jpg" alt="user photo" class="sm:mb-4 object-cover w-10 h-10 lg:w-14 lg:h-14 rounded-full inline" />
              {{ post.user.name }} &ThinSpace; | &ThinSpace; <Icon name="uil-comment-dots" class="text-3xl" />
              <span>{{ $t("comments") }} ({{ post.comment.length }})</span> &ThinSpace;
            </div>
            <h1 class="font-bold text-fpOrange text-xl lg:text-4xl sm:my-4 lg:mb-6" v-text="currentLocale == 'ar' ? post.name_ar : post.name_en"></h1>
            <div class="dark:text-gray-300">
              <p class="text-gray-600 font-medium text-md lg:text-xl" v-html="currentLocale == 'ar' ? post.body_ar : post.body_en"></p>
            </div>
          </div>
          <div class="mt-20">
            <NuxtLink :to="localePath(`/${post.section.url}`)" class="mb-6 text-3xl dark:text-fpLightBack block">
              <span class="text-xl lg:text-3xl font-bold">{{ $t("section") }}</span
              >: <span class="text-xl lg:text-3xl font-medium text-fpOrange" v-text="currentLocale == 'ar' ? post.section.name_ar : post.name_en"></span>
            </NuxtLink>
            <hr />
          </div>
          <div class="space-y-20">
            <h6 class="mt-8 lg:mt-16 mb-10 text-2xl text-gray-700 dark:text-gray-300">{{ $t("comments") }} ({{ post.comment.length }})</h6>
            <div class="flex lg:items-center sm:flex-col sm:justify-center" v-for="comment in post.comment" :key="comment.id">
              <div class="lg:h-40 rounded-full sm:flex sm:h-fit items-center">
                <!-- {{ comment }} -->
                <img
                  v-if="comment.user.photo"
                  :src="comment.user.oauth_type == null ? `${baseURL}/images/${comment.user.photo}` : `${comment.user.photo}`"
                  alt="user photo"
                  class="sm:mb-4 object-cover w-10 lg:w-20 h-10 lg:h-20 rounded-full inline lg:mx-auto"
                />
                <img
                  v-else
                  src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png"
                  alt="user photo"
                  class="sm:mb-4 object-cover w-10 lg:w-20 h-10 lg:h-20 rounded-full inline lg:mx-auto"
                />

                <span class="sm:mr-6 text-gray-600 lg:block dark:text-gray-300" v-text="comment.user.name"></span>
                <span class="text-gray-400" v-text="getDate(comment.created_at)"></span>
              </div>
              <div class="lg:ms-8 sm:text-center">
                <p class="text-gray-600 dark:text-gray-300 text-xl font-medium" v-text="comment.comment"></p>
                <a href="#replay" class="text-fpOrange mt-2 text-xl font-normal flex items-center sm:justify-center">
                  {{ $t("reply") }}
                  <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
                    <path
                      d="M3.75 13H16.25C21.7728 13 26.25 17.1787 26.25 22.3333V24.6667M3.75 13L11.25 20M3.75 13L11.25 6"
                      stroke="#489D33"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form class="sm:mb-16 mt-10 lg:mt-24" id="replay" @submit.prevent="commentPost" method="post" action @keydown="errors.clear($event.target.name)">
            <b class="font-medium text-3xl text-fpOrange">{{ $t("leave_response_post") }}</b>
            <div class="w-full mt-10 mb-6">
              <div class="relative">
                <label for="message" class="mt-8 text-gray-500 dark:text-gray-300 mb-10 block sm:text-sm">{{ $t("approve_admin_comment") }}</label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-gray-200 dark:bg-gray-800 dark:text-gray-300 bg-opacity-40 rounded focus:bg-[#e5e7eb99] h-52 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  :placeholder="$t('write_comment_here')"
                  :class="errors.has('comment') ? 'is-invalid' : ''"
                  v-model="comment"
                  required
                ></textarea>
                <p v-if="errors.has('comment')" class="mt-2 text-sm text-red-500">{{ errors.get("comment") }}</p>
              </div>
            </div>
            <button
              type="submit"
              class="mt-8 lg:mt-16 sm:mx-auto block text-xl lg:text-2xl font-normal hover:border-fpOrange border-2 border-white rounded-md py-2 px-4 lg:py-4 lg:px-14 hover:text-fpOrange cursor-pointer bg-fpOrange text-white transition hover:bg-transparent"
            >
              {{ $t("add_comment") }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <div class="sharethis-sticky-share-buttons"></div>
  </article>
</template>

<script setup>
import {useTostStore} from "@/store/TostStore";
import {useGlobalStore} from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const tost = useTostStore();
const route = useRoute();
const baseURL = useRuntimeConfig().public.baseURL;
const {currentLocale, dir} = useLang();
const errors = reactive(useErrors());
const {t} = useI18n();

let post = ref([]);
/* headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      }, */
const getPost = async () => {
  try {
    let read = "";
    let headers = {};
    if (route.query.read == "true") {
      read = "?read=true";
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      };
    }

    await $fetch(`${useRuntimeConfig().public.apiURL}/post/${route.params.slug}${read}`, {
      method: "POST",
      headers,
    }).then(res => {
      post.value = res.data;
      res = res.data;
      if (read != "") {
        globalStore.removeNotificationUser(post.value.id);
      }
      useHead({
        title: currentLocale.value == "ar" ? res.name_ar : res.name_en,
        script: [
          {
            type: "text/javascript",
            src: "https://platform-api.sharethis.com/js/sharethis.js#property=644546f57ac381001a304474&product=sticky-share-buttons&source=platform",
            async: "async",
          },
        ],
        meta: [
          {name: "title", content: currentLocale.value == "ar" ? res.name_ar : res.name_en},
          {name: "description", content: currentLocale.value == "ar" ? res.description_ar : res.description_en},
          // facebook
          {property: "article:publisher", content: "https://www.facebook.com/fingerprintmedia1"},
          {property: "og:locale", content: currentLocale.value},
          {property: "og:type", content: "article"},
          {property: "og:url", content: `${baseURL}/blog/${res.slug}`},
          {property: "og:title", content: currentLocale.value == "ar" ? res.name_ar : res.name_en},
          {property: "og:description", content: currentLocale.value == "ar" ? res.description_ar : res.description_en},
          {property: "og:image", content: `${baseURL}/images/${res.photo}`},
          {property: "og:site_name", content: t("fingerprint")},
          {property: "og:alt", content: currentLocale.value == "ar" ? res.name_ar : res.name_en},
          // Twitter
          {property: "twitter:card", content: "summary_large_image"},
          {property: "twitter:url", content: `${baseURL}/blog/${res.slug}`},
          {property: "twitter:title", content: currentLocale.value == "ar" ? res.name_ar : res.name_en},
          {property: "twitter:description", content: currentLocale.value == "ar" ? res.description_ar : res.description_en},
          {property: "twitter:type", content: "article"},
          {property: "twitter:image", content: `${baseURL}/images/${res.slug}`},
          {property: "twitter:site", content: t("fingerprint")},
          {property: "twitter:site_name", content: t("fingerprint")},
          {property: "twitter:alt", content: currentLocale.value == "ar" ? res.name_ar : res.name_en},
        ],
      });
    });
  } catch (error) {
    console.log(error);
  }
};

onNuxtReady(() => {
  getPost();
});
/* onBeforeResolve(to, from, next) {
  console.log(to);
   let data = fetch(`https://backend.fingerprintm.com/api/post/${to.params.slug}`, {
      method: "POST",
      
    }).then(res => {
      res.json().then((result) => {
        
        return result.data;
      });
      next(true)
    });
} */

function getDate(date) {
  var $created_at = new Date(date);
  let year = $created_at.getFullYear();
  let month = $created_at.getMonth() < 10 ? `0${$created_at.getMonth()}` : $created_at.getMonth();
  let dey = $created_at.getDay() < 10 ? `0${$created_at.getDay()}` : $created_at.getDay();

  return `${dey}-${month}-${year}`;
}

let comment = ref(null);
const commentPost = async () => {
  console.log(post.value.id);
  try {
    await useAsyncData("commentPost", () =>
      $fetch(`${useRuntimeConfig().public.apiURL}/commentPost`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
        body: {locale: currentLocale.value, comment: comment.value, post_id: post.value.id},
      }).then(res => {
        if (res.status) {
          tost.add({
            type: "success",
            message: currentLocale.value == "ar" ? `تم ارسال تعليقك الي المسؤولين` : `success comment your review`,
          });
          comment.value = "";
        } else {
          if (res.errCode == 422) {
            let ob = {};
            for (const [key, value] of Object.entries(res.message)) {
              ob[key] = value[0];
              tost.add({
                type: "error",
                message: value[0],
              });
            }
            errors.record(ob);
          } else if (res.errCode == 0) {
            tost.add({
              type: "error",
              message: res.message,
            });
            navigateTo("/login");
          }
        }
      })
    );
  } catch (error) {
    console.log(error);
  }
};
</script>

<style>
.blog-slug .bread-crumbs {
  @apply sm:text-[27px] sm:flex-col;
}
</style>
