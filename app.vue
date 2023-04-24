<template>
  <Html :lang="currentLocale">
    <Body :dir="dir" class="dark:bg-gray-900">
      <ButtonUp />
      <NuxtLoadingIndicator />
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
      <NuxtLayout>
        <Loading />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup>
const {currentLocale, dir} = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const {t} = useI18n();
const route = useRoute();
if (route.fullPath.slice(1, 5) != "blog") {
  useHead({
    meta: [
      // global
      {charset: "utf-8"},
      {name: "description", content: t("meta_description")},
      {name: "keywords", content: t("meta_keywords")},
      {name: "author", content: t("fingerprint")},
      {name: "geo.placename", content: "مدينة نصر"},
      {name: "geo.region", content: "مصر"},
      // facebook
      {property: "article:publisher", content: "https://www.facebook.com/fingerprintmedia1"},
      {property: "og:type", content: "website"},
      {property: "og:url", content: "https://fingerprintm.com/"},
      {property: "og:title", content: t("fingerprint")},
      {property: "og:description", content: t("meta_description")},
      {property: "og:image", content: `${baseURL}/images/bg-logo.png`},
      {property: "og:site_name", content: t("fingerprint")},
      {property: "og:alt", content: t("fingerprint")},
      // Twitter
      {property: "twitter:card", content: "summary_large_image"},
      {property: "twitter:url", content: "https://fingerprintm.com/"},
      {property: "twitter:title", content: t("fingerprint")},
      {property: "twitter:description", content: t("meta_description")},
      {property: "twitter:type", content: "website"},
      {property: "twitter:image", content: `${baseURL}/images/bg-logo.png`},
      {property: "twitter:site", content: "fingerprintm1"},
      {property: "twitter:site_name", content: t("fingerprint")},
      {property: "twitter:alt", content: t("fingerprint")},
    ],
  });
}
if (process.client) {
  // facebook
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v15.0&appId=517999570183481&autoLogAppEvents=1";
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
      appId: "1229977241051676",
      cookie: true,
      xfbml: true,
      version: "v16.0",
    });

    /* FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    }); */
  };

  function testAPI(resInfoUser) {
    FB.api(`/${resInfoUser.userID}?fields=id,name,email,picture&access_token=${resInfoUser.accessToken}`, function (response) {
      console.log(response);
    });
  }
}
</script>
