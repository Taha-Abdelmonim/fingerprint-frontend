import {defineStore} from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => {
    return {
      appSettings: [],
    };
  },

  actions: {
    setAppSettings(settings) {
      this.appSettings = settings;
      return this.appSettings;
    },
  },
});
