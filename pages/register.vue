<template>
  <BreadCrumbs :classes="' dark:text-fpLightBack'" :contents="[$t('new_account')]" />
  <section class="bg-fpBlueDark/10 pt-8 pb-20 lg:pb-40">
    <div
      class="sm:py-10 sm:mx-3 mx-auto lg:w-[1200px] flex flex-col-reverse lg:flex-row justify-center lg:items-center gap-x-10 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl p-0 lg:h-[80vh]"
    >
      <div class="lg:w-1/2 lg:ps-4 lg:ms-28 sm:px-4">
        <h1 class="font-bold text-center text-3xl lg:text-5xl text-fpBlueDark dark:text-fpOrange mb-10">{{ $t("new_account") }}</h1>
        <form @submit.prevent="submitUserRegister" method="post" action @keydown="errors.clear($event.target.name)">
          <div class="mb-6">
            <label for="name" class="block mb-2 text-sm lg:text-md font-medium text-gray-700 dark:text-gray-300">{{ $t("name_user") }}</label>
            <input
              type="text"
              id="name"
              class="bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border"
              :placeholder="$t('fl_user')"
              v-model="register.name"
              :class="errors.has('name') ? 'is-invalid' : ''"
              required
            />
            <p v-if="errors.has('name')" class="mt-2 text-sm text-red-500">{{ errors.get("name") }}</p>
          </div>
          <div class="mb-6">
            <label for="phone" class="block mb-2 text-sm lg:text-md font-medium text-gray-700 dark:text-gray-300">{{ $t("phone_user") }}</label>
            <input
              id="phone"
              type="text"
              class="bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border"
              placeholder="201090844348"
              v-model="register.phone"
              :class="errors.has('phone') ? 'is-invalid' : ''"
              required
            />
            <p v-if="errors.has('phone')" class="mt-2 text-sm text-red-500">{{ errors.get("phone") }}</p>
          </div>
          <div class="mb-6">
            <label for="success" class="block mb-2 text-sm lg:text-md font-medium text-gray-700 dark:text-gray-300">{{ $t("email_user") }}</label>
            <input
              type="email"
              class="bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border"
              placeholder="name@example.com"
              v-model="register.email"
              :class="errors.has('email') ? 'is-invalid' : ''"
              required
            />
            <p v-if="errors.has('email')" class="mt-2 text-sm text-red-500">{{ errors.get("email") }}</p>
          </div>
          <div class="mb-6">
            <label for="success" class="block mb-2 text-sm lg:text-md font-medium text-gray-700 dark:text-gray-300">{{ $t("password_user") }}</label>
            <div class="relative">
              <button
                :class="errors.has('password') ? 'is-invalid' : ''"
                type="button"
                @click="togglePassword = !togglePassword"
                class="bg-slate-200 absolute end-0 top-0 cursor-pointer w-10 h-full rounded-e-lg"
              >
                <Icon :name="togglePassword ? 'ph-eye-slash-fill' : 'ph-eye'" class="text-xl" />
              </button>
              <input
                :type="togglePassword ? 'text' : 'password'"
                class="bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border"
                placeholder="********"
                v-model="register.password"
                required
                :class="errors.has('password') ? 'is-invalid' : ''"
              />
            </div>
            <p v-if="errors.has('password')" class="mt-2 text-sm text-red-500">{{ errors.get("password") }}</p>
          </div>

          <button
            type="submit"
            class="text-fpBlueDark bg-fpOrange hover:bg-fpOrange/90 transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg lg:text-2xl mt-6 px-4 lg:px-10 py-2 lg:py-3 mx-auto block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
          >
            {{ $t("create_new_account") }}
          </button>
          <!-- <div class="flex items-center justify-center mt-10">
            <span class="w-20 h-1.5 bg-fpBlueDark rounded-full mt-1 me-4"></span>
            <p class="text-fpBlueDark font-bold text-xl lg:text-3xl">{{ $t("or_register_from") }}</p>
            <span class="w-20 h-1.5 bg-fpBlueDark rounded-full mt-1 ms-4"></span>
          </div>
          <div class="flex flex-col lg:flex-row sm:gap-y-4 items-center justify-between mt-10">
            <button class="border-2 px-4 py-2 rounded-lg">
              <Icon name="mdi-google" class="text-green-500" />
              <span class="">تسجيل الدخول عبر جوجل</span>
            </button>
            <button class="border-2 px-4 py-2 rounded-lg">
              <Icon name="mdi-google" class="text-green-500" />
              <span class="">تسجيل الدخول عبر جوجل</span>
            </button>
          </div> -->
          <div class="text-md lg:text-xl mt-5 lg:mt-10">
            <span class="dark:text-gray-300">{{ $t("have_account") }}</span>
            <nuxt-link :to="localePath(`/login`)" class="text-fpBlueDark font-bold ms-1">{{ $t("login") }}</nuxt-link>
          </div>
        </form>
      </div>
      <div class="lg:w-1/2 max-h-full">
        <picture class="sm:hidden">
          <source media="(max-width: 1024px)" srcset="~/assets/images/login.png" class="object-cover" />
          <img src="~/assets/images/login_small.png" alt="Login" class="object-cover h-[80vh] ms-auto" />
        </picture>
      </div>
    </div>
  </section>
</template>
<script setup>
import {useAuthStore} from "@/store/AuthStore";
import {useTostStore} from "@/store/TostStore";
const apiUrl = useRuntimeConfig().public.apiURL + "/auth";
const errors = reactive(useErrors());
const {currentLocale, dir} = useLang();
const auth = useAuthStore();
const tost = useTostStore();
const {t} = useI18n();
let togglePassword = ref(false);
useHead({
  title: t("new_account"),
  meta: [{name: "title", content: t("new_account")}],
});
let register = reactive({
  name: "",
  phone: "",
  email: "",
  password: "",
});

async function submitUserRegister() {
  try {
    await useAsyncData("register", () =>
      $fetch(`${apiUrl}/register`, {
        method: "POST",
        body: {locale: currentLocale.value, ...register},
      }).then(res => {
        if (res.status) {
          auth.setUser(res.user);
          tost.add({
            type: "success",
            message: currentLocale.value == "ar" ? `تم انشاء الحساب ${res.user.name}` : `success create ${res.user.name}`,
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
          }
        }
      })
    );
  } catch (error) {
    console.log(error);
  }
}
</script>
