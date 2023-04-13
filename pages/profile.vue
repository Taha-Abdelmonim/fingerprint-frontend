<template>
  <section class="pb-40">
    <BreadCrumbs :classes="'bg-gray-200'" :contents="[$t('profile'), 'تعديل']" />
    <section class="pt-10">
      <div class="container mx-auto lg:mt-24 md:flex gap-10 object-cover">
        <AccountMenu />
        <AccountUpdate v-if="true" />
        <div class="md:w-4/6" v-if="false">
          <div class="bg-fpBlueDark/10 px-10 pt-10 pb-5 rounded-lg custom-underline">
            <div class="flex items-center text-main_color_2">
              <Icon name="ri:user-3-fill" class="ml-4 text-4xl" />
              <h1 class="text-3xl font-bold -mb-2">{{ $t("profile") }}</h1>
            </div>
            <!-- <hr class="-mr-10 mt-4 w-[112%] bg-main_color_2 h-1" /> -->
            <div class="flex items-center justify-between mt-10">
              <span class="text-xl lg:text-2xl">{{ $t("name_user") }} :</span>
              <p class="text-md text-gray-600">طه عبدالمنعم</p>
            </div>
            <hr class="-mr-10 mt-2 w-[110.5%]" />
            <div class="flex items-center justify-between mt-10">
              <span class="text-md lg:text-2xl">{{ $t("email_user") }} :</span>
              <p class="text-lg text-gray-600">emali@example.com</p>
            </div>
            <hr class="-mr-10 mt-2 w-[110.5%]" />
            <div class="flex items-center justify-between mt-10">
              <span class="text-md lg:text-2xl">{{ $t("status") }}:</span>
              <p class="text-lg text-gray-600">موافقة</p>
            </div>
            <hr class="-mr-10 mt-2 w-[110.5%]" />
            <div class="flex items-center justify-between mt-10">
              <span class="text-md lg:text-2xl">{{ $t("phone_user") }}:</span>
              <p class="text-lg text-gray-600">0109077754</p>
            </div>
            <hr class="-mr-10 mt-2 w-[110.5%]" />
            <div class="flex items-center justify-between mt-10">
              <span class="text-md lg:text-2xl">{{ $t("join_date") }}:</span>
              <p class="text-lg text-gray-600">2022-10-01</p>
            </div>
          </div>
          <button
            class="mb-10 lg:mb-40 mx-auto leading-none relative bg-main_color_2 bg-fpOrangeDark transition pt-1 pb-2 px-4 text-base font-normal text-white rounded-md whitespace-nowrap flex items-center mt-4"
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
useHead({
  title: "الملف الشخصي",
});
</script>
