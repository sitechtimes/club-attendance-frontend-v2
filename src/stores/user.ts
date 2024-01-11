import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/index";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: "",
    clubs: null,
    uuid: "",
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
    async approveImage() {},
  },
});
