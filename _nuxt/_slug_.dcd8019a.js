import{_ as j,u as L}from"./BreadCrumbs.621b689c.js";import{z as O,A as x,y as P,B as D,r as w,l as $,h as r,m as y,u as e,p as t,t as n,C as _,D as M,F as T,E as B,G as S,w as R,H as A,s as N,q as U,I as k,o as c,J as V,x as z}from"./entry.92606d73.js";import{_ as H}from"./nuxt-link.2340e45d.js";import{u as I}from"./useError.7f6d451d.js";import{_ as q}from"./avatar.ca141996.js";import{u as E}from"./TostStore.5a642af5.js";const F={class:"blog"},G={key:0,class:"section-2 lg:py-[100px] relative"},J={class:"container mx-auto"},K={class:"w-full sm:mt-20"},Y={class:""},Q={class:"w-full mb-8 relative"},W=["src"],X=["textContent"],Z={class:"text-gray-400 text-lg lg:text-xl mb-8"},tt=["src"],et={key:1,src:q,alt:"",class:"sm:mb-4 object-cover w-10 h-10 lg:w-14 lg:h-14 rounded-full inline"},st=["textContent"],ot={class:"dark:text-gray-300"},at=["innerHTML"],nt={class:"mt-20"},lt={class:"text-xl lg:text-3xl font-bold"},rt=["textContent"],ct=t("hr",null,null,-1),it={class:"space-y-20"},mt={class:"mt-8 lg:mt-16 mb-10 text-2xl text-gray-700 dark:text-gray-300"},dt={class:"lg:h-40 rounded-full sm:flex sm:h-fit items-center"},ut=["src"],gt={key:1,src:"https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",alt:"",class:"sm:mb-4 object-cover w-10 lg:w-20 h-10 lg:h-20 rounded-full inline lg:mx-auto"},_t=["textContent"],ht=["textContent"],pt={class:"lg:ms-8 sm:text-center"},xt=["textContent"],yt={href:"#replay",class:"text-fpOrange mt-2 text-xl font-normal flex items-center sm:justify-center"},ft=t("svg",{width:"30",height:"28",viewBox:"0 0 30 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"mr-2"},[t("path",{d:"M3.75 13H16.25C21.7728 13 26.25 17.1787 26.25 22.3333V24.6667M3.75 13L11.25 20M3.75 13L11.25 6",stroke:"#489D33","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),bt=["onSubmit"],vt={class:"font-medium text-3xl text-fpOrange"},wt={class:"w-full mt-10 mb-6"},$t={class:"relative"},kt={for:"message",class:"mt-8 text-gray-500 dark:text-gray-300 mb-10 block sm:text-sm"},Ct=["placeholder"],jt={key:0,class:"mt-2 text-sm text-red-500"},Lt={type:"submit",class:"mt-8 lg:mt-16 sm:mx-auto block text-xl lg:text-2xl font-normal hover:border-fpOrange border-2 border-white rounded-md py-2 px-4 lg:py-4 lg:px-14 hover:text-fpOrange cursor-pointer bg-fpOrange text-white transition hover:bg-transparent"},Nt={__name:"[slug]",setup(Ot){const h=E(),f=O(),p=x().public.baseURL,{currentLocale:i,dir:Pt}=P(),u=D(I());let o=w([]);$({script:[{type:"text/javascript",src:"https://platform-api.sharethis.com/js/sharethis.js#property=643d6dbd9806e4001a16ee2b&product=sticky-share-buttons&source=platform",async:"async"}]}),(async()=>{try{let s="";f.query.read=="true"&&(s="?read=true"),await $fetch(`${x().public.apiURL}/post/${f.params.slug}${s}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("user")}`}}).then(a=>{o.value=a.data,$({title:i.value=="ar"?o.value.name_ar:o.value.name_en})})}catch(s){console.log(s)}})();function b(s){var a=new Date(s);let g=a.getFullYear(),d=a.getMonth()<10?`0${a.getMonth()}`:a.getMonth();return`${a.getDay()<10?`0${a.getDay()}`:a.getDay()}-${d}-${g}`}let m=w(null);const C=async()=>{console.log(o.value.id);try{await L("commentPost",()=>$fetch(`${x().public.apiURL}/commentPost`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("user")}`},body:{locale:i.value,comment:m.value,post_id:o.value.id}}).then(s=>{if(s.status)h.add({type:"success",message:i.value=="ar"?"تم ارسال تعليقك الي المسؤولين":"success comment your review"}),m.value="";else if(s.errCode==422){let a={};for(const[g,d]of Object.entries(s.message))a[g]=d[0],h.add({type:"error",message:d[0]});u.record(a)}else s.errCode==0&&(h.add({type:"error",message:s.message}),V("/login"))}))}catch(s){console.log(s)}};return(s,a)=>{const g=j,d=z,v=H;return c(),r("section",F,[y(g,{classes:"bg-breadcrumb put h-[200px] lg:h-[450px] overlay text-white text-3xl blog-slug",contents:[s.$t("blog"),e(i)=="ar"?e(o).name_ar:e(o).name_en]},null,8,["contents"]),Object.keys(e(o)).length?(c(),r("section",G,[t("div",J,[t("div",K,[t("div",Y,[t("div",Q,[t("img",{src:`${e(p)}/images/${e(o).photo}`,alt:"",class:"w-full h-[200px] lg:h-[400px]"},null,8,W),t("span",{class:"absolute sm:top-[-3rem] lg:top-[-2rem] start-14 lg:start-0 rtl:translate-x-[50%] ltr:-translate-x-[50%] bg-fpOrange w-28 h-20 grid place-items-center text-white text-lg lg:rounded-md sm:w-28 sm:h-12 sm:right-12",textContent:n(b(e(o).created_at))},null,8,X)]),t("div",Z,[e(o).user.photo?(c(),r("img",{key:0,src:`${e(p)}/images/${e(o).user.photo}`,alt:"",class:"sm:mb-4 object-cover w-10 h-10 lg:w-14 lg:h-14 rounded-full inline"},null,8,tt)):(c(),r("img",et)),_(" "+n(e(o).user.name)+"   |   ",1),y(d,{name:"uil-comment-dots",class:"text-3xl"}),t("span",null,n(s.$t("comments"))+" ("+n(e(o).comment.length)+")",1),_("   ")]),t("h2",{class:"font-bold text-fpOrange text-xl lg:text-4xl sm:my-4 lg:mb-6",textContent:n(e(i)=="ar"?e(o).name_ar:e(o).name_en)},null,8,st),t("div",ot,[t("p",{class:"text-gray-600 font-medium text-md lg:text-xl",innerHTML:e(i)=="ar"?e(o).body_ar:e(o).body_en},null,8,at)])]),t("div",nt,[y(v,{to:s.localePath(`/${e(o).section.url}`),class:"mb-6 text-3xl dark:text-fpLightBack block"},{default:M(()=>[t("span",lt,n(s.$t("section")),1),_(": "),t("span",{class:"text-xl lg:text-3xl font-medium text-fpOrange",textContent:n(e(i)=="ar"?e(o).section.name_ar:e(o).name_en)},null,8,rt)]),_:1},8,["to"]),ct]),t("div",it,[t("h6",mt,n(s.$t("comments"))+" ("+n(e(o).comment.length)+")",1),(c(!0),r(T,null,B(e(o).comment,l=>(c(),r("div",{class:"flex lg:items-center sm:flex-col sm:justify-center",key:l.id},[t("div",dt,[l.user.photo?(c(),r("img",{key:0,src:`${e(p)}/images/${l.user.photo}`,alt:"",class:"sm:mb-4 object-cover w-10 lg:w-20 h-10 lg:h-20 rounded-full inline lg:mx-auto"},null,8,ut)):(c(),r("img",gt)),t("span",{class:"sm:mr-6 text-gray-600 lg:block dark:text-gray-300",textContent:n(l.user.name)},null,8,_t),t("span",{class:"text-gray-400",textContent:n(b(l.created_at))},null,8,ht)]),t("div",pt,[t("p",{class:"text-gray-600 dark:text-gray-300 text-xl font-medium",textContent:n(l.comment)},null,8,xt),t("a",yt,[_(n(s.$t("reply"))+" ",1),ft])])]))),128))]),t("form",{class:"sm:mb-16 mt-10 lg:mt-24",id:"replay",onSubmit:S(C,["prevent"]),method:"post",action:"",onKeydown:a[1]||(a[1]=l=>e(u).clear(l.target.name))},[t("b",vt,n(s.$t("leave_response_post")),1),t("div",wt,[t("div",$t,[t("label",kt,n(s.$t("approve_admin_comment")),1),R(t("textarea",{id:"message",name:"message",class:N(["w-full bg-gray-200 dark:bg-gray-800 dark:text-gray-300 bg-opacity-40 rounded focus:bg-[#e5e7eb99] h-52 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",e(u).has("comment")?"is-invalid":""]),placeholder:s.$t("write_comment_here"),"onUpdate:modelValue":a[0]||(a[0]=l=>U(m)?m.value=l:m=l),required:""},null,10,Ct),[[A,e(m)]]),e(u).has("comment")?(c(),r("p",jt,n(e(u).get("comment")),1)):k("",!0)])]),t("button",Lt,n(s.$t("add_comment")),1)],40,bt)])])])):k("",!0)])}}};export{Nt as default};
