import{_ as D,u as O}from"./BreadCrumbs.621b689c.js";import{A as U,B as k,y as C,k as V,r as L,l as S,h as i,m as f,p as t,t as r,G as q,u as e,w as g,H as _,s as c,I as p,q as R,L as T,D as j,F as N,x as A,o as u,C as I,J as M}from"./entry.92606d73.js";import{_ as P}from"./nuxt-link.2340e45d.js";import{u as E}from"./useError.7f6d451d.js";import{_ as F}from"./login_small.4e47bdb3.js";import{u as H}from"./AuthStore.254bcb86.js";import{u as z}from"./TostStore.5a642af5.js";const G=""+new URL("login.bbb86259.png",import.meta.url).href,J=G,K={class:"bg-fpBlueDark/10 pt-8 pb-20 lg:pb-40"},Q={class:"sm:py-10 sm:mx-3 mx-auto lg:w-[1200px] flex flex-col-reverse lg:flex-row justify-center lg:items-center gap-x-10 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl p-0 lg:h-[80vh]"},W={class:"lg:w-1/2 lg:ps-4 lg:ms-28 sm:px-4"},X={class:"font-bold text-center text-3xl lg:text-5xl text-fpBlueDark dark:text-fpOrange mb-10"},Y=["onSubmit"],Z={class:"mb-6"},ee={for:"name",class:"block mb-2 text-sm lg:text-md font-medium text-gray-700 dark:text-gray-300"},te=["placeholder"],se={key:0,class:"mt-2 text-sm text-red-500"},oe={class:"mb-6"},ae={for:"phone",class:"block mb-2 text-sm lg:text-md font-medium text-gray-700 dark:text-gray-300"},re={key:0,class:"mt-2 text-sm text-red-500"},le={class:"mb-6"},ne={for:"success",class:"block mb-2 text-sm lg:text-md font-medium text-gray-700 dark:text-gray-300"},de={key:0,class:"mt-2 text-sm text-red-500"},ie={class:"mb-6"},ce={for:"success",class:"block mb-2 text-sm lg:text-md font-medium text-gray-700 dark:text-gray-300"},ue={class:"relative"},me=["type"],ge={key:0,class:"mt-2 text-sm text-red-500"},pe={type:"submit",class:"text-fpBlueDark bg-fpOrange hover:bg-fpOrange/90 transition-colors focus:ring-4 focus:ring-fpOrange font-bold rounded-lg text-lg lg:text-2xl mt-6 px-4 lg:px-10 py-2 lg:py-3 mx-auto block dark:bg-fpOrange dark:hover:bg-fpOrange focus:outline-none dark:focus:ring-fpOrange"},he={class:"text-md lg:text-xl mt-5 lg:mt-10"},fe={class:"dark:text-gray-300"},_e=t("div",{class:"lg:w-1/2 max-h-full"},[t("picture",{class:"sm:hidden"},[t("source",{media:"(max-width: 1024px)",srcset:J,class:"object-cover"}),t("img",{src:F,alt:"Login",class:"object-cover h-[80vh] ms-auto"})])],-1),Oe={__name:"register",setup(be){const v=U().public.apiURL+"/auth",o=k(E()),{currentLocale:b,dir:xe}=C(),w=H(),x=z(),{t:y}=V();let d=L(!1);S({title:y("new_account"),meta:[{name:"title",content:y("new_account")}]});let n=k({name:"",phone:"",email:"",password:""});async function $(){try{await O("register",()=>$fetch(`${v}/register`,{method:"POST",body:{locale:b.value,...n}}).then(s=>{if(s.status)w.setUser(s.user),x.add({type:"success",message:b.value=="ar"?`تم انشاء الحساب ${s.user.name}`:`success create ${s.user.name}`}),M("/");else if(s.errCode==422){let a={};for(const[h,m]of Object.entries(s.message))a[h]=m[0],x.add({type:"error",message:m[0]});o.record(a)}}))}catch(s){console.log(s)}}return(s,a)=>{const h=D,m=A,B=P;return u(),i(N,null,[f(h,{classes:" dark:text-fpLightBack",contents:[s.$t("new_account")]},null,8,["contents"]),t("section",K,[t("div",Q,[t("div",W,[t("h1",X,r(s.$t("new_account")),1),t("form",{onSubmit:q($,["prevent"]),method:"post",action:"",onKeydown:a[5]||(a[5]=l=>e(o).clear(l.target.name))},[t("div",Z,[t("label",ee,r(s.$t("name_user")),1),g(t("input",{type:"text",id:"name",class:c(["bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border",e(o).has("name")?"is-invalid":""]),placeholder:s.$t("fl_user"),"onUpdate:modelValue":a[0]||(a[0]=l=>e(n).name=l),required:""},null,10,te),[[_,e(n).name]]),e(o).has("name")?(u(),i("p",se,r(e(o).get("name")),1)):p("",!0)]),t("div",oe,[t("label",ae,r(s.$t("phone_user")),1),g(t("input",{id:"phone",type:"text",class:c(["bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border",e(o).has("phone")?"is-invalid":""]),placeholder:"201090844348","onUpdate:modelValue":a[1]||(a[1]=l=>e(n).phone=l),required:""},null,2),[[_,e(n).phone]]),e(o).has("phone")?(u(),i("p",re,r(e(o).get("phone")),1)):p("",!0)]),t("div",le,[t("label",ne,r(s.$t("email_user")),1),g(t("input",{type:"email",class:c(["bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border",e(o).has("email")?"is-invalid":""]),placeholder:"name@example.com","onUpdate:modelValue":a[2]||(a[2]=l=>e(n).email=l),required:""},null,2),[[_,e(n).email]]),e(o).has("email")?(u(),i("p",de,r(e(o).get("email")),1)):p("",!0)]),t("div",ie,[t("label",ce,r(s.$t("password_user")),1),t("div",ue,[t("button",{class:c([e(o).has("password")?"is-invalid":"","bg-slate-200 absolute end-0 top-0 cursor-pointer w-10 h-full rounded-e-lg"]),type:"button",onClick:a[3]||(a[3]=l=>R(d)?d.value=!e(d):d=!e(d))},[f(m,{name:e(d)?"ph-eye-slash-fill":"ph-eye",class:"text-xl"},null,8,["name"])],2),g(t("input",{type:e(d)?"text":"password",class:c(["bg-gray-50 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 outline outline-1 outline-gray-200 dark:outline-none dark:focus:border-gray-500 focus:border",e(o).has("password")?"is-invalid":""]),placeholder:"********","onUpdate:modelValue":a[4]||(a[4]=l=>e(n).password=l),required:""},null,10,me),[[T,e(n).password]])]),e(o).has("password")?(u(),i("p",ge,r(e(o).get("password")),1)):p("",!0)]),t("button",pe,r(s.$t("create_new_account")),1),t("div",he,[t("span",fe,r(s.$t("have_account")),1),f(B,{to:s.localePath("/login"),class:"text-fpBlueDark font-bold ms-1"},{default:j(()=>[I(r(s.$t("login")),1)]),_:1},8,["to"])])],40,Y)]),_e])])],64)}}};export{Oe as default};
