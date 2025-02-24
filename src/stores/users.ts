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
    currentClub: JSON.parse(localStorage.getItem("currentClub")!) || null,
    userClubData: {},
    clubs: [],
    clubMembers: [],
    allClubs: [],
    unapprovedImages: [],
    user: ref(
      {
        uid: '',
        firstName: '',
        lastName: '',
        email: '',
        picture: '',
        role: '',
        isAuthenticated: false,
        ClubData: ref({
          PresidentOf: [],
          MemberOf: []
        })
      }
    ),
  }),
  actions: {
    persistClub(){
     localStorage.setItem("currentClub", JSON.stringify(this.currentClub));
    },
    updateUser(decodedCookie: any, clubURL: any) {
      if (decodedCookie !== null){
        this.user = decodedCookie
        this.user.isAuthenticated = true
      }  
      if (clubURL !== null){
        this.currentClub = clubURL
        console.log("yes current club")
        this.persistClub();
      }
      else{
       console.log("no current club")
      }     
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
      console.log(this.clubMembers)
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
