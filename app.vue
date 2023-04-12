<template>
  <Html :lang="currentLocale">
    <Body :dir="dir" class="">
      <ButtonUp />
      <NuxtLayout>
        <!-- <NuxtLoadingIndicator /> -->
        <!-- <Loading /> -->
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup>
const {currentLocale, dir} = useLang();
</script>
