import{_ as N}from"./BreadCrumbs.621b689c.js";import{_ as I}from"./nuxt-link.2340e45d.js";import{A as x,y as T,k as V,l as E,r as y,h as c,m as d,p as e,F as m,E as _,u as l,I as $,t as o,s as p,x as F,o as n,D as k,C,c as S}from"./entry.92606d73.js";import{_ as M}from"./avatar.ca141996.js";import{u as W}from"./SectionStore.f4d0c76b.js";const z={class:"lg:pb-[100px] sm:mb-20 relative"},A={class:"container mx-auto flex gap-x-20 sm:flex-col-reverse sm:items-center mt-20"},G={class:"sm:mt-40 lg:w-3/4 space-y-40 lg:space-y-20"},H={class:"w-full mb-8 relative"},Y=["src"],q=["textContent"],J={class:"text-gray-400 text-lg lg:text-xl mb-8"},K=["src"],Q={key:1,src:M,alt:"",class:"object-cover w-10 h-10 lg:w-14 lg:h-14 rounded-full inline"},X=["textContent"],Z={class:"ml-2 text-lg lg:text-3xl"},tt={class:"lg:w-1/4 lg:ml-auto"},et={class:"relative"},at={class:"relative h-fit"},lt=["placeholder"],st={key:0,id:"dropdown",class:"z-10 bg-white divide-y divide-gray-100 rounded w-full dark:bg-gray-700 absolute top-10 inset-x-0 shadow-lg max-h-[200px] overflow-y-auto"},ot={class:"py-1 text-sm text-gray-700 dark:text-gray-200 divide-y-2","aria-labelledby":"dropdown-button"},nt={class:"mt-10"},rt={class:"text-fpOrange font-medium text-3xl lg:text-4xl pb-6 relative after:content-[''] after:absolute after:w-1/2 after:h-2 after:bg-fpOrange after:start-0 after:bottom-0 after:translate-y-[50%]"},ct=e("hr",null,null,-1),it={class:"mt-8 space-y-2"},dt=["for","textContent"],gt=["onChange","id","value"],ut={class:"mt-20 lg:mt-10"},ht={class:"text-fpOrange font-medium text-3xl lg:text-4xl pb-6 relative after:content-[''] after:absolute after:w-1/2 after:h-2 after:bg-fpOrange after:start-0 after:bottom-0 after:translate-y-[50%]"},xt=e("hr",null,null,-1),mt={class:"pt-4 bg-gray-100 divide-y-2 overflow-y-scroll sm:max-h-[500px] lg:max-h-[700px] w-full no-scroll sm:shadow-md lg:shadow-lg"},_t=["src"],pt={class:"w-[60%]"},bt=["textContent"],ft={class:"mt-32"},yt={class:"container ml-24 flex flex-col lg:flex-row sm:gap-y-8 justify-between items-center"},vt={class:"flex items-center gap-x-6"},wt=["disabled"],$t=["onClick"],kt=["disabled"],Ct={class:"flex items-center gap-x-6"},Pt={class:"bg-gray-200 px-8 py-4 rounded-xl text-4xl text-gray-500"},Ot={class:"text-3xl px-8 py-4 rounded-xl bg-gray-300 text-gray-500"},It={__name:"blogs",setup(Lt){const P=W(),v=x().public.baseURL,{currentLocale:g,dir:Rt}=T(),{t:O}=V();E({title:O("blog"),meta:[{name:"title",content:O("blog")}]});let r=y([]),b=y([]);(async()=>{try{await $fetch(`${x().public.apiURL}/getPosts`).then(a=>{r.value=a.data})}catch(a){console.log(a)}})();const w=async a=>{try{await $fetch(a).then(s=>{r.value=s.data})}catch(s){console.log(s)}};P.getSections();const B=async a=>{if(a=="")return b.value=[];try{await $fetch(`${x().public.apiURL}/searchPosts`,{method:"POST",body:{locale:g.value,search:a}}).then(s=>{b.value=s.data})}catch(s){console.log(s)}};function L(a){var s=new Date(a);let u=s.getFullYear(),i=s.getMonth()<10?`0${s.getMonth()}`:s.getMonth();return`${s.getDay()<10?`0${s.getDay()}`:s.getDay()}-${i}-${u}`}let f=y([]);async function U(a,s){try{let u="";a==1&&(u=!0),s.target.checked?f.value.push(a):f.value=f.value.filter(i=>i!=a),await $fetch(`${x().public.apiURL}/filterPosts?sections_id=[${f.value}]&all=${u}`,{method:"GET"}).then(i=>{r.value=i.data})}catch(u){console.log(u)}}let R=y([]);async function j(){try{await $fetch(`${x().public.apiURL}/mostWatched`,{method:"POST"}).then(a=>{R.value=a.data})}catch(a){console.log(a)}}return j(),(a,s)=>{const u=N,i=I,h=F;return n(),c("section",z,[d(u,{classes:" bg-breadcrumb put h-[450px] overlay text-white text-5xl lg:text-3xl",contents:[a.$t("blog")]},null,8,["contents"]),e("div",A,[e("div",G,[(n(!0),c(m,null,_(l(r).data,t=>(n(),c("div",{key:t.id},[e("div",H,[d(i,{to:a.localePath(`/blog/${t.slug}`)},{default:k(()=>[e("img",{src:`${l(v)}/images/${t.photo}`,alt:"",class:"w-full lg:h-[400px]"},null,8,Y)]),_:2},1032,["to"]),e("span",{class:"absolute sm:top-[-3rem] lg:top-[-2rem] start-14 lg:start-0 rtl:translate-x-[50%] ltr:-translate-x-[50%] bg-fpOrange w-28 h-20 grid place-items-center text-white text-lg lg:rounded-md sm:w-28 sm:h-12 sm:right-12",textContent:o(L(t.created_at))},null,8,q)]),e("div",J,[t.user.photo?(n(),c("img",{key:0,src:`${l(v)}/images/${t.user.photo}`,alt:"",class:"object-cover w-10 h-10 lg:w-14 lg:h-14 rounded-full inline"},null,8,K)):(n(),c("img",Q)),C(" "+o(t.user.name)+"   |   ",1),d(h,{name:"uil-comment-dots",class:"text-3xl"}),e("span",null,o(a.$t("comments"))+" ("+o(t.comment.length)+")",1),C("   ")]),d(i,{to:a.localePath(`/blog/${t.slug}`),class:"font-bold text-fpOrange hover:text-fpRed text-2xl lg:text-4xl sm:my-4 lg:mb-6 block hover:dark:text-white transition",textContent:o(l(g)=="ar"?t.name_ar:t.name_en)},null,8,["to","textContent"]),e("p",{class:"text-gray-600 dark:text-gray-300 w-5/6",textContent:o(l(g)=="ar"?t.description_ar:t.description_en)},null,8,X),d(i,{to:a.localePath(`/blog/${t.slug}`),class:"arro-hover leading-none relative bg-fpOrange hover:bg-fpOrangeDark transition py-1 px-4 text-base font-normal text-white rounded-md whitespace-nowrap flex items-center mt-10 w-fit"},{default:k(()=>[l(g)=="en"?(n(),S(h,{key:0,name:"ic-outline-arrow-back",class:"text-lg lg:text-3xl arrow-animate"})):$("",!0),e("span",Z,o(a.$t("read_more")),1),l(g)=="ar"?(n(),S(h,{key:1,name:"ic-outline-arrow-back",class:"text-lg lg:text-3xl arrow-animate"})):$("",!0)]),_:2},1032,["to"])]))),128))]),e("div",tt,[e("div",et,[e("div",at,[e("input",{onInput:s[0]||(s[0]=t=>B(t.target.value)),id:"posts-search",type:"text",placeholder:a.$t("search"),class:"focus:outline-none bg-gray-200 dark:bg-gray-800 dark:text-fpLightBack focus:bg-gray-100 rounded-e-xl p-6 py-2 font-light text-xl w-full"},null,40,lt),d(h,{name:"ic-baseline-search",class:"absolute bg-fpOrange w-10 h-full end-0 top-0 grid place-items-center text-4xl text-white rounded-e-lg"})]),l(b).length>0?(n(),c("div",st,[e("ul",ot,[(n(!0),c(m,null,_(l(b),t=>(n(),c("li",null,[d(i,{to:a.localePath(`/blog/${t.slug}`),type:"button",class:"inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",textContent:o(l(g)=="ar"?t.name_ar:t.name_en)},null,8,["to","textContent"])]))),256))])])):$("",!0)]),e("div",nt,[e("h2",rt,o(a.$t("sections")),1),ct]),e("div",it,[(n(!0),c(m,null,_(l(P).sections,t=>(n(),c("div",{class:"flex justify-between font-medium text-gray-600 text-lg",key:t.id},[e("label",{for:`checkbox_${t.id}`,textContent:o(l(g)=="ar"?t.name_ar:t.name_en),class:"select-none"},null,8,dt),e("input",{onChange:D=>U(t.id,D),class:"fileter_checkbox w-6 h-6",type:"checkbox",id:`checkbox_${t.id}`,name:"checkbox",value:t.id},null,40,gt)]))),128))]),e("div",ut,[e("h2",ht,o(a.$t("more_see")),1),xt]),e("div",mt,[(n(!0),c(m,null,_(l(R),t=>(n(),c("div",{class:"flex items-center w-full p-2 py-4 hover:bg-gray-200 transition",key:t.id},[d(i,{to:a.localePath(`/blog/${t.slug}`),class:"block me-4 w-[40%] h-full"},{default:k(()=>[e("img",{src:`${l(v)}/images/${t.photo}`,alt:"",class:"me-6 object-cover"},null,8,_t)]),_:2},1032,["to"]),e("div",pt,[d(i,{to:a.localePath(`/blog/${t.slug}`),class:"text-fpOrange text-xl lg:text-xl font-bold block mb-1",textContent:o(l(g)=="ar"?t.name_ar:t.name_en)},null,8,["to","textContent"]),d(h,{name:"ic-outline-edit-calendar",class:"text-gray-400 text-xl"}),C(),e("span",{class:"text-fpOrange me-4",textContent:o(L(t.created_at))},null,8,bt)])]))),128))])])]),e("div",ft,[e("div",yt,[e("div",vt,[e("button",{disabled:l(r).prev_page_url==null,type:"button",class:p(["bg-gray-200 hover:bg-gray-300 cursor-pointer transition rounded-lg px-4 py-3",[l(r).prev_page_url==null?"disabled":""]]),onClick:s[1]||(s[1]=t=>w(l(r).prev_page_url))},[d(h,{name:"ic-round-arrow-forward-ios",class:p(["text-4xl",l(g)=="en"?"rotate-180":""])},null,8,["class"])],10,wt),(n(!0),c(m,null,_(l(r).last_page,t=>(n(),c("button",{onClick:D=>w(`http://127.0.0.1:8000/api/getPosts?page=${t}`),class:p(`cursor-pointer transition rounded-lg px-4 py-3 text-2xl ${l(r).current_page==t?"bg-fpOrange text-white hover:text-white hover:bg-fpRed":"bg-gray-200 hover:bg-gray-300"}`)},[e("span",null,o(t),1)],10,$t))),256)),e("button",{onClick:s[2]||(s[2]=t=>w(l(r).next_page_url)),disabled:l(r).next_page_url==null,type:"button",class:p(["bg-gray-200 hover:bg-gray-300 cursor-pointer transition rounded-lg px-2 py-3",[l(r).next_page_url==null?"disabled":""]])},[d(h,{name:"ic-baseline-arrow-back-ios",class:p(["text-4xl me-3",l(g)=="en"?"rotate-180":""])},null,8,["class"])],10,kt)]),e("div",Ct,[e("p",Pt,o(l(r).current_page)+"/"+o(l(r).last_page),1),e("b",Ot,o(l(r).total),1)])])])])}}};export{It as default};
