<template>
  <header class="bg-header">
    <div class="container flex items-center mx-auto">
      <div class="w-1/6 flex items-center gap-x-2">
        <img src="~/assets/images/global/logo-transparent.png" alt="" class="w-20" />
      </div>
      <nav class="w-4/6">
        <ul class="flex items-center">
          <li>
            <a href="#" class="active text-white font-bold text-lg px-3">{{ $t("home") }}</a>
          </li>
          <li>
            <a href="#" class="text-white font-bold text-lg px-3">{{ $t("about") }}</a>
          </li>
          <li>
            <a href="#" class="text-white font-bold text-lg px-3">{{ $t("services") }}</a>
          </li>
          <li>
            <a href="#" class="text-white font-bold text-lg px-3">{{ $t("our_business") }}</a>
          </li>
          <li>
            <a href="#" class="text-white font-bold text-lg px-3">{{ $t("reviews") }}</a>
          </li>
          <li>
            <a href="#" class="text-white font-bold text-lg px-3">{{ $t("blog") }}</a>
          </li>
          <li>
            <a href="#" class="text-white font-bold text-lg px-3">{{ $t("contact") }}</a>
          </li>
        </ul>
      </nav>
      <div class="w-1/6 flex justify-end items-center">
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
onMounted(() => {
  document.documentElement.classList.add(localStorage.getItem("mode"));
});
const toggleDarkmode = () => {
  mode.value = localStorage.getItem("mode");
  let toggleMode = document.getElementById("toggleMode");
  if (mode.value == null) {
    localStorage.setItem("mode", "dark");
    document.documentElement.classList.add("dark");
    toggleMode.setAttribute("name", "");
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

<style></style>
