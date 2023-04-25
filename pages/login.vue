<template>
  <BreadCrumbs :classes="' dark:text-fpLightBack'" :contents="[$t('login')]" />
  <section class="bg-fpBlueDark/10 pt-10 pb-40">
    <div
      class="sm:pb-10 sm:mx-3 mx-auto lg:w-[1200px] flex flex-col-reverse lg:flex-row justify-center lg:items-center gap-x-10 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-xl p-0"
    >
      <div class="lg:w-1/2 lg:ps-4 lg:ms-28 sm:px-4">
        <h1 class="sm:mt-4 font-bold text-center text-3xl lg:text-5xl text-fpBlueDark dark:text-fpOrange mb-10">{{ $t("welcome_back") }}</h1>
        <form @submit.prevent="submitUserLogin" @keydown="errors.clear($event.target.name)" method="post">
          <div class="mb-6">
            <label for="success" class="block mb-2 text-sm lg:text-md font-medium text-gray-700 dark:text-gray-300">{{ $t("email_user") }}</label>
            <input
              type="email"
              class="bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border"
              placeholder="name@example.com"
              required
              v-model="login.email"
            />
            <!-- <p class="mt-2 text-sm text-red-500"><span class="font-medium">Well done!</span> Some success message.</p> -->
          </div>
          <div class="mb-6">
            <label for="success" class="block mb-4 text-sm lg:text-md font-medium text-gray-700 dark:text-gray-300">{{ $t("password_user") }}</label>
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
                v-model="login.password"
                :class="errors.has('password') ? 'is-invalid' : ''"
                required
              />
            </div>
            <p v-if="errors.has('password')" class="mt-2 text-sm text-red-500">{{ errors.get("password") }}</p>
          </div>
          <a href="http://wa.me/201090844348" target="_blank" class="text-red-500">{{ $t("forgot_password") }}</a>
          <button
            type="submit"
            class="text-fpBlueDark bg-fpOrange hover:bg-fpOrange/90 transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg lg:text-2xl mt-6 px-4 lg:px-10 py-2 lg:py-3 mx-auto block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
          >
            {{ $t("login") }}
          </button>

          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <input
                checked
                id="green-checkbox"
                type="checkbox"
                value=""
                class="w-6 h-6 cursor-pointer text-green-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-900 dark:appearance-none"
              />
              <label for="green-checkbox" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300 cursor-pointer select-none">{{ $t("remember") }}</label>
            </div>
            <a href="#" class="text-red-500">{{ $t("forgot_password") }}</a>
          </div>
          <div class="flex items-center justify-center mt-10">
            <span class="w-20 h-1.5 bg-fpBlueDark rounded-full mt-1 me-4"></span>
            <p class="text-fpBlueDark font-bold text-xl lg:text-3xl">{{ $t("or_register_from") }}</p>
            <span class="w-20 h-1.5 bg-fpBlueDark rounded-full mt-1 ms-4"></span>
          </div>
          <div class="flex flex-col lg:flex-row sm:gap-y-4 items-center justify-between mt-10">
            <div id="googleButton"></div>
            <br />
            <fb:login-button
              class="fb-login-button md:mr-2"
              data-width=""
              data-size="large"
              data-button-type="login_with"
              data-layout="default"
              data-auto-logout-link="false"
              data-use-continue-as="true"
              scope="public_profile,email"
              onlogin="checkLoginState()"
            ></fb:login-button>
          </div>
          <div class="text-md lg:text-xl mt-5 lg:mt-10">
            <span class="dark:text-gray-300">{{ $t("dont_account") }}</span>
            <nuxt-link :to="localePath(`/register`)" class="text-fpBlueDark dark:text-fpOrange font-bold ms-1">{{ $t("new_account") }}</nuxt-link>
          </div>
        </form>
      </div>
      <div class="lg:w-1/2 max-h-full">
        <img src="~/assets/images/login_small.png" alt="Login" class="object-cover ms-auto" />
      </div>
    </div>
  </section>
</template>
<script setup>
import {useAuthStore} from "@/store/AuthStore";
import {useTostStore} from "@/store/TostStore";
const {currentLocale, dir} = useLang();
const errors = reactive(useErrors());
let togglePassword = ref(false);
const apiUrl = useRuntimeConfig().public.apiURL + "/auth";
const auth = useAuthStore();
const tost = useTostStore();
const {t} = useI18n();
useHead({
  title: t("login"),
  meta: [{name: "title", content: t("login")}],
});
if (process.client && localStorage.getItem("user") != null) {
  navigateTo("/");
}

// console.log(auth.isLoggedIn);
let login = reactive({
  email: "",
  password: "",
});
// taha@taha.com
// 123456789
let user = reactive({
  id: "",
  oauth_type: "",
  name: "",
  email: "",
  photo: null,
});

async function submitUserLogin() {
  await useAsyncData("login", () =>
    $fetch(`${apiUrl}/login`, {
      method: "POST",
      body: {locale: currentLocale.value, ...login},
    }).then(res => {
      if (res.status) {
        auth.setUser(res.user);
        tost.add({
          type: "success",
          message: currentLocale.value == "ar" ? `مرحبًا بعودتك ${res.user.name}` : `Welcome back ${res.user.name}`,
        });
        navigateTo("/");
      } else {
        if (res.errCode == 422) {
          errors.record({password: res.message});
        }
        tost.add({
          type: "error",
          message: res.message,
        });
      }
    })
  );
}

async function onResponceLoginSocial() {
  await useAsyncData("socialLogin", () =>
    $fetch(`${apiUrl}/socialLogin`, {
      method: "POST",
      body: {locale: currentLocale.value, ...user},
    }).then(res => {
      if (res.status) {
        auth.setUser(res.user);
        tost.add({
          type: "success",
          message: currentLocale.value == "ar" ? `مرحبًا بعودتك ${res.user.name}` : `Welcome back ${res.user.name}`,
        });
        navigateTo("/");
      } else {
        if (res.errCode == 422) {
          errors.record({password: res.message});
        }
        tost.add({
          type: "error",
          message: res.message,
        });
      }
    })
  );
}
const returnDataGoogle = credential => {
  const res = fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`).then(res => {
    return res.json();
  });
  res.then(res => {
    user.id = res.sub;
    user.oauth_type = "google";
    user.name = res.name;
    user.email = res.email;
    user.photo = res.picture;
    onResponceLoginSocial();
  });
};
onMounted(() => {
  function handleCredentialResponse(response) {
    returnDataGoogle(response.credential);
  }
  google.accounts.id.initialize({
    client_id: "309314815545-qi9o7jvgj7k5ok4kfonlcguauptadasg.apps.googleusercontent.com",
    callback: handleCredentialResponse, //method to run after user clicks the Google sign in button
  });
  google.accounts.id.renderButton(document.getElementById("googleButton"), {theme: "outline", size: "large"});
  //google.accounts.id.prompt(); // also display the One Tap dialog

  // ==================================== facebook ==================================================================
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v15.0&appId=177495175205619&autoLogAppEvents=1";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
  window.checkLoginState = function () {
    FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });
  };

  function statusChangeCallback(response) {
    if (response.status === "connected") {
      testAPI(response.authResponse);
    }
  }

  window.fbAsyncInit = function () {
    FB.init({
      appId: "177495175205619",
      cookie: true,
      xfbml: true,
      version: "v15.0",
    });
  };

  function testAPI(resInfoUser) {
    FB.api(`/${resInfoUser.userID}?fields=id,name,email,picture&access_token=${resInfoUser.accessToken}`, function (response) {
      user.id = response.id;
      user.oauth_type = "facebook";
      user.name = response.name;
      user.email = response.email;
      user.photo = response.picture.data.url;
      onResponceLoginSocial();
    });
    /* FB.api("/me", function (response) {
      }); */
  }
});
</script>
