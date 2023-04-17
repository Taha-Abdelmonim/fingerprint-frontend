<template>
  <section class="pb-40">
    <BreadCrumbs :classes="'bg-gray-200 dark:bg-gray-700 dark:text-fpLightBack'" :contents="[$t('profile'), 'تعديل']" />
    <section class="pt-10">
      <div class="container mx-auto lg:mt-24 md:flex gap-10 object-cover">
        <AccountMenu />
        <AccountUpdate v-if="auth.showForm == 'update'" />
        <div class="md:w-4/6" v-if="auth.showForm == 'profile'">
          <div class="bg-fpBlueDark/10 dark:bg-gray-800 px-10 pt-10 pb-5 rounded-lg custom-underline">
            <div class="flex items-center dark:text-fpOrange">
              <Icon name="ri:user-3-fill" class="ml-4 text-4xl" />
              <h1 class="text-3xl font-bold -mb-2">{{ $t("profile") }}</h1>
            </div>
            <!-- <hr class="-mr-10 mt-4 w-[112%] bg-main_color_2 h-1" /> -->
            <div class="flex items-center justify-between mt-10">
              <span class="text-xl lg:text-2xl dark:text-fpLightBack">{{ $t("name_user") }} :</span>
              <p class="text-md text-gray-600 dark:text-gray-300" v-text="auth.user.name"></p>
            </div>
            <hr class="-mr-10 mt-2 w-[109%]" />
            <div class="flex items-center justify-between mt-10">
              <span class="text-md lg:text-2xl dark:text-fpLightBack">{{ $t("email_user") }} :</span>
              <p class="text-lg text-gray-600 dark:text-gray-300" v-text="auth.user.email"></p>
            </div>
            <hr class="-mr-10 mt-2 w-[109%]" />
            <div class="flex items-center justify-between mt-10">
              <span class="text-md lg:text-2xl dark:text-fpLightBack">{{ $t("status") }}:</span>
              <p class="text-lg text-gray-600 dark:text-gray-300">موافقة</p>
            </div>
            <hr class="-mr-10 mt-2 w-[109%]" />
            <div class="flex items-center justify-between mt-10">
              <span class="text-md lg:text-2xl dark:text-fpLightBack">{{ $t("phone_user") }}:</span>
              <p class="text-lg text-gray-600 dark:text-gray-300" v-text="auth.user.phone"></p>
            </div>
            <hr class="-mr-10 mt-2 w-[109%]" />
            <div class="flex items-center justify-between mt-10">
              <span class="text-md lg:text-2xl dark:text-fpLightBack">{{ $t("join_date") }}:</span>
              <p class="text-lg text-gray-600 dark:text-gray-300">{{ getDate(auth.user.created_at) }}</p>
            </div>
          </div>
          <button
            class="mx-auto leading-none relative bg-main_color_2 bg-fpOrangeDark transition pt-1 pb-2 px-4 text-base font-normal text-white rounded-md whitespace-nowrap flex items-center mt-4"
            @click="auth.showForm = 'update'"
          >
            <span class="me-2 text-3xl"> {{ $t("edit_user") }} </span>
            <Icon name="ic-outline-mode-edit-outline" class="text-3xl -mb-2" />
          </button>
        </div>
      </div>
    </section>
  </section>
</template>
<script setup>
import {useAuthStore} from "@/store/AuthStore";
const auth = useAuthStore();
const {t} = useI18n();
useHead({
  title: t("profile"),
  meta: [{name: "title", content: t("profile")}],
});
function getDate(date) {
  var $created_at = new Date(date);
  let year = $created_at.getFullYear();
  let month = $created_at.getMonth() < 10 ? `0${$created_at.getMonth()}` : $created_at.getMonth();
  let dey = $created_at.getDay() < 10 ? `0${$created_at.getDay()}` : $created_at.getDay();
  let hour = $created_at.getHours() < 10 ? `0${$created_at.getHours()}` : $created_at.getHours();
  let minutes = $created_at.getMinutes() < 10 ? `0${$created_at.getMinutes()}` : $created_at.getMinutes();
  let seconds = $created_at.getSeconds() < 10 ? `0${$created_at.getSeconds()}` : $created_at.getSeconds();
  return `${dey}-${month}-${year} ${seconds}:${minutes}:${hour}`;
}
/* 
if (process.client) {
  if (Object.keys(auth.user).length <= 0 && localStorage.getItem("user")) {
    getUserDetails();
  }
}

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
} */
</script>
