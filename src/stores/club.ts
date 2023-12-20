import { defineStore } from "pinia";

export const useClubStore = defineStore("club", {
  state: () => ({
    clubName: "",
    clubPresident: "",
    user: "",
    clubAdvisor: '',
    room: '',
    nextMeeting: '',
    club: ''
  }),
  actions: {
    async getData(clubName: string | undefined, year: string) {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/getClubData/${clubName}/${year}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      this.club = await response.json()
      this.clubName = this.club.clubName
      this.clubAdvisor = this.club.clubAdivsor
      this.clubPresident = this.club.clubPresident
      this.room = this.club.room
      console.log(response.body)
    }
  }
});
