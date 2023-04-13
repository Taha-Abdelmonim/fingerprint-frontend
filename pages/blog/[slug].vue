<template>
  <section class="blog">
    <BreadCrumbs :classes="'bg-breadcrumb put h-[450px] overlay text-white text-3xl'" :contents="['المقالات', 'اسم المقال']" />
    <section class="section-2 py-[100px] relative">
      <div class="container mx-auto">
        <div class="w-full sm:mt-20">
          <div class="">
            <div class="w-full mb-8 relative">
              <img src="~/assets/images/global/bg-any.png" alt="" class="w-full" />
              <span
                class="absolute sm:top-[-3rem] lg:top-[-2rem] start-0 rtl:translate-x-[50%] ltr:-translate-x-[50%] bg-fpOrange w-28 h-20 grid place-items-center text-white text-lg rounded-md sm:w-28 sm:h-12 sm:right-12"
                >2022-10-01
              </span>
            </div>
            <div class="text-gray-400 text-lg lg:text-xl mb-8">
              <img src="~/assets/images/global/avatar.jpg" alt="" class="w-10 h-10 rounded-full inline" /> طه عبدالمنعم &ThinSpace; | &ThinSpace;
              <Icon name="uil-comment-dots" class="text-3xl" /> <span>{{ $t("comments") }} (25)</span> &ThinSpace;
            </div>
            <h2 class="font-bold text-fpOrange text-xl lg:text-4xl sm:my-4 lg:mb-6">ازاي تبدا مشروعك</h2>
            <p class="text-gray-600 font-medium text-md lg:text-xl"><h1 class="ql-direction-rtl ql-align-center"><strong><u>4 أخطاء شائعة وانتي بتبدأي مشروعك</u></strong></h1><p class="ql-direction-rtl ql-align-right"><br></p><p class="ql-direction-rtl ql-align-right"><strong>أي صاحب مشروع أو مدير مشروع دايما بيغلط من غير إستثناء، بس غلطة عن غلطة تفرق، و الغلطات دايما بتكون أفضل آداة للتنبيه لوجود مشكلة، وفي نفس الوقت هي أفضل معلم.</strong></p><p class="ql-direction-rtl ql-align-right"><strong>بس الشاطرة مننا هي اللي تتعلم من غلطاتها و تستغلها لصالحها، عشان كدا في المقالة ديه هنقولك أكتر الغلطات الشائعة و انتي بتبدأي مشروعك</strong></p><p class="ql-direction-rtl ql-align-right"><br></p><p class="ql-direction-rtl ql-align-right"><strong style="color: rgb(255, 255, 255);">1- اختيار الشخص الغلط لإدارة المشروع</strong></p><p class="ql-direction-rtl ql-align-right"><br></p><p class="ql-direction-rtl ql-align-right"><strong>لو انتي مش عارفة ازاي تديري المشروع، الخيار الصح هو إنك تخلي شخص عنده خبرة يدير المشروع، بس هنا ممكن تكون الغلطة الشائعة والمتكررة هي إنك تختاري شخص مش مناسب إنه يدير المشروع بتاعك، وده مش معناه إنه مش مؤهل إدارياً بس، هو ممكن يكون مش قادر إنه يفهم السوق ده خصوصا لو هو سوق مش منتشر أو سوق فيه منافسة كبيرة زي سوق الهاندميد.</strong></p><p class="ql-direction-rtl ql-align-right"><br></p><p class="ql-direction-rtl ql-align-right"><br></p><p class="ql-direction-rtl ql-align-right"><strong style="color: rgb(255, 255, 255);">2- ضعف التواصل</strong></p><p class="ql-direction-rtl ql-align-right"><strong>التواصل هو العامل الأهم في إدارة المشاريع الناجحة، عشان كدة التواصل الفعال هو مفتاح النجاح في أي مشروع هو ازاي تتواصلي مع عملائك، وازاي بتتواصلي مع زباينك، والتواصل الفعال بيلعب دور مهم في نجاح مشروعك و ده عن طريق إنه بيضمن التوافق بين كل أعضاء الفريق، ف لوانتي خايفة على مشروعك من الإنهيار والفشل، فلازم تحددي طريقة مناسبة للتواصل وتكون واضحة، وتتواصلي مع أعضاء فريقك بانتظام، بحيث إن ده هيساعد على إنك تتجنبي الشعور بالإرتباك، وكمان ممكن تتجنبي الخلافات والأخطاء اللي تخلي المشروع يفشل ويكون ملوش فايدة.</strong></p><p class="ql-direction-rtl ql-align-right"><br></p><p class="ql-direction-rtl ql-align-right"><br></p><h4 class="ql-direction-rtl ql-align-right"><strong>3- قلة وقت التخطيط</strong></h4><p class="ql-direction-rtl ql-align-right"><strong>تعرفي إن 4 من كل 5 مشاريع بتفشل فشل ذريع بسرعة؟!!</strong></p><p class="ql-direction-rtl ql-align-right"><strong>دي حاجة تقلق بالذات لو عندنا مشروع خاص أو هنبدأ مشروعنا، ويخلينا نسأل "ليه ده بيحصل؟" الحقيقة هو فيه أسباب كتير زي اللي لسا ذاكرينها فوق، بس السبب الأكبر و الأهم هو قلة وقت التخطيط، قلة وقت التخطيط والإستعجال هو واحد من أخطر الغلطات اللي من الممكن أنها تحصل للمشروع.</strong></p><p class="ql-direction-rtl ql-align-right"><strong>&nbsp;</strong></p><p class="ql-direction-rtl ql-align-right"><strong>واللي لو مقدرناش نعالجها بسرعة وبصورة صحيحة، ف ده هيودينا دايما لاتجاه فشل المشروع، حتى ممكن قبل ما يبدأ يجيب أي أرباح.</strong></p><p class="ql-direction-rtl ql-align-right"><strong>وممكن نحل المشكلة ديه عن طريق إننا ندي كل حاجة حقها سواء تخطيط أو حل المشاكل اللي بنواجهها.</strong></p><p class="ql-direction-rtl ql-align-right"><br></p><h4 class="ql-direction-rtl ql-align-right"><strong>4- تجاهل رضا العميل</strong></h4><p class="ql-direction-rtl ql-align-right"><strong>مستوى رضا العملاء الداخليين والخارجيين بيكون هو أهم مُحدد لنجاح أوفشل المشروع؛ بحيث أن رضا العميل هو مقياس النجاح الأساسي، عشان كدا لازم دايماً تحافظي على حماسة العملاء ناحية المشروع بتاعك عن طريق عمل اجتماعات منتظمة معاهم، و بالطريقة ديه تقدري إنك تحطي أي حاجة يعوزها عميلك في كل مرحلة من مراحل المشروع، وده اللي هيقلل من عدم رضا العملاء ويقربنا كتير من توقعات أغلب العملاء بتوعنا.</strong></p><p class="ql-direction-rtl ql-align-right"><strong>&nbsp;</strong></p><p class="ql-direction-rtl ql-align-right"><strong>كمان لازم تعرّفي العملاء كلهم على آخر مستجدات المشروع، وحتى لو كان فيه مشكلة في المشروع، لازم تبلغي عملائك بطريقة مباشرة، وده عشان ضمان الشفافية وتسهيل تغيير الخطة لو حصل أي مشاكل، وده عشان نقلل من تأثير حصول أي غلطات في أثناء المشروع.</strong></p><p><br></p></p>
          </div>
          <div class="mt-10">
            <h5 class="mb-6 text-3xl">{{ $t("section") }}: <span class="text-3xl font-medium text-fpOrange">مواقع</span></h5>
            <hr />
          </div>
          <div class="space-y-20">
            <h6 class="mt-16 mb-10 text-2xl text-gray-700">{{ $t("comments") }} (25)</h6>
            <div class="flex lg:items-center sm:flex-col sm:justify-center">
              <div class="lg:h-40 rounded-full sm:flex sm:h-fit items-center">
                <!-- {{ comment.user_image }} -->
                <img
                  src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png"
                  alt=""
                  class="sm:mb-4 object-cover w-10 lg:w-20 h-10 lg:h-20 rounded-full inline lg:mx-auto"
                />

                <!-- <img
                  v-if="!Object.keys(comment.user_image).length == 0"
                  :src="comment.user_image"
                  alt=""
                  class="sm:mb-4 object-cover w-10 lg:w-20 h-10 lg:h-20 rounded-full inline lg:mx-auto"
                /> -->
                <span class="sm:mr-6 text-gray-600 lg:block">احمد علي</span> <span class="text-gray-400">2000-10-01</span>
              </div>
              <div class="lg:ms-8 sm:text-center">
                <p class="lg:w-5/6 text-gray-600 text-xl font-medium">
                  {{ $t("lorem") }}
                </p>
                <a href="#replay" class="text-fpOrange mt-2 text-xl font-normal flex items-center sm:justify-center">
                  رد
                  <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
                    <path
                      d="M3.75 13H16.25C21.7728 13 26.25 17.1787 26.25 22.3333V24.6667M3.75 13L11.25 20M3.75 13L11.25 6"
                      stroke="#489D33"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form class="mt-24" id="replay">
            <b class="font-medium text-3xl text-fpOrange">{{ $t("leave_response_post") }}</b>
            <div class="w-full mt-10 mb-6">
              <div class="relative">
                <label for="message" class="mt-8 text-gray-500 mb-10 block sm:text-sm">{{ $t("approve_admin_comment") }}</label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-gray-200 bg-opacity-40 rounded focus:bg-[#e5e7eb99] h-52 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              class="mt-16 sm:mx-auto block text-2xl font-normal hover:border-fpOrange border-2 border-white rounded-md py-4 px-14 hover:text-fpOrange cursor-pointer bg-fpOrange text-white transition hover:bg-transparent"
            >
              {{ $t("add_comment") }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- <div class="sharethis-inline-share-buttons"></div> -->
  </section>
</template>
