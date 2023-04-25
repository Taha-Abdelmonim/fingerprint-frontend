<template>
  <section class="bg-fpBlue dark:bg-gray-700 py-3">
    <div class="container justify-center flex mx-auto">
      <div class="w-1/3 hidden lg:flex items-center gap-x-2">
        <Icon class="text-fpOrange text-3xl" :name="locale == 'ar' ? 'ic-baseline-phone-enabled' : 'ic-baseline-local-phone'" />
        <a href="tel: +201090844348" target="_blank" class="text-white text-lg hover:text-fpOrange">201090844348</a>
        <Icon class="text-fpOrange text-3xl ms-5 mt-1" name="ic-baseline-chat-bubble" />
        <a href="mailto:info@fingerprintm.com" target="_blank" class="text-white text-lg hover:text-fpOrange">info@fingerprintm.com</a>
      </div>

      <div class="lg:w-1/3" :class="auth.isLoggedIn ? 'sm:hidden' : ''">
        <ul class="flex items-center gap-x-3 justify-center">
          <li>
            <a href="https://www.facebook.com/fingerprintmedia1?mibextid=ZbWKwL" target="_blank"
              ><Icon class="text-white hover:text-[#1877f2] transition hover:scale-110 text-4xl" name="uil-facebook"
            /></a>
          </li>
          <li>
            <a href="#" target="_blank"><Icon class="text-white hover:text-[#1da1f2] transition hover:scale-110 text-4xl" name="mdi-twitter-box" /></a>
          </li>
          <li>
            <a href="https://instagram.com/fingerprint_media_1?igshid=ZDdkNTZiNTM=" target="_blank"
              ><Icon class="text-white hover:text-[#c13584] transition hover:scale-110 text-4xl" name="ri-instagram-fill"
            /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/finger-print-2528361b1" target="_blank"
              ><Icon class="text-white hover:text-[#0a66c2] transition hover:scale-110 text-4xl" name="mdi-linkedin"
            /></a>
          </li>
          <li>
            <a href="https://www.snapchat.com/add/fingerprintm" target="_blank"
              ><Icon class="text-white hover:text-[#fffc00] transition hover:scale-110 text-4xl" name="uil-snapchat-square"
            /></a>
          </li>
          <li>
            <a href="http://wa.me/201090844348" target="_blank"><Icon class="text-white hover:text-[#4aae20] transition hover:scale-110 text-4xl" name="ri-whatsapp-fill" /></a>
          </li>
        </ul>
      </div>
      <div class="w-1/3 hidden lg:flex items-center justify-end gap-x-2">
        <nuxt-link
          :to="localePath('/login')"
          class="text-white bg-fpOrange hover:bg-fpOrangeDark transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg px-2 py-1.5 block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
          v-if="!auth.isLoggedIn"
        >
          <Icon name="mdi-lock-open" class="text-white text-2xl -mt-1 me-1" />
          {{ $t("login") }}
        </nuxt-link>
        <nuxt-link
          :to="localePath('/register')"
          class="text-white bg-fpOrange hover:bg-fpOrangeDark transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg px-2 py-1.5 block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
          v-if="!auth.isLoggedIn"
        >
          <Icon name="mdi-account-plus" class="text-white text-2xl -mt-1 me-1" />
          {{ $t("create_new_account") }}
        </nuxt-link>

        <nuxt-link
          :to="localePath('/contact')"
          class="text-white bg-fpOrange hover:bg-fpOrangeDark transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg px-2 py-1.5 block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
        >
          {{ $t("order") }}
        </nuxt-link>
      </div>
      <div class="w-full lg:hidden flex justify-between items-center">
        <button @click.stop="toggleDarkmode()" class="bg-gray-100 dark:bg-gray-700 rounded-full p-1" :class="auth.isLoggedIn ? '' : 'ms-auto'">
          <Icon class="text-3xl text-fpOrange" name="ph-moon-fill" v-if="mode == 'light'" />
          <Icon id="toggleMode" class="text-3xl text-fpOrange" name="ph-sun-fill" v-if="mode == 'dark'" />
        </button>
        <div class="relative">
          <button
            type="button"
            class="flex lg:hidden items-center text-sm font-medium text-center bg-gray-50 dark:bg-gray-700 hover:bg-fpOrange rounded-full p-1 text-fpOrange hover:text-fpRed transition"
            @click="hoverNotification = !hoverNotification"
            @mouseout="hoverNotification = false"
            v-if="auth.isLoggedIn"
          >
            <Icon name="mdi-bell" class="text-3xl text-inherit" />
            <div
              class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"
            >
              {{ globalStore.notifications.length }}
            </div>
          </button>
          <transition name="menu-down" v-show="hoverNotification">
            <div
              style="display: none"
              class="bg-gray-50 dark:text-gray-300 z-101 dark:bg-gray-800 absolute top-12 -start-10 w-72 rounded-lg shadow-xl dark:border-t dark:border-t-fpOrange"
            >
              <div class="flex items-center justify-between border-b border-b-fpLightGray dark:border-b-gray-700 pb-2 p-4">
                <p class="text-gray-900 dark:text-gray-300 text-xl">{{ $t("notification") }}</p>
                <span class="bg-fpRed text-white px-2 py-1.5 rounded-full">{{ globalStore.notifications.length }} {{ $t("new") }}</span>
              </div>
              <ul class="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                <li v-for="notification in globalStore.notifications" :key="notification.id">
                  <!-- ?read=true -->
                  <nuxt-link
                    :to="localePath({path: `/blog/${notification.data.post.slug}`, query: {read: true}})"
                    class="flex items-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-900 text-fpRed hover:text-fpBlue p-2"
                  >
                    <img :src="`${baseURL}/images/${notification.data.post.photo}`" alt="post photo" class="w-12 h-12 rounded-full object-cover" />
                    <span class="flex flex-col text-start ms-2">
                      <span class="text-xl dark:text-fpLightBack" v-text="locale == 'ar' ? notification.data.post.name_ar : notification.data.post.name_en"></span>
                      <span class="mt-1 dark:text-gray-300"
                        >{{ String(locale == "ar" ? notification.data.post.description_ar : notification.data.post.description_en).slice(0, 30) }}...</span
                      >
                    </span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </transition>
        </div>
        <nuxt-link
          :to="localePath('/profile')"
          class="text-fpOrange hover:text-fpBlue bg-gray-50 dark:bg-gray-700 rounded-full p-1 grid place-content-center"
          v-if="auth.isLoggedIn"
        >
          <Icon name="ph-user-circle-fill" class="text-4xl" />
        </nuxt-link>
        <button
          type="button"
          @click="logoutUser()"
          class="text-fpOrange hover:text-fpBlue bg-gray-50 dark:bg-gray-700 rounded-full p-1 grid place-content-center"
          v-if="auth.isLoggedIn"
        >
          <Icon name="ic-twotone-log-out" class="text-4xl" :class="locale == 'ar' ? 'rotate-180' : ''" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useGlobalStore} from "@/store/GlobalStore";
import {useAuthStore} from "@/store/AuthStore";
import {useTostStore} from "@/store/TostStore";
const auth = useAuthStore();
const tost = useTostStore();
const globalStore = useGlobalStore();
const {locale, setLocale} = useI18n();
const {currentLocale, dir} = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
let hoverNotification = ref(false);
let mode = ref("light");
if (process.client) {
  globalStore.notificationsUser();
}
const toggleDarkmode = () => {
  mode.value = localStorage.getItem("mode") != null ? localStorage.getItem("mode") : mode.value;
  if (mode.value == "light") {
    localStorage.setItem("mode", "dark");
    document.documentElement.classList.add("dark");
    mode.value = "dark";
  } else {
    localStorage.setItem("mode", "light");
    document.documentElement.classList.remove("dark");
    mode.value = "light";
  }
};
async function logoutUser() {
  try {
    const token = localStorage.getItem("user");
    let user = auth.logout(token);
    user.then(data => {
      if (data.status) {
        tost.add({
          type: "success",
          message: currentLocale.value == "ar" ? "تم تسجيل الخروج بنجاح" : `success logout user`,
        });
        navigateTo("/");
      }
    });
  } catch (err) {
    console.log(err);
  }
}
// v-if="!auth.isLoggedIn"
</script>

<style>
.z-101 {
  z-index: 101;
}
</style>
