import {defineStore} from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: {},
      isLoggedIn: false,
      showForm: "profile",
    };
  },

  actions: {
    setUser(user) {
      this.user = user;
      if (process.client) {
        localStorage.setItem("user", user.access_token);
      }
      this.isLoggedIn = true;
    },

    removeUser() {
      this.user = {};
      if (process.client) {
        localStorage.removeItem("user");
      }
      this.isLoggedIn = false;
    },
    async profile(token) {
      let result = await $fetch(`${useRuntimeConfig().public.apiURL}/auth/profile`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then(res => {
        return res;
      });
      return result;
    },
    async logout(token) {
      let result = await $fetch(`${useRuntimeConfig().public.apiURL}/auth/logout`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then(res => {
        if (res.status) {
          this.isLoggedIn = false;
          this.removeUser();
        }
        return res;
      });
      return result;
    },
  },
});
