<template>
  <div class="md:w-3/12 bg-fpBlueDark/10 p-10 rounded-lg sm:mb-10">
    <div class="">
      <div class="w-fit mx-auto relative">
        <Icon name="ic-outline-edit" class="text-2xl absolute bottom-0 -right-2 cursor-pointer" />
        <form>
          <input type="file" hidden id="image" accept="image/*" />
        </form>
        <!--  <img
          src="~/assets/images/global/bg-any.png"
          id="photo-user"
          class="object-cover rounded-full shadow-xl outline outline-4 outline-offset-2 outline-gray-200 block mx-auto w-[100px] h-[100px]"
        /> -->
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUS8TjFE3RRsUZV9JietSrxIY8xke14UuulctZGjudNedC9oVgaJhQK9AE2nM8IXSXvls&usqp=CAU"
          alt=""
          class="rounded-full shadow-xl outline outline-4 outline-offset-2 outline-gray-200 block mx-auto w-[100px] h-[100px]"
        />
      </div>
    </div>
    <h2 class="text-fpBlueDark text-3xl text-center font-bold my-6 whitespace-nowrap">طه عبدالمنعم</h2>
    <NuxtLink to="/profile" class="account-link bg-fpBlueDark/10 text-fpBlueDark flex items-center p-4 text-xl rounded-lg cursor-pointer hover:text-fpBlue whitespace-nowrap">
      <Icon name="ri:user-3-fill" class="ml-4" />{{ $t("profile") }}
    </NuxtLink>

    <a>
      <div class="my-6">
        <button
          class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-fpOrange border border-transparent rounded-lg active:bg-main_color_hover_2 hover:bg-main_color_hover_2 focus:outline-none focus:shadow-outline-purple"
        >
          {{ $t("logout") }}
        </button>
      </div>
    </a>
  </div>
</template>
