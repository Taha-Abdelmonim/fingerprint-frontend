<template>
  <section class="md:pb-[100px] sm:mb-20 relative">
    <BreadCrumbs :classes="'bg-breadcrumb put h-[450px] overlay text-white text-3xl'" :contents="[$t('blog')]" />
    <!--  | &ThinSpace; <Icon name="mingcute-share-2-line" class="text-3xl" /> مشاركة -->
    <div class="container mx-auto flex gap-x-20 sm:flex-col-reverse sm:items-center mt-20">
      <div class="md:w-3/4 space-y-20">
        <div>
          <div class="w-full mb-8 relative">
            <NuxtLink :to="`/blog/web`">
              <img src="~/assets/images/global/bg-any.png" alt="" class="w-full md:h-[400px]" />
            </NuxtLink>
            <span
              class="absolute sm:top-[-3rem] md:top-[-2rem] start-0 rtl:translate-x-[50%] ltr:-translate-x-[50%] bg-fpOrange w-28 h-20 grid place-items-center text-white text-lg rounded-md sm:w-28 sm:h-12 sm:right-12"
              >2022-10-01
            </span>
          </div>

          <div class="text-gray-400 text-lg md:text-xl mb-8">
            <img src="~/assets/images/global/avatar.jpg" alt="" class="w-10 h-10 rounded-full inline" /> طه عبدالمنعم &ThinSpace; | &ThinSpace;
            <Icon name="uil-comment-dots" class="text-3xl" /> <span>{{ $t("comments") }} (25)</span> &ThinSpace;
          </div>
          <NuxtLink :to="`/blogs`" class="font-bold text-fpOrange text-xl md:text-4xl sm:my-4 md:mb-6 block hover:text-white transition"> ازاي تبدا مشروعك </NuxtLink>
          <p class="text-gray-600 w-5/6">
            {{ $t("lorem") }}
          </p>
          <button
            class="button-arrow-evect leading-none relative bg-fpOrange hover:bg-fpOrangeDark transition py-1 px-4 text-base font-normal text-white rounded-md whitespace-nowrap flex items-center mt-10"
          >
            <NuxtLink to="`/blogs`" class="ml-2 text-3xl">{{ $t("read_more") }}</NuxtLink>
            <Icon name="ic-outline-arrow-back" class="text-3xl arrow-animate" />
          </button>
        </div>
      </div>
      <div class="md:w-1/4 sm:mt-16 md:ml-auto">
        <div class="relative">
          <div class="relative h-fit">
            <input
              id="posts-search"
              type="text"
              :placeholder="$t('search')"
              class="focus:outline-none bg-gray-200 focus:bg-gray-100 rounded-e-xl p-6 py-2 font-light text-xl w-full"
            />
            <Icon name="ic-baseline-search" class="absolute bg-fpOrange w-10 h-full end-0 top-0 grid place-items-center text-4xl text-white rounded-e-lg" />
          </div>
          <div
            v-if="false"
            id="dropdown"
            class="z-10 bg-white divide-y divide-gray-100 rounded w-full dark:bg-gray-700 absolute top-20 inset-x-0 shadow-lg max-h-[200px] overflow-y-auto"
          >
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200 divide-y-2" aria-labelledby="dropdown-button">
              <li>
                <NuxtLink :to="`/blogs`" type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> اسم المقال </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-10">
          <h2
            class="text-fpOrange font-medium text-3xl lg:text-4xl pb-6 relative after:content-[''] after:absolute after:w-1/2 after:h-2 after:bg-fpOrange after:start-0 after:bottom-0 after:translate-y-[50%]"
          >
            {{ $t("sections") }}
          </h2>
          <hr />
        </div>
        <div class="mt-8 space-y-2">
          <div class="flex justify-between font-medium text-gray-600 text-lg">
            <label for="`checkbox_1`">مواقع</label>
            <input type="checkbox" id="`checkbox_1`" name="checkbox" value="1" class="w-6 h-6" />
          </div>
        </div>
        <div class="mt-10">
          <h2
            class="text-fpOrange font-medium text-3xl lg:text-4xl pb-6 relative after:content-[''] after:absolute after:w-1/2 after:h-2 after:bg-fpOrange after:start-0 after:bottom-0 after:translate-y-[50%]"
          >
            {{ $t("more_see") }}
          </h2>
          <hr />
        </div>
        <div class="mt-16 sm:mb-20 space-y-10 overflow-y-scroll sm:max-h-[500px] md:max-h-[700px] w-full no-scroll sm:shadow-md md:shadow-lg">
          <div class="flex items-center w-full">
            <NuxtLink :to="`/blogs`" class="block me-4 w-[40%] h-full">
              <img src="~/assets/images/global/bg-any.png" alt="" class="me-6 object-cover" />
            </NuxtLink>
            <div class="w-[60%]">
              <NuxtLink :to="`/blogs`" class="text-fpOrange text-xl md:text-xl font-bold block mb-1">اسم المقال</NuxtLink>
              <Icon name="ic-outline-edit-calendar" class="text-gray-400 text-xl" /> <span class="text-fpOrange me-4">2022-10-01</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="mt-32">
      <div class="flex container gap-x-6 ml-24">
        <button
          :disabled="posts.getPages.prev_page_url == null"
          @click="posts.getApiPosts(0, posts.getPages.prev_page_url)"
          type="button"
          class="hover-button"
          :class="[posts.getPages.prev_page_url == null ? 'disabled' : '']"
        >
          <Icon name="ic-round-arrow-forward-ios" class="text-2xl -mr-3" />
        </button>
        <button
          v-for="i in Math.round(posts.getPages.total / posts.getPages.per_page)"
          @click="posts.getApiPosts(0, `/?page=${i}`)"
          :class="`hover-button font-medium text-2xl text-fpOrange ${posts.getPages.current_page == i ? 'active-button-page' : ''}`"
        >
          {{ i }}
        </button>
        <button
          :disabled="posts.getPages.next_page_url == null"
          @click="posts.getApiPosts(0, posts.getPages.next_page_url)"
          type="button"
          class="hover-button"
          :class="[posts.getPages.next_page_url == null ? 'disabled' : '']"
        >
          <Icon name="ic-baseline-arrow-back-ios" class="text-2xl -mr-3" />
        </button>
      </div>
    </div> -->
  </section>
</template>
<script setup></script>
