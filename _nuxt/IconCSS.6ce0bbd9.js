import{a as d,b as m,e as f,f as o,o as x,h as S,i as z,u as c,j as I}from"./entry.92606d73.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(_){var r;const s=_;m(n=>({"71ded496":c(p)}));const e=f();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const l=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),p=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=o(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(x(),S("span",{style:z({width:c(a),height:c(a)})},null,4))}});const v=I(y,[["__scopeId","data-v-11604bcf"]]);export{v as default};
