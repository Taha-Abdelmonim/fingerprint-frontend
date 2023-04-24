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
} else {
  let post = ref([]);
  let read = "";
    if (route.query.read == "true") {
      read = "?read=true";
    }
  await $fetch(`${useRuntimeConfig().public.apiURL}/post/${route.params.slug}${read}`, {
      method: "POST",
      
    }).then(res => {
      post.value = res.data;
      res = res.data;
      useHead({
        script: [{ type: "text/javascript", src: "https://platform-api.sharethis.com/js/sharethis.js#property=644546f57ac381001a304474&product=sticky-share-buttons&source=platform", async: "async"}],
        title: currentLocale.value == "ar" ? res.name_ar : res.name_en,
        meta: [
          {name: "title", content: currentLocale.value == 'ar' ? res.name_ar : res.name_en},
          {name: "description", content: currentLocale.value == 'ar' ? res.description_ar : res.description_en},
          // facebook   
          {property: "article:publisher", content: "https://www.facebook.com/fingerprintmedia1"},
          {property: "og:locale", content: currentLocale.value},
          {property: "og:type", content: "article"},
          {property: "og:url", content: `${baseURL}/blog/${res.slug}`},
          {property: "og:title", content: currentLocale.value == 'ar' ? res.name_ar : res.name_en},
          {property: "og:description", content: currentLocale.value == 'ar' ? res.description_ar : res.description_en},
          {property: "og:image", content: `${baseURL}/images/${res.photo}`},
          {property: "og:site_name", content: t("fingerprint")},
          {property: "og:alt", content: currentLocale.value == 'ar' ? res.name_ar : res.name_en},
          // Twitter
          {property: "twitter:card", content: "summary_large_image"},
          {property: "twitter:url", content: `${baseURL}/blog/${res.slug}`},
          {property: "twitter:title", content: currentLocale.value == 'ar' ? res.name_ar : res.name_en},
          {property: "twitter:description", content: currentLocale.value == 'ar' ? res.description_ar : res.description_en},
          {property: "twitter:type", content: "article"},
          {property: "twitter:image", content: `${baseURL}/images/${res.slug}`},
          {property: "twitter:site", content: t("fingerprint")},
          {property: "twitter:site_name", content: t("fingerprint")},
          {property: "twitter:alt", content: currentLocale.value == 'ar' ? res.name_ar : res.name_en},
        ],
        
      });
    });
}
</script>
