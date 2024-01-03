import { defineStore } from "pinia";

export const useClubStore = defineStore("club", {
  state: () => ({
    clubName: "",
    clubPresident: "",
    user: "",
    clubAdvisor: '',
    room: '',
    nextMeeting: '',
    club: []
  }),
  actions: {
    async getData(clubName: string | undefined, year: string) {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/getClubData/${clubName}/${year}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      this.club.push(await response.json())
      console.log(this.club)
    }
  }
});
