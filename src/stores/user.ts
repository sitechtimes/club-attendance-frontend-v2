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
    async approveImage(nextMeeting: any, req: Request, res: Response) {
      const request = await fetch("http://localhost:3000//uploadImage", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        body: {
          uuid: this.clubs.uuid,
          year: this.clubs.year,
          clubName: this.clubs.clubName,
        },
      });
      // this.clubs = await response.json();
      // console.log(this.clubs);
      console.log(request);
    },
  },
});
