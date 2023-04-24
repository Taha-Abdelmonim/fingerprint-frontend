<template>
  <Html :lang="currentLocale">
    <Body :dir="dir" class="dark:bg-gray-900">
      <ButtonUp />
      <NuxtLoadingIndicator />

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
</script>
