import { defineStore } from "pinia";
import axios from "axios";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export const usePresidentStore = defineStore("president", {
  state: () => ({
    selectedClub: "",
    year: "",
    nextMeeting: "",
  }),
  actions: {
    async changeNextMeet(selectedClubJSON: any) {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/addClubMeeting`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: selectedClubJSON
      })
    }
  },
})

export const useUserStore = defineStore("user", {
  state: () => ({
    user: "",
    uid: Number,
    userAuthority: "",
    userClubData: null
  }),
  actions: {
    async googleLink() {
      await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/returnRedirectUrl`, {
          headers: {},
        })
        .then((res: { data: { redirectUri: string } }) => {
          window.location.href = res.data.redirectUri;
        });
    },
    async getAllClubData() {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/getAllClubData`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      });
      this.clubs = await response.json()
    }
  },
},
);
