<template>
  <div class="bg-fpBlueDark/10 dark:bg-gray-800 rounded-xl p-6">
    <form @submit.prevent="onSubmitUpdate" method="post" action @keydown="errors.clear($event.target.name)">
      <h1 class="text-center text-4xl dark:text-fpOrange mb-10">تعديل بيانات الحساب</h1>
      <div class="flex flex-wrap -m-2">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 sm:w-full md:w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">الأسم</label>
              <input
                type="text"
                id="name"
                name="name"
                :placeholder="$t('fl_user')"
                class="bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border"
                required
                v-model="updateValue.name"
                :class="errors.has('name') ? 'is-invalid' : ''"
              />
              <p v-if="errors.has('name')" class="mt-2 text-sm text-red-500">{{ errors.get("name") }}</p>
            </div>
          </div>
          <div class="p-2 sm:w-full md:w-1/2">
            <div class="relative">
              <label for="phone" class="leading-7 text-sm text-gray-600">الهاتف</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="01090770686"
                class="bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border"
                v-model="updateValue.phone"
                :class="errors.has('phone') ? 'is-invalid' : ''"
                required
              />
              <p v-if="errors.has('phone')" class="mt-2 text-sm text-red-500">{{ errors.get("phone") }}</p>
            </div>
          </div>

          <div class="p-2 sm:w-full md:w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">البريد الإلكتروني</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@gmail.com"
                class="bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border"
                v-model="updateValue.email"
                :class="errors.has('email') ? 'is-invalid' : ''"
                required
              />
              <p v-if="errors.has('email')" class="mt-2 text-sm text-red-500">{{ errors.get("email") }}</p>
            </div>
          </div>
          <div class="p-2 sm:w-full md:w-1/2 mt-4">
            <div class="relative">
              <label for="oldPassword" class="leading-7 text-sm text-gray-600">كلمة المرور القديمة</label>
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
                  id="oldPassword"
                  name="old_password"
                  placeholder="كلمة المرور القديمة"
                  class="bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border"
                  v-model="updateValue.old_password"
                  :type="togglePassword ? 'text' : 'password'"
                  :class="errors.has('password') ? 'is-invalid' : ''"
                />
              </div>
              <p v-if="errors.has('password')" class="mt-2 text-sm text-red-500">{{ errors.get("password") }}</p>
            </div>
          </div>
          <div class="p-2 sm:w-full md:w-1/2 mt-4">
            <div class="relative">
              <label for="password" class="leading-7 text-sm text-gray-600">كلمة المرور الجديدة</label>
              <input
                :type="togglePassword ? 'text' : 'password'"
                id="password"
                name="password"
                placeholder="كلمة المرور"
                class="bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border"
                v-model="updateValue.password"
                :class="errors.has('password') ? 'is-invalid' : ''"
              />
              <p v-if="errors.has('password')" class="mt-2 text-sm text-red-500">{{ errors.get("password") }}</p>
            </div>
          </div>
          <div class="p-2 sm:w-full md:w-1/2 mt-4">
            <div class="relative">
              <label for="cpassword" class="leading-7 text-sm text-gray-600">تأكيد كلمة المرور</label>
              <input
                :type="togglePassword ? 'text' : 'password'"
                id="cpassword"
                name="cPassword"
                placeholder="تأكيد كلمة المرور"
                class="bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border"
                v-model="updateValue.password_confirmation"
                :class="errors.has('password') ? 'is-invalid' : ''"
              />
              <p v-if="errors.has('password')" class="mt-2 text-sm text-red-500">{{ errors.get("password") }}</p>
            </div>
          </div>
        </div>
        <div class="p-2 w-full mt-10 flex justify-between">
          <button
            type="submit"
            class="transition bg-fpOrange bg-flBlue hover:bg-flBlue2 text-white border-0 py-2 sm:px-2 md:px-8 focus:outline-none rounded text-lg font-medium block"
          >
            <Icon name="dashicons-update2" class="md:ml-4 text-2xl" /> تحديث الحساب
          </button>
          <button
            type="button"
            @click="auth.showForm = 'profile'"
            class="transition bg-fpOrange bg-flBlue hover:bg-flBlue2 text-white border-0 py-2 sm:px-2 md:px-8 focus:outline-none rounded text-lg font-medium block cursor-pointer"
          >
            <Icon name="ri:user-3-fill" class="md:ml-4" /> الملف الشخصي
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import {useAuthStore} from "@/store/AuthStore";
import {useTostStore} from "@/store/TostStore";
const apiUrl = useRuntimeConfig().public.apiURL + "/auth";
const auth = useAuthStore();
const errors = reactive(useErrors());
const {currentLocale, dir} = useLang();
let togglePassword = ref(false);
const tost = useTostStore();
let updateValue = reactive({
  name: auth.user.name,
  phone: auth.user.phone,
  email: auth.user.email,
  old_password: "",
  password: "",
  password_confirmation: "",
});

const onSubmitUpdate = async () => {
  if (updateValue.old_password == "" || updateValue.password == "" || updateValue.password_confirmation == "") {
    delete updateValue.old_password;
    delete updateValue.password;
    delete updateValue.password_confirmation;
  }
  try {
    await useAsyncData("update", () =>
      $fetch(`${apiUrl}/update`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
        body: {locale: currentLocale.value, ...updateValue},
      }).then(res => {
        if (res.status) {
          auth.setUser(res.user);
          tost.add({
            type: "success",
            message: currentLocale.value == "ar" ? `تم تعديل المستخدم ${res.user.name}` : `success update user ${res.user.name}`,
          });
          auth.showForm = "profile";
        } else {
          if (res.errCode == 422) {
            let ob = {};
            console.log(res.message);
            for (const [key, value] of Object.entries(res.message)) {
              ob[key] = value[0];
              /* tost.add({
                type: "error",
                message: value[0],
              }); */
            }
            errors.record(ob);
          }
        }
      })
    );
  } catch (error) {
    console.log(error);
  }
};
</script>
