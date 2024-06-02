import { defineStore } from "pinia";
import { ref } from 'vue'
export const useClubStore = defineStore("club", {
  state: () => ({
    fileUpload: true,
    clubName: "",
    clubPresident: "",
    user: "",
    clubAdvisor: '',
    room: '',
    nextMeeting: '',
    club: [ref({
      clubName: "",
      nextMeeting: "",
    })]
  }),
  actions: {
    async getData(clubName: string | undefined, year: string) {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/getClubData/${clubName}/${year}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      const club = await response.json()

      console.log(club)
      this.club.push(club)
      this.clubName = club.clubName
      this.clubAdvisor = club.clubAdivsor
      this.clubPresident = club.clubPresident
      this.room = club.room

    }
  }
});
