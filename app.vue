<template>
  <Html :lang="currentLocale">
    <Body :dir="dir" class="dark:bg-gray-800">
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
