<template>
  <BreadCrumbs :classes="'bg-breadcrumb put text-white dark:text-fpLightBack'" :contents="[$t('services'), $t(`service_${route.params.slug}`)]" />
  <section class="bg-fpBlueDark/10 pb-40">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-20">
        <div v-for="project in projects" :key="project.id" class="shadow-xl pb-10 bg-white dark:bg-gray-800 flex flex-col h-full rounded-3xl overflow-hidden">
          <a :href="route.params.slug == 'video' ? `${baseURL}/images/${project.video}` : project.url" target="_blank" class="h-72">
            <img v-if="project.photo" :src="`${baseURL}/images/${project.photo}`" alt="project image" class="w-full h-full object-cover" />
            <img v-else src="~/assets/images/home/hero.png" alt="project image" class="w-full h-full object-cover" />
          </a>

          <div class="px-6">
            <div class="">
              <a
                :href="project.url"
                target="_blank"
                class="text-xl font-bold mt-6 block hover:text-fpBlueDark dark:text-fpOrange dark:hover:text-fpBlue"
                v-text="currentLocale == 'ar' ? project.name_ar : project.name_en"
              ></a>
              <p class="block text-gray-600 mt-2 mb-4 dark:text-gray-300" v-html="currentLocale == 'ar' ? project.description_ar : project.description_en"></p>
            </div>
          </div>
          <div class="flex justify-between items-center px-6">
            <a
              :href="project.url"
              target="_blank"
              class="arro-hover mx-auto leading-none relative bg-main_color_2 bg-fpOrangeDark hover:bg-fpOrange transition pt-1 pb-2 px-4 text-base font-normal text-white rounded-md whitespace-nowrap flex items-center mt-4"
            >
              <Icon class="text-3xl -mb-1" name="ic-outline-arrow-forward" />
              <span class="me-2 text-3xl"> {{ $t("see_project") }} </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const route = useRoute();
const baseURL = useRuntimeConfig().public.baseURL;
const {currentLocale, dir} = useLang();
const {t} = useI18n();
useHead({
  title: t(`service_${route.params.slug}`),
  meta: [{name: "title", content: t(`service_${route.params.slug}`)}],
});
let projects = ref([]);

const getSection = async () => {
  try {
    await $fetch(`${useRuntimeConfig().public.apiURL}/section/${route.params.slug}`).then(res => {
      projects.value = res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
getSection();
</script>

<style></style>
