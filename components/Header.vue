<template>
  <header class="bg-header dark:bg-gray-800 sticky top-0 start-0 z-100">
    <a
      href="http://wa.me/201090844348"
      target="_blank"
      class="sm:hidden rounded-full p-2 fixed justify-center items-center end-8 bottom-4 z-51 transition-all duration-300 border-none flex"
    >
      <img src="~/assets/images/global/whatsapp.png" alt="" class="w-16" />
    </a>
    <span id="bar-scroll" class="absolute start-0 h-1 bg-fpOrange rounded-e-full"></span>
    <div class="container flex items-center mx-auto">
      <div class="w-full lg:w-1/6 flex justify-between items-center gap-x-2">
        <nuxt-link :to="localePath('/')">
          <img src="~/assets/images/global/logo-transparent.png" alt="" class="w-16 lg:w-20" />
        </nuxt-link>
        <button type="button" class="outline-gray-300 block lg:hidden" @click="toggleMenu = !toggleMenu">
          <Icon class="text-white text-4xl font-bold" :name="locale == 'ar' ? 'heroicons-bars-3-bottom-left-20-solid' : 'heroicons-bars-3-bottom-right'" />
        </button>
      </div>
      <div v-if="toggleMenu" class="fixed inset-0 z-20 backdrop-blur-sm bg-black/[0.3] lg:hidden" @click="toggleMenu = !toggleMenu"></div>
      <Transition :name="locale == 'ar' ? 'slide-left' : 'slide-right'" v-show="toggleMenu">
        <nav class="sm:fixed sm:bg-white dark:bg-gray-800 dark:text-fpLightBack inset-y-0 end-0 w-5/6 z-50 lg:w-3/6 px-4 sm:pt-4 sm:flex flex-col">
          <div class="lg:hidden">
            <div class="flex items-center justify-between gap-x-2">
              <button type="button" class="outline-gray-100 outline rounded-md" @click="toggleMenu = !toggleMenu">
                <Icon name="ic-round-close" class="text-4xl font-bold" />
              </button>
              <img src="~/assets/images/global/logo.png" alt="" class="w-20" />
            </div>
          </div>
          <ul class="flex flex-col lg:flex-row lg:items-center sm:divide-y dark:divide-gray-700 sm:mt-6 sm:h-full">
            <li class="py-3 lg:py-0">
              <nuxt-link
                :to="localePath('/')"
                class="text-gray-700 lg:text-white dark:text-gray-300 font-medium lg:font-bold text-lg lg:px-3 flex lg:block items-center justify-between"
              >
                {{ $t("home") }}
                <Icon class="text-3xl lg:hidden" name="ic-baseline-house" />
              </nuxt-link>
            </li>
            <li class="py-3 lg:py-0">
              <nuxt-link
                :to="localePath('/about')"
                class="text-gray-700 lg:text-white dark:text-gray-300 font-medium lg:font-bold text-lg lg:px-3 flex lg:block items-center justify-between"
              >
                {{ $t("about") }}
                <Icon class="text-3xl lg:hidden" name="mdi-account-box-multiple-outline" />
              </nuxt-link>
            </li>
            <!-- labtop -->
            <li class="py-3 lg:py-0 hidden lg:block items-center justify-between">
              <button
                type="button"
                class="text-gray-700 lg:text-white dark:text-gray-300 hover:text-fpOrange font-medium lg:font-bold text-lg sm:ps-2 sm:pe-0 lg:px-3 relative sm:w-full"
                @mouseenter="hoverServices = !hoverServices"
                @mouseleave="hoverServices = false"
              >
                <span class="sm:flex items-center justify-between">
                  <span>
                    {{ $t("services") }}
                    <Icon name="zondicons-cheveron-down" class="text-2xl transition-all duration-300" :class="hoverServices ? 'rotate-180' : ''" />
                  </span>
                  <Icon class="text-3xl lg:hidden" name="ic-baseline-important-devices" />
                </span>
                <transition name="menu-down" v-show="hoverServices">
                  <div
                    style="display: none"
                    class="lg:absolute start-0 top-8 bg-white dark:text-gray-300 dark:bg-gray-800 text-gray-800 px-2 py-2 lg:w-52 text-sm font-medium rounded-md lg:after:content-[''] lg:after:absolute after:top-0 after:start-0 after:w-full after:h-1 after:bg-fpOrange after:rounded-t-md"
                  >
                    <ul class="divide-y dark:divide-gray-700">
                      <li
                        v-for="section in sectionsStore.sectionsActive"
                        :key="section.id"
                        @click="hoverServices = false"
                        class="relative py-3 sm:ps-6 text-start sm:before:content-[''] sm:before:absolute before:top-3.5 before:start-0 before:bg-gray-300 before:w-2 before:h-2 before:rounded-full"
                      >
                        <nuxt-link :to="localePath(`/${section.url}`)" class="block w-full h-full" v-text="currentLocale == 'ar' ? section.name_ar : section.name_en"></nuxt-link>
                      </li>
                    </ul>
                  </div>
                </transition>
              </button>
            </li>
            <!-- mobile -->
            <li @click="hoverServices = !hoverServices" class="py-3 lg:py-0 flex lg:hidden items-center justify-between">
              <span>
                {{ $t("services") }}
                <Icon name="zondicons-cheveron-down" class="text-2xl transition-all duration-300" :class="hoverServices ? 'rotate-180' : ''" />
              </span>
              <Icon class="text-3xl peer-[.active]:text-fpOrange lg:hidden" name="ic-baseline-important-devices" />
            </li>
            <transition name="menu-down" v-show="hoverServices">
              <ul
                class="divide-y dark:divide-gray-700 lg:hidden lg:absolute start-0 top-8 bg-white dark:text-gray-300 dark:bg-gray-800 text-gray-800 px-2 py-2 lg:w-44 text-sm font-medium rounded-md lg:after:content-[''] lg:after:absolute after:top-0 after:start-0 after:w-full after:h-1 after:bg-fpOrange after:rounded-t-md"
              >
                <li
                  v-for="section in sectionsStore.sectionsActive"
                  :key="section.id"
                  @click="hoverServices = !hoverServices"
                  class="relative py-3 sm:ps-10 sm:before:content-[''] sm:before:absolute before:top-3.5 before:start-4 before:bg-gray-300 before:w-2 before:h-2 before:rounded-full"
                >
                  <nuxt-link :to="localePath(`/${section.url}`)" v-text="currentLocale == 'ar' ? section.name_ar : section.name_en"></nuxt-link>
                </li>
              </ul>
            </transition>
            <li class="py-3 lg:py-0">
              <nuxt-link
                :to="localePath('/review')"
                class="reviews text-gray-700 lg:text-white dark:text-gray-300 font-medium lg:font-bold text-lg lg:px-3 flex lg:block items-center justify-between"
                >{{ $t("reviews") }}
                <Icon class="text-3xl lg:hidden" name="ph-users-three-bold" />
              </nuxt-link>
            </li>
            <li class="py-3 lg:py-0">
              <nuxt-link
                :to="localePath('/blogs')"
                class="text-gray-700 lg:text-white dark:text-gray-300 font-medium lg:font-bold text-lg lg:px-3 flex lg:block items-center justify-between"
                :class="route.name.slice(0, 4) == 'blog' ? 'router-link-active' : ''"
              >
                {{ $t("blog") }}
                <Icon class="text-3xl lg:hidden" name="bx-bxl-blogger" />
              </nuxt-link>
            </li>
            <li class="py-3 lg:py-0">
              <nuxt-link
                :to="localePath('/contact')"
                class="text-gray-700 lg:text-white dark:text-gray-300 font-medium lg:font-bold text-lg lg:px-3 flex lg:block items-center justify-between"
              >
                {{ $t("contact") }}
                <Icon class="text-3xl lg:hidden" name="ph-envelope-open-fill" />
              </nuxt-link>
            </li>
          </ul>
          <div class="flex flex-col justify-center items-center gap-y-3 py-4 lg:hidden">
            <nuxt-link
              v-if="!auth.isLoggedIn"
              :to="localePath('/login')"
              class="text-fpBlue dark:text-fpLightBack bg-blue-400/20 hover:bg-blue-400/50 transition-colors focus:ring-4 font-bold rounded-lg text-lg px-2 py-2 ms-auto focus:outline-none block w-full text-center"
            >
              <Icon name="mdi-lock-open" class="text-inherit text-2xl -mt-1 me-1" />
              {{ $t("login") }}
            </nuxt-link>
            <nuxt-link
              v-if="!auth.isLoggedIn"
              :to="localePath('/register')"
              class="text-fpBlue dark:text-fpLightBack bg-blue-400/20 hover:bg-blue-400/50 transition-colors focus:ring-4 font-bold rounded-lg text-lg px-2 py-1.5 ms-auto focus:outline-none block w-full text-center"
            >
              <Icon name="mdi-account-plus" class="text-inherit text-2xl -mt-1 me-1" />
              {{ $t("create_new_account") }}
            </nuxt-link>
            <button
              @click.stop="changelocal()"
              type="button"
              class="text-fpBlue dark:text-fpLightBack lg:me-4 w-full inline-flex items-center font-medium justify-center px-4 py-2 rounded-lg cursor-pointer bg-blue-400/20 relative"
            >
              <Icon :name="locale == 'ar' ? 'openmoji-flag-us-outlying-islands' : 'twemoji-flag-saudi-arabia'" class="text-2xl" />
              <span class="text-xl ms-2">{{ locale == "ar" ? "English" : "العربية" }} </span>
            </button>
            <ul class="lg:hidden flex items-center gap-x-3 justify-center border-t-2 pt-4">
              <li>
                <a href="https://www.facebook.com/fingerprintmedia1?mibextid=ZbWKwL" target="_blank"
                  ><Icon class="text-gray-800 hover:text-[#1877f2] transition hover:scale-110 text-4xl" name="uil-facebook"
                /></a>
              </li>
              <li>
                <a href="#" target="_blank"><Icon class="text-gray-800 hover:text-[#1da1f2] transition hover:scale-110 text-4xl" name="mdi-twitter-box" /></a>
              </li>
              <li>
                <a href="https://instagram.com/fingerprint_media_1?igshid=ZDdkNTZiNTM=" target="_blank"
                  ><Icon class="text-gray-800 hover:text-[#c13584] transition hover:scale-110 text-4xl" name="ri-instagram-fill"
                /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/finger-print-2528361b1" target="_blank"
                  ><Icon class="text-gray-800 hover:text-[#0a66c2] transition hover:scale-110 text-4xl" name="mdi-linkedin"
                /></a>
              </li>
              <li>
                <a href="https://www.snapchat.com/add/fingerprintm" target="_blank"
                  ><Icon class="text-gray-800 hover:text-[#fffc00] transition hover:scale-110 text-4xl" name="uil-snapchat-square"
                /></a>
              </li>
              <li>
                <a href="http://wa.me/201090844348" target="_blank"
                  ><Icon class="text-gray-800 hover:text-[#4aae20] transition hover:scale-110 text-4xl" name="ri-whatsapp-fill"
                /></a>
              </li>
            </ul>
          </div>
        </nav>
      </Transition>
      <div class="w-2/6 hidden lg:flex justify-end items-center gap-x-4">
        <button
          @click.stop="changelocal()"
          type="button"
          class="me-4 inline-flex items-center font-medium justify-center px-4 py-2 rounded-lg cursor-pointer hover:bg-fpOrangeDark relative"
        >
          <Icon :name="locale == 'ar' ? 'openmoji-flag-us-outlying-islands' : 'twemoji-flag-saudi-arabia'" class="text-white text-2xl" />
          <span class="text-xl text-white ms-2">{{ locale == "ar" ? "English" : "العربية" }} </span>
        </button>
        <button @click.stop="toggleDarkmode()" class="bg-gray-100 dark:bg-gray-700 rounded-full p-1">
          <Icon class="text-3xl text-fpOrange" name="ph-moon-fill" v-if="mode == 'light'" />
          <Icon id="toggleMode" class="text-3xl text-fpOrange" name="ph-sun-fill" v-if="mode == 'dark'" />
        </button>

        <button
          type="button"
          class="relative hidden lg:flex items-center text-sm font-medium text-center bg-gray-50 dark:bg-gray-700 hover:bg-fpOrange rounded-full p-1 text-fpOrange hover:text-fpRed transition"
          @mouseenter="hoverNotification = !hoverNotification"
          @mouseleave="hoverNotification = !hoverNotification"
          v-if="auth.isLoggedIn"
        >
          <Icon name="mdi-bell" class="text-3xl text-inherit" />
          <div
            v-if="Object.keys(notifications).length"
            class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"
          >
            {{ notifications.notifications.length }}
          </div>
          <!--  ?read=true -->
          <transition name="menu-down" v-show="hoverNotification">
            <div
              v-if="Object.keys(notifications).length"
              style="display: none"
              class="bg-gray-50 dark:text-gray-300 dark:bg-gray-800 absolute top-10 start-0 w-72 rounded-lg shadow-xl dark:border-t dark:border-t-fpOrange"
            >
              <div class="flex items-center justify-between border-b border-b-fpLightGray dark:border-b-gray-700 pb-2 p-4">
                <p class="text-gray-900 dark:text-gray-300 text-xl">{{ $t("notification") }}</p>
                <span class="bg-fpRed text-white px-2 py-1.5 rounded-full">{{ notifications.notifications.length }} {{ $t("new") }}</span>
              </div>
              <ul class="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                <li v-for="notification in notifications.notifications" :key="notification.id">
                  <nuxt-link
                    :to="localePath({path: `/blog/${notification.data.post.slug}`, query: {read: true}})"
                    class="flex items-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 hover:dark:bg-gray-900 text-fpRed hover:text-fpBlue p-2"
                  >
                    <img :src="`${baseURL}/images/${notification.data.post.photo}`" alt="" class="w-12 h-12 rounded-full object-cover" />
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
        </button>
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
  </header>
</template>

<script setup>
import {useAuthStore} from "@/store/AuthStore";
import {useTostStore} from "@/store/TostStore";
import {useSectionStore} from "@/store/SectionStore";
import {useGlobalStore} from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const route = useRoute();
const auth = useAuthStore();
const tost = useTostStore();
const sectionsStore = useSectionStore();
const baseURL = useRuntimeConfig().public.baseURL;
const {currentLocale, dir} = useLang();
const {locale, setLocale} = useI18n();
const changelocal = () => {
  setLocale(locale.value == "ar" ? "en" : "ar");
};
let mode = ref("light");
let hoverNotification = ref(false);
let hoverServices = ref(false);
let toggleMenu = ref(false);
// sectionsStore.getSections("active");
onMounted(() => {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    toggleMenu.value = false;
  } else {
    toggleMenu.value = true;
  }
  document.documentElement.classList.add(localStorage.getItem("mode"));
  let barScroll = document.getElementById("bar-scroll");
  window.addEventListener("scroll", function () {
    barScroll.style.cssText = `width:${Math.trunc((window.pageYOffset / (document.documentElement.scrollHeight - window.outerHeight)) * 100)}%;`;
  });
});
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

async function getUserDetails() {
  try {
    const token = localStorage.getItem("user");
    let user = auth.profile(token);
    user.then(data => {
      if (data.status) {
        auth.setUser(data.user);
      } else {
        auth.removeUser();
      }
    });
  } catch (err) {
    console.log(err);
  }
}
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
let notifications = ref([]);

const appSettings = async () => {
  try {
    await $fetch(`${useRuntimeConfig().public.apiURL}/app_settings`, {
      method: "POST",
    }).then(res => {
      globalStore.setAppSettings(res.data);
    });
  } catch (error) {
    console.log(error);
  }
};
appSettings();
if (process.client) {
  globalStore.notificationsUser();
  if (Object.keys(auth.user).length <= 0 && localStorage.getItem("user")) {
    getUserDetails();
  }
}
</script>

<style>
.slide-right-enter-active {
  transition: all 0.3s ease-out;
}

.slide-right-leave-active {
  transition: all 0.4s ease-in;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0.5;
}

.slide-left-enter-active {
  transition: all 0.3s ease-out;
}

.slide-left-leave-active {
  transition: all 0.4s ease-in;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0.5;
}
.menu-down-enter-active,
.menu-down-leave-active {
  transition: all 0.2s linear;
}
.menu-down-enter-from,
.menu-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.z-100 {
  z-index: 100;
}
@media (min-width: 1024px) {
  .lg\:hidden {
    display: none !important;
  }
}
</style>
