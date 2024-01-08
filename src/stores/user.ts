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
    // async getData(clubName) {
    //   const response = await fetch("http://localhost:3000/addClubMeeting", {
    //     method: "POST",
    //     mode: "cors",
    //     cache: "no-cache",
    //     credentials: "same-origin",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     redirect: "follow",
    //     body: {
    //       clubName: req.body.clubName;
    //     },
    //   });
    //   this.clubs = await response.json();
    //   console.log(this.clubs);
    // },
  },
});
