import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/index";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: "",
    clubs: null,
    uuid: Number,
    year: "",
    clubName: "",
  }),
  actions: {
    async googleLink() {
      await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/returnRedirectUrl`, {
          headers: {},
        })
        .then((res: { data: { redirectUri: string } }) => {
          console.log(res);
          window.location.href = res.data.redirectUri;
        });
    },
    async uploadImage() {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/uploadImage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: 
    })
      console.log(response)
    }
  },
});
