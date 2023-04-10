<template>
  <section class="py-20 bg-hero overlay overflow-hidden">
    <div class="container mx-auto flex justify-center items-center relative z-10 h-full">
      <div class="w-1/2">
        <div class="flex flex-col justify-center">
          <h1 class="text-5xl font-bold text-white text-reflect">{{ $t("develop") }}</h1>
          <p class="text-2xl text-white font-medium mt-8 leading-10">{{ $t("description_site") }}</p>
        </div>
        <div class="flex items-center gap-x-10 w-full mt-20">
          <button
            type="button"
            class="text-white bg-fpOrange hover:bg-fpOrangeDark transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg px-5 py-2.5 block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
          >
            {{ $t("contact") }}
          </button>
          <button
            type="button"
            class="text-white bg-fpOrange hover:bg-fpOrangeDark transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg px-5 py-2.5 block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"
          >
            {{ $t("consultation") }}
          </button>
        </div>
      </div>
      <div class="w-1/2">
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_xRmNN8.json" background="transparent" speed="1" loop autoplay></lottie-player>
      </div>
    </div>
  </section>
</template>

<style>
[dir="rtl"] .rounded-bs-main {
  border-bottom-right-radius: 10rem;
}
[dir="ltr"] .rounded-bs-main {
  border-bottom-left-radius: 10rem;
}
.bg-hero {
  background: url("~/assets/images/home/hero.png") no-repeat;
  background-size: cover;
}
</style>
