<template>
  <Html :lang="currentLocale">
    <Body :dir="dir" class="dark:bg-gray-900">
      <ButtonUp />
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <!-- <Loading /> -->
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup>
const {currentLocale, dir} = useLang();
</script>
