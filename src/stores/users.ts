import { defineStore } from "pinia";
import axios from "axios";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { ref } from 'vue'

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
        body: JSON.stringify(selectedClubJSON)
      })
      console.log(response, "asdasd")
    }
  },
})

export const useUserStore = defineStore("user", {
  state: () => ({
    qrCodeClub: '',
    loggedIn: false,
    userClubData: {},
    clubs: [],
    clubMembers: [],
    allClubs: [],
    unapprovedImages: [],
    user: ref(
      {
        uid: '',
        "First Name": '',
        "Last Name": '',
        Email: '',
        picture: '',
        "Client Authority": '',
        isAuthenticated: false,
        "Club Data": ref({
          PresidentOf: [],
          MemberOf: []
        })
      }
    ),
  }),
  actions: {
    updateUser(decodedCookie: any) {
      this.user = decodedCookie
      console.log(this.user)
    },
    async googleLink() {
      await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/returnRedirectUrl`, {
          headers: {},
        })
        .then((res: { data: { redirectUri: string } }) => {
          window.location.href = res.data.redirectUri;
        });
    },
    async getClubMembers(clubName: any, year: any, uuid: any) {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/getClubMembers/${clubName}/${year}/${uuid}`, {
        method: "GET"
      })
      this.clubMembers = await response.json()
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
      this.clubs = await response.json()
      this.allClubs = this.clubs
    },
    async getUnapprovedClubs(uuid: any) {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/getUnapprovedImages/${uuid}`)
      this.unapprovedImages = await response.json()
      console.log(this.unapprovedImages)
    },
    async updateAttendance(attendanceJSON: any) {
      console.log(JSON.stringify(attendanceJSON))
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/updateAttendance`, {
          method: "PATCH",
          cache: "force-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json"
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(attendanceJSON),
        })
        console.log(response.json())
      } catch (error) {
        console.log(error)
      }
    }
  },
},
);
