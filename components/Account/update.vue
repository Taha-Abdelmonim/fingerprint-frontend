<template>
  <div class="">
    <form>
      <h1 class="text-center text-4xl text-flBlue mb-10">تعديل بيانات الحساب</h1>
      <div class="flex flex-wrap -m-2">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 sm:w-full md:w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">الأسم</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="الاسم ثلاثي"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                v-model="updateValue.name"
              />
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
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                v-model="updateValue.phone"
              />
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
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                v-model="updateValue.email"
              />
            </div>
          </div>
          <div class="p-2 sm:w-full md:w-1/2 mt-4">
            <div class="relative">
              <label for="oldPassword" class="leading-7 text-sm text-gray-600">كلمة المرور القديمة</label>
              <input
                type="password"
                id="oldPassword"
                name="old_password"
                placeholder="كلمة المرور"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                v-model="updateValue.old_password"
              />
            </div>
          </div>
          <div class="p-2 sm:w-full md:w-1/2 mt-4">
            <div class="relative">
              <label for="password" class="leading-7 text-sm text-gray-600">كلمة المرور الجديدة</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="كلمة المرور"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                v-model="updateValue.password"
              />
            </div>
          </div>
          <div class="p-2 sm:w-full md:w-1/2 mt-4">
            <div class="relative">
              <label for="cpassword" class="leading-7 text-sm text-gray-600">تأكيد كلمة المرور</label>
              <input
                type="password"
                id="cpassword"
                name="cPassword"
                placeholder="تأكيد كلمة المرور"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                v-model="updateValue.password_confirmation"
              />
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
          <a
            @click="auth.showUpdateAndProfile('profile')"
            class="transition bg-fpOrange bg-flBlue hover:bg-flBlue2 text-white border-0 py-2 sm:px-2 md:px-8 focus:outline-none rounded text-lg font-medium block cursor-pointer"
          >
            <Icon name="ri:user-3-fill" class="md:ml-4" /> الملف الشخصي
          </a>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
let updateValue = reactive({
  name: "طه عبدالمنعم",
  phone: "01090770686",
  email: "info@fingerm.com",
  old_password: "",
  password: "",
  password_confirmation: "",
});
/* 
const setValueInput = userData => {
  updateValue.name = userData.name;
  updateValue.phone = userData.phone;
  updateValue.gender = userData.gender;
  updateValue.email = userData.email;
};

if (process.client) {
  setValueInput(auth.getUserData);
}

const onSubmitUpdate = () => {
  if (updateValue.old_password == "" || updateValue.old_password == "" || updateValue.old_password == "") {
    delete updateValue.old_password;
    delete updateValue.password;
    delete updateValue.password_confirmation;
  }
  // update data
  auth.anyApiPost(updateValue, "profile/update", true, true).then(res => {
    if (res.status) {
      global.openAlert(res.message);
      auth.setUser(res.user);
      setTimeout(() => {
        // updateValue = {};
        global.closeAlert();
      }, 3000);
    } else {
      global.openAlert(res.message, "error");
      setTimeout(() => {
        global.closeAlert();
      }, 3000);
    }
  });
}; */
</script>
