<template>
  <header class="bg-header sticky top-0 start-0 z-50">
    <span id="bar-scroll" class="absolute start-0 h-1 bg-fpOrange rounded-e-full"></span>
    <div class="container flex items-center mx-auto">
      <div class="w-full lg:w-1/6 flex justify-between items-center gap-x-2">
        <img src="~/assets/images/global/logo-transparent.png" alt="" class="w-16 lg:w-20" />
        <button type="button" class="outline-gray-300 block lg:hidden" @click="toggleMenu = !toggleMenu">
          <Icon class="text-white text-4xl font-bold" :name="locale == 'ar' ? 'heroicons-bars-3-bottom-left-20-solid' : 'heroicons-bars-3-bottom-right'" />
        </button>
      </div>
      <div v-if="toggleMenu" class="fixed inset-0 z-20 backdrop-blur-sm bg-black/[0.3] lg:hidden" @click="toggleMenu = !toggleMenu"></div>
      <Transition :name="locale == 'ar' ? 'slide-left' : 'slide-right'" v-show="toggleMenu">
        <nav class="sm:fixed sm:bg-white inset-y-0 end-0 w-5/6 z-50 lg:w-4/6 px-4 sm:pt-4 sm:flex flex-col">
          <div class="lg:hidden">
            <div class="flex items-center justify-between gap-x-2">
              <button type="button" class="outline-gray-100 outline rounded-md" @click="toggleMenu = !toggleMenu">
                <Icon name="ic-round-close" class="text-4xl font-bold" />
              </button>
              <img src="~/assets/images/global/logo.png" alt="" class="w-20" />
            </div>
          </div>
          <ul class="flex flex-col lg:flex-row lg:items-center sm:divide-y sm:mt-6 sm:h-full">
            <li class="py-3 lg:py-0 flex lg:block items-center justify-between">
              <a href="#" class="active text-gray-700 lg:text-white font-medium lg:font-bold text-lg px-3 peer">{{ $t("home") }}</a>
              <Icon class="text-3xl peer-[.active]:text-fpOrange lg:hidden" name="ic-baseline-house" />
            </li>
            <li class="py-3 lg:py-0 flex lg:block items-center justify-between">
              <a href="#" class="text-gray-700 lg:text-white font-medium lg:font-bold text-lg px-3">{{ $t("about") }}</a>
              <Icon class="text-3xl peer-[.active]:text-fpOrange lg:hidden" name="mdi-account-box-multiple-outline" />
            </li>
            <li class="py-3 lg:py-0 flex lg:block items-center justify-between">
              <a
                href="#"
                class="text-gray-700 lg:text-white font-medium lg:font-bold text-lg sm:ps-2 sm:pe-0 px-3 relative sm:w-full"
                @mouseenter="hoverServices = !hoverServices"
                @mouseleave="hoverServices = !hoverServices"
                @click="hoverServices = !hoverServices"
              >
                <span class="sm:flex items-center justify-between">
                  <span>
                    {{ $t("services") }}
                    <Icon name="zondicons-cheveron-down" class="text-2xl transition-all duration-300" :class="hoverServices ? 'rotate-180' : ''" />
                  </span>
                  <Icon class="text-3xl peer-[.active]:text-fpOrange lg:hidden" name="ic-baseline-important-devices" />
                </span>
                <transition name="menu-down" v-show="hoverServices">
                  <ul
                    class="divide-y lg:absolute start-0 top-8 bg-white text-gray-800 px-2 py-2 lg:w-44 text-sm font-medium rounded-md lg:after:content-[''] lg:after:absolute after:top-0 after:start-0 after:w-full after:h-1 after:bg-fpOrange after:rounded-t-md"
                  >
                    <li
                      class="relative py-2 sm:ps-6 sm:before:content-[''] sm:before:absolute before:top-3.5 before:start-0 before:bg-gray-300 before:w-2 before:h-2 before:rounded-full"
                    >
                      <a href="#">تصميم وستضافة المواقع</a>
                    </li>
                    <li
                      class="relative py-2 sm:ps-6 sm:before:content-[''] sm:before:absolute before:top-3.5 before:start-0 before:bg-gray-300 before:w-2 before:h-2 before:rounded-full"
                    >
                      <a href="#">دعم وصيانة الموقع</a>
                    </li>
                    <li
                      class="relative py-2 sm:ps-6 sm:before:content-[''] sm:before:absolute before:top-3.5 before:start-0 before:bg-gray-300 before:w-2 before:h-2 before:rounded-full"
                    >
                      <a href="#">تصاميم سوشيال ميديا</a>
                    </li>
                    <li
                      class="relative py-2 sm:ps-6 sm:before:content-[''] sm:before:absolute before:top-3.5 before:start-0 before:bg-gray-300 before:w-2 before:h-2 before:rounded-full"
                    >
                      <a href="#">تصميم تطبيقات موبايل</a>
                    </li>
                    <li
                      class="relative py-2 sm:ps-6 sm:before:content-[''] sm:before:absolute before:top-3.5 before:start-0 before:bg-gray-300 before:w-2 before:h-2 before:rounded-full"
                    >
                      <a href="#">تصميم فيديو</a>
                    </li>
                    <li
                      class="relative py-2 sm:ps-6 sm:before:content-[''] sm:before:absolute before:top-3.5 before:start-0 before:bg-gray-300 before:w-2 before:h-2 before:rounded-full"
                    >
                      <a href="#">موشن جرافيك</a>
                    </li>
                    <li
                      class="relative py-2 sm:ps-6 sm:before:content-[''] sm:before:absolute before:top-3.5 before:start-0 before:bg-gray-300 before:w-2 before:h-2 before:rounded-full"
                    >
                      <a href="#">تصوير فيديو</a>
                    </li>
                    <li
                      class="relative py-2 sm:ps-6 sm:before:content-[''] sm:before:absolute before:top-3.5 before:start-0 before:bg-gray-300 before:w-2 before:h-2 before:rounded-full"
                    >
                      <a href="#">اعلانات</a>
                    </li>
                    <li
                      class="relative py-2 sm:ps-6 sm:before:content-[''] sm:before:absolute before:top-3.5 before:start-0 before:bg-gray-300 before:w-2 before:h-2 before:rounded-full"
                    >
                      <a href="#">تحسين seo</a>
                    </li>
                  </ul>
                </transition>
              </a>
            </li>
            <li class="py-3 lg:py-0 flex lg:block items-center justify-between">
              <a href="#" class="text-gray-700 lg:text-white font-medium lg:font-bold text-lg px-3">{{ $t("our_business") }}</a>
              <Icon class="text-3xl peer-[.active]:text-fpOrange lg:hidden" name="ic-outline-business" />
            </li>
            <li class="py-3 lg:py-0 flex lg:block items-center justify-between">
              <a href="#" class="text-gray-700 lg:text-white font-medium lg:font-bold text-lg px-3">{{ $t("reviews") }}</a>
              <Icon class="text-3xl peer-[.active]:text-fpOrange lg:hidden" name="ph-users-three-bold" />
            </li>
            <li class="py-3 lg:py-0 flex lg:block items-center justify-between">
              <a href="#" class="text-gray-700 lg:text-white font-medium lg:font-bold text-lg px-3">{{ $t("blog") }}</a>
              <Icon class="text-3xl peer-[.active]:text-fpOrange lg:hidden" name="bx-bxl-blogger" />
            </li>
            <li class="py-3 lg:py-0 flex lg:block items-center justify-between">
              <a href="#" class="text-gray-700 lg:text-white font-medium lg:font-bold text-lg px-3">{{ $t("contact") }}</a>
              <Icon class="text-3xl peer-[.active]:text-fpOrange lg:hidden" name="ph-envelope-open-fill" />
            </li>
          </ul>
          <div class="border-t border-fpLightGray flex justify-center py-4 lg:hidden">
            <button
              @click.stop="changelocal()"
              type="button"
              class="lg:me-4 w-full inline-flex items-center font-medium justify-center px-4 py-2 rounded-lg cursor-pointer bg-blue-400/20 relative"
            >
              <Icon :name="locale == 'ar' ? 'openmoji-flag-us-outlying-islands' : 'twemoji-flag-saudi-arabia'" class="text-2xl" />
              <span class="text-xl text-fpBlue ms-2">{{ locale == "ar" ? "English" : "العربية" }} </span>
            </button>
          </div>
        </nav>
      </Transition>
      <div class="w-1/6 hidden lg:flex justify-end items-center">
        <button
          @click.stop="changelocal()"
          type="button"
          class="me-4 inline-flex items-center font-medium justify-center px-4 py-2 rounded-lg cursor-pointer hover:bg-fpOrangeDark relative"
        >
          <Icon :name="locale == 'ar' ? 'openmoji-flag-us-outlying-islands' : 'twemoji-flag-saudi-arabia'" class="text-white text-2xl" />
          <span class="text-xl text-white ms-2">{{ locale == "ar" ? "English" : "العربية" }} </span>
        </button>
        <button @click.stop="toggleDarkmode()" class="bg-gray-100 rounded-full p-1">
          <Icon class="text-3xl text-fpOrange" name="ph-moon-fill" v-if="mode == 'dark'" />
          <Icon id="toggleMode" class="text-3xl text-fpOrange" name="ph-sun-fill" v-if="mode != 'dark'" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
const {locale, setLocale} = useI18n();
const changelocal = () => {
  setLocale(locale.value == "ar" ? "en" : "ar");
};
let mode = ref(null);
let hoverServices = ref(false);
let toggleMenu = ref(true);
onMounted(() => {
  document.documentElement.classList.add(localStorage.getItem("mode"));
  let barScroll = document.getElementById("bar-scroll");
  window.addEventListener("scroll", function () {
    barScroll.style.cssText = `width:${Math.trunc((window.pageYOffset / (document.documentElement.scrollHeight - window.outerHeight)) * 100)}%;`;
  });
});
const toggleDarkmode = () => {
  mode.value = localStorage.getItem("mode");
  if (mode.value == null) {
    localStorage.setItem("mode", "dark");
    document.documentElement.classList.add("dark");
  } else {
    if (mode.value == "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("mode");
    } else {
      document.documentElement.classList.add("dark");
    }
  }
};
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
@media (min-width: 1024px) {
  .lg\:hidden {
    display: none !important;
  }
}
</style>
