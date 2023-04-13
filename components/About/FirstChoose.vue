<template>
  <section class="py-8 lg:py-24">
    <div class="container mx-auto">
      <h2 class="text-lg lg:text-5xl text-fpBlueDark font-bold border-b-2 border-fpOrange w-fit mx-auto pb-2 lg:pb-6">{{ $t("first_choose") }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:mt-24">
        <div class="bg-fpBlueDark/10 p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-xl">
          <div class="bg-white rounded-full w-40 h-40 flex justify-center items-center">
            <img src="~/assets/images/home/comment.svg" alt="" class="w-28" />
          </div>
          <b class="text-fpBlue text-2xl mt-2">{{ $t("speak") }}</b>
          <p class="text-fpBlue text-md mt-2 font-medium">{{ $t("desc_speak") }}</p>
        </div>
        <div class="bg-fpBlueDark/10 p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-xl">
          <div class="bg-white rounded-full w-40 h-40 flex justify-center items-center">
            <img src="~/assets/images/home/man.svg" alt="" class="w-24" />
          </div>
          <b class="text-fpBlue text-2xl mt-2">{{ $t("we_value") }}</b>
          <p class="text-fpBlue text-md mt-2 font-medium">{{ $t("desc_value") }}</p>
        </div>
        <div class="bg-fpBlueDark/10 p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-xl">
          <div class="bg-white rounded-full w-40 h-40 flex justify-center items-center">
            <img src="~/assets/images/home/seo.svg" alt="" class="w-20" />
          </div>
          <b class="text-fpBlue text-2xl mt-2">{{ $t("service_seo") }}</b>
          <p class="text-fpBlue text-md mt-2 font-medium">{{ $t("desc_seo") }}</p>
        </div>
        <div class="bg-fpBlueDark/10 p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-xl">
          <div class="bg-white rounded-full w-40 h-40 flex justify-center items-center">
            <img src="~/assets/images/home/idea.svg" alt="" class="w-32" />
          </div>
          <b class="text-fpBlue text-2xl mt-2">{{ $t("we_idea") }}</b>
          <p class="text-fpBlue text-md mt-2 font-medium">{{ $t("desc_idea") }}</p>
        </div>
        <div class="bg-fpBlueDark/10 p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-xl">
          <div class="bg-white rounded-full w-40 h-40 flex justify-center items-center">
            <img src="~/assets/images/home/analysis.svg" alt="" class="w-20" />
          </div>
          <b class="text-fpBlue text-2xl mt-2">{{ $t("we_time") }}</b>
          <p class="text-fpBlue text-md mt-2 font-medium">{{ $t("desc_time") }}</p>
        </div>
        <div class="bg-fpBlueDark/10 p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-xl">
          <div class="bg-white rounded-full w-40 h-40 flex justify-center items-center -mt-5">
            <img src="~/assets/images/home/after_servicec.svg" alt="" />
          </div>
          <b class="text-fpBlue text-2xl mt-2">{{ $t("after_secvices") }}</b>
          <p class="text-fpBlue text-md mt-2 font-medium">{{ $t("desc_speak") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
