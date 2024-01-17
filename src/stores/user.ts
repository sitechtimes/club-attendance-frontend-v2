import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/index";

export const usePresidentStore = defineStore("president", {
  state: () => ({
    uuid: Number,
    year: "",
    clubName: "",
  }),
  actions: {
    async uploadImage() {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/uploadImage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: club_img,
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    },
  },
});

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
    async getAllClubData(uuid) {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/getAllClubData/${uuid}`,
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        }
      );
      this.clubs = await response.json();
      this.allClubs = this.clubs;
    },
  },
});
