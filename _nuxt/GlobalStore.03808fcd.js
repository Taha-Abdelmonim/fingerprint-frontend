import{$ as i,A as e}from"./entry.92606d73.js";const n=i("global",{state:()=>({appSettings:[],notifications:[]}),actions:{setAppSettings(t){return this.appSettings=t,this.appSettings},async notificationsUser(){if(this.notifications.length==0&&localStorage.getItem("user")!=null){try{await $fetch(`${e().public.apiURL}/notificationsUser`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("user")}`}}).then(t=>{this.notifications=t.data})}catch(t){console.log(t)}return this.notifications}return this.notifications}}});export{n as u};