import {defineStore} from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => {
    return {
      appSettings: [],
      notifications: [],
    };
  },

  actions: {
    setAppSettings(settings) {
      this.appSettings = settings;
      return this.appSettings;
    },
    async notificationsUser() {
      if (this.notifications.length == 0 && localStorage.getItem("user") != null) {
        try {
          await $fetch(`${useRuntimeConfig().public.apiURL}/notificationsUser`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
          }).then(res => {
            this.notifications = res.data;
          });
        } catch (error) {
          console.log(error);
        }
        return this.notifications;
      }
      return this.notifications;
    },
  },
});
