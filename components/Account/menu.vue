<template>
  <div class="md:w-3/12 bg-fpBlueDark/10 dark:bg-gray-800 p-10 rounded-lg sm:mb-10">
    <div class="">
      <div class="w-fit mx-auto relative">
        <Icon name="ic-outline-edit" class="text-2xl absolute bottom-0 -right-2 cursor-pointer dark:text-fpOrange" @click="showInputImage()" />
        <input type="file" hidden id="image" @change="e => getImage(e)" accept="image/*" />
        <img
          v-if="auth.user.photo"
          :src="auth.user.oauth_type == null ? `${baseURL}/images/${auth.user.photo}` : `${auth.user.photo}`"
          alt="user photo"
          id="photo-user"
          class="object-cover rounded-full shadow-xl outline outline-4 outline-offset-2 outline-gray-200 block mx-auto w-[100px] h-[100px]"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUS8TjFE3RRsUZV9JietSrxIY8xke14UuulctZGjudNedC9oVgaJhQK9AE2nM8IXSXvls&usqp=CAU"
          v-if="!auth.user.photo"
          alt="user photo"
          class="rounded-full shadow-xl outline outline-4 outline-offset-2 outline-gray-200 block mx-auto w-[100px] h-[100px]"
        />
      </div>
    </div>
    <h2 class="text-fpBlueDark dark:text-fpOrange text-3xl text-center font-bold my-6 whitespace-nowrap" v-text="auth.user.name"></h2>
    <NuxtLink
      to="/profile"
      class="account-link bg-fpBlueDark/10 text-fpBlueDark dark:text-fpOrange flex items-center p-4 text-xl rounded-lg cursor-pointer hover:text-fpBlue whitespace-nowrap"
    >
      <Icon name="ri:user-3-fill" class="ml-4" />{{ $t("profile") }}
    </NuxtLink>

    <a>
      <div class="my-6">
        <button
          class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-fpOrange border border-transparent rounded-lg active:bg-main_color_hover_2 hover:bg-main_color_hover_2 focus:outline-none focus:shadow-outline-purple"
          @click="logoutUser()"
        >
          {{ $t("logout") }}
        </button>
      </div>
    </a>
  </div>
</template>
<script setup>
import {useAuthStore} from "@/store/AuthStore";
import {useTostStore} from "@/store/TostStore";
const auth = useAuthStore();
const tost = useTostStore();
const {currentLocale, dir} = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const apiURL = useRuntimeConfig().public.apiURL;
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
const showInputImage = () => {
  document.getElementById("image").click();
};
const getImage = async e => {
  const file = e.target.files[0];
  if (!file) return;
  let formData = new FormData();
  formData.append("photo", file);
  // update image
  await useAsyncData("updateImage", () =>
    $fetch(`${apiURL}/auth/updateImage`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      body: formData,
    }).then(res => {
      if (res.status) {
        auth.setUser(res.user);
        document.getElementById("photo-user").src = res.user.photo;
        tost.add({
          type: "success",
          message: currentLocale.value == "ar" ? "تم تحديث صورتك بنجاح" : `success update your image`,
        });
      } else {
        console.log(res);
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
    })
  );
};
</script>
