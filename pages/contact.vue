<template>
  <BreadCrumbs :classes="'bg-white dark:bg-gray-900 dark:text-fpLightBack'" :contents="[$t('contact')]" />
  <section class="bg-fpBlueDark/10 pt-10 pb-40">
    <div
      class="sm:py-10 sm:mx-3 mx-auto lg:w-[1200px] flex flex-col-reverse lg:flex-row justify-center items-center gap-x-10 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl p-0 lg:h-[70vh]"
    >
      <div class="lg:w-1/2 lg:ps-4 lg:ms-8 sm:px-4">
        <h1 class="font-bold text-center text-3xl lg:text-5xl text-fpBlueDark dark:text-fpOrange">{{ $t("title_contact") }}</h1>
        <p class="mt-4 text-center text-lg dark:text-gray-300">{{ $t("desc_contact") }}</p>
        <form @submit.prevent="sendMessage" method="post" action @keydown="errors.clear($event.target.name)">
          <div class="mb-6 mt-10">
            <label for="success" class="block mb-2 text-sm lg:text-md font-medium text-gray-700 dark:text-gray-300">{{ $t("title_message") }}</label>
            <input
              type="text"
              class="bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border"
              v-model="contact.title"
              :placeholder="$t('title')"
              :class="errors.has('title') ? 'is-invalid' : ''"
              required
            />
            <p v-if="errors.has('title')" class="mt-2 text-sm text-red-500">{{ errors.get("title") }}</p>
          </div>
          <div class="mb-6">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t("message_contact") }}</label>
            <textarea
              id="message"
              rows="4"
              class="bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border resize-none h-40"
              :placeholder="$t('write_message')"
              :class="errors.has('message') ? 'is-invalid' : ''"
              v-model="contact.message"
              required
            ></textarea>
            <p v-if="errors.has('message')" class="mt-2 text-sm text-red-500">{{ errors.get("message") }}</p>
          </div>
          <button
            type="submit"
            class="text-fpBlueDark bg-fpOrange hover:bg-fpOrange/90 transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg lg:text-2xl mt-6 px-4 lg:px-10 py-2 lg:py-3 mx-auto block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
          >
            {{ $t("submit") }}
          </button>
          <div class="flex justify-between my-8">
            <a href="tel: +201090844348" target="_blank" class="text-2xl text-fpBlueDark dark:text-fpRed dark:hover:text-fpOrange font-bold"
              ><Icon class="text-xl text-inherit me-2" name="ic-baseline-phone-enabled" />201090844348</a
            >
            <a href="mailto:info@fingerprintm.com" target="_blank" class="text-2xl text-fpBlueDark dark:text-fpRed dark:hover:text-fpOrange font-bold"
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
        <img src="~/assets/images/login_small.png" alt="Login" class="object-cover h-[70vh] ms-auto" />
      </div>
    </div>
  </section>
</template>
<script setup>
import {useAuthStore} from "@/store/AuthStore";
import {useTostStore} from "@/store/TostStore";
const auth = useAuthStore();
const tost = useTostStore();
const apiUrl = useRuntimeConfig().public.apiURL;
const errors = reactive(useErrors());
const {currentLocale, dir} = useLang();
const {t} = useI18n();
useHead({
  title: t("contact"),
  meta: [{name: "title", content: t("contact")}],
});

let contact = reactive({
  title: "",
  message: "",
});
const sendMessage = async () => {
  /* if (Object.keys(auth.user).length <= 0 && localStorage.getItem("user") == null) {
    navigateTo("/login");
    tost.add({
      type: "error",
      message: "يجب تسجيل الدخول اولا",
    });
  } */
  try {
    await useAsyncData("sendMessage", () =>
      $fetch(`${apiUrl}/sendMessage`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
        body: {locale: currentLocale.value, ...contact},
      }).then(res => {
        if (res.status) {
          tost.add({
            type: "success",
            message: currentLocale.value == "ar" ? `تم ارسال رسالتك الي المسؤولين` : `success send your message`,
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
            navigateTo("/login");
            tost.add({
              type: "error",
              message: res.message,
            });
          }
        }
      })
    );
  } catch (error) {
    console.log(error);
  }
};
</script>
