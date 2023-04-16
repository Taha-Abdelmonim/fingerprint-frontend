import {defineStore} from "pinia";

export const useSectionStore = defineStore("sections", {
  state: () => {
    return {
      sections: [],
      sectionsActive: [],
    };
  },

  actions: {
    async getSections($active = "") {
      $active = $active == "" ? "" : "?active=true";
      if (this.sections.length == 0) {
        let result = await $fetch(`${useRuntimeConfig().public.apiURL}/getSections${$active}`).then(res => {
          $active == "" ? (this.sections = res.data) : (this.sectionsActive = res.data);
          return res;
        });
        return result;
      }
      return this.sections;
    },
  },
});
