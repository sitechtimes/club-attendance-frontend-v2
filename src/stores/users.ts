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
      console.log(response)
    }
  },
})

export const useUserStore = defineStore("user", {
  state: () => ({
    user: "",
    uid: Number,
    userAuthority: "",
    userClubData: "",
    clubs: [],
    allClubs: [],
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
    async getAllClubData(uuid: any) {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/getAllClubData/2024-2025/${uuid}`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      });
      console.log(uuid)
    }
  },
},
);
