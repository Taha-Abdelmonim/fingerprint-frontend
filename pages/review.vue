<template>
  <BreadCrumbs :classes="'bg-white dark:bg-gray-900 dark:text-fpLightBack'" :contents="[$t('reviews')]" />
  <section class="bg-fpBlueDark/10 pt-10 pb-40">
    <div
      class="container mx-auto sm:pb-10 lg:w-[1200px] flex flex-col-reverse lg:flex-row justify-center lg:items-center gap-x-10 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl p-0"
    >
      <div class="lg:w-1/2 lg:ps-4 lg:ms-8 sm:px-4">
        <h1 class="sm:mt-20 font-bold text-center text-3xl lg:text-5xl text-fpBlueDark dark:text-fpOrange">{{ $t("review") }}</h1>
        <!-- <p class="mt-4 text-center text-lg dark:text-gray-300">{{ $t("desc_contact") }}</p> -->
        <form class="mt-10" @submit.prevent="sendReview" method="post" action @keydown="errors.clear($event.target.name)">
          <div class="mb-6">
            <label for="section_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t("select_section") }}</label>
            <select
              name="section_id"
              id="section_id"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              @change="review.section_id = $event.target.value"
              :class="errors.has('section_id') ? 'is-invalid' : ''"
              required
            >
              <option
                v-for="section in sectionsStore.sections"
                :key="section.id"
                :selected="section.url == 'sections'"
                :value="section.id"
                v-text="currentLocale == 'ar' ? section.name_ar : section.name_en"
              ></option>
            </select>
            <p v-if="errors.has('section_id')" class="mt-2 text-sm text-red-500">{{ errors.get("section_id") }}</p>
          </div>
          <div class="mb-6">
            <label for="comment" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t("write_review_here") }}</label>
            <textarea
              id="comment"
              rows="4"
              class="bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border resize-none h-40"
              :placeholder="$t('write_review_here')"
              :class="errors.has('comment') ? 'is-invalid' : ''"
              v-model="review.comment"
              required
            ></textarea>
            <p v-if="errors.has('comment')" class="mt-2 text-sm text-red-500">{{ errors.get("comment") }}</p>
          </div>
          <button
            type="submit"
            class="text-fpBlueDark bg-fpOrange hover:bg-fpOrange/90 transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg lg:text-2xl mt-6 px-4 lg:px-10 py-2 lg:py-3 mx-auto block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
          >
            {{ $t("submit") }}
          </button>
          <div class="flex flex-col lg:flex-row justify-between my-8">
            <a href="tel: +201090844348" target="_blank" class="text-2xl text-fpBlueDark dark:text-fpRed dark:hover:text-fpOrange font-bold"
              ><Icon class="text-xl text-inherit me-2" name="ic-baseline-phone-enabled" />201090844348</a
            >
            <a href="mailto:info@fingerprintm.com" target="_blank" class="sm:mt-2 text-2xl text-fpBlueDark dark:text-fpRed dark:hover:text-fpOrange font-bold"
              ><Icon class="text-xl text-inherit me-2" name="ic-sharp-email" />info@fingerprintm.com</a
            >
          </div>
          <ul class="flex items-center gap-x-3 mt-4">
            <li>
              <a href="https://www.facebook.com/fingerprintmedia1?mibextid=ZbWKwL" target="_blank"
                ><Icon class="text-gray-800 dark:text-white dark:hover:text-[#1877f2] hover:text-[#1877f2] transition hover:scale-110 text-4xl" name="uil-facebook"
              /></a>
            </li>
            <li>
              <a href="#" target="_blank"
                ><Icon class="text-gray-800 dark:text-white dark:hover:text-[#1da1f2] hover:text-[#1da1f2] transition hover:scale-110 text-4xl" name="mdi-twitter-box"
              /></a>
            </li>
            <li>
              <a href="https://instagram.com/fingerprint_media_1?igshid=ZDdkNTZiNTM=" target="_blank"
                ><Icon class="text-gray-800 dark:text-white dark:hover:text-[#c13584] hover:text-[#c13584] transition hover:scale-110 text-4xl" name="ri-instagram-fill"
              /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/finger-print-2528361b1" target="_blank"
                ><Icon class="text-gray-800 dark:text-white dark:hover:text-[#0a66c2] hover:text-[#0a66c2] transition hover:scale-110 text-4xl" name="mdi-linkedin"
              /></a>
            </li>
            <li>
              <a href="https://www.snapchat.com/add/fingerprintm" target="_blank"
                ><Icon class="text-gray-800 dark:text-white dark:hover:text-[#fffc00] hover:text-[#fffc00] transition hover:scale-110 text-4xl" name="uil-snapchat-square"
              /></a>
            </li>
            <li>
              <a href="http://wa.me/201090844348" target="_blank"
                ><Icon class="text-gray-800 dark:text-white dark:hover:text-[#4aae20] hover:text-[#4aae20] transition hover:scale-110 text-4xl" name="ri-whatsapp-fill"
              /></a>
            </li>
          </ul>
        </form>
      </div>
      <div class="lg:w-1/2 max-h-full">
        <img src="~/assets/images/login_small.png" alt="Login background" class="object-cover ms-auto" />
      </div>
    </div>
  </section>
  <section id="reviews" class="sm:py-20 lg:pt-40">
    <div class="container mx-auto lg:pb-40">
      <h2 class="text-3xl lg:text-5xl text-fpBlueDark dark:text-fpOrange font-bold border-b-2 border-fpOrange w-fit mx-auto pb-2 lg:pb-6 mb-16">{{ $t("reviews") }}</h2>
      <HomeReviews />
    </div>
  </section>
</template>
<script setup>
import {useAuthStore} from "@/store/AuthStore";
import {useTostStore} from "@/store/TostStore";
import {useSectionStore} from "@/store/SectionStore";
const auth = useAuthStore();
const tost = useTostStore();
const sectionsStore = useSectionStore();
const apiUrl = useRuntimeConfig().public.apiURL;
const errors = reactive(useErrors());
const {currentLocale, dir} = useLang();
const {t} = useI18n();
useHead({
  title: t("reviews"),
  meta: [{name: "title", content: t("reviews")}],
});

sectionsStore.getSections();
let review = reactive({
  comment: "",
  section_id: "1",
});
const sendReview = async () => {
  try {
    await useAsyncData("sendReview", () =>
      $fetch(`${apiUrl}/sendReview`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
        body: {locale: currentLocale.value, ...review},
      }).then(res => {
        if (res.status) {
          tost.add({
            type: "success",
            message: currentLocale.value == "ar" ? `تم ارسال تقييمك الي المسؤولين` : `success send your review`,
          });
          navigateTo("/");
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
