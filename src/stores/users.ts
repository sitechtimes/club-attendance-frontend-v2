import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/index";

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
      console.log(response, 'this is response from the change next meet')
    }
  }
})

export const useUserStore = defineStore("user", {
  state: () => ({
    user:  ref(
      {uid: '',
      firstName: '',
      lastName: '',
      email: '',
      picture: '',
      role: '',
      isAuthenticated: false,
      }
    ),
    clubs: null,
  }),
  actions: {
    updateUser(decodedCookie: any) {
     this.user = decodedCookie
    },
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
    async getData() {
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
      console.log(this.clubs)
    },
    async updateAttendance(attendanceJSON: any){
      console.log(attendanceJSON)
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/updateAttendance`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: attendanceJSON,
      });
      console.log(response, "this is what attendance has been logged as")
    }
  },
},
);
