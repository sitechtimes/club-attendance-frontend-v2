import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const usePresidentStore = defineStore("president", {
  state: () => ({
    uuid: Number,
    year: "",
    clubName: "",
  }),
  actions: {
    async uploadImage(file) {
      const formData = new FormData();
      formData.append("image", file);

      await axios
        .post("http://localhost:3000uploadImage", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          this.commit("importTodos", res.data);
        })
        .catch((error) => {
          console.log(error.res.data);
        });
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
