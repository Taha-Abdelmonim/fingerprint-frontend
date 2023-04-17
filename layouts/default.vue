<template>
  <div class="">
    <TopTopHeader />
    <Header />
    <slot />
    <Footer />
    <NotificationContainer />
  </div>
</template>
<script setup>
const {t} = useI18n();
useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? `${t("fingerprint")} | ${titleChunk}` : `${t("home")}`;
  },
});
</script>
