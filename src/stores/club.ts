import { defineStore } from "pinia";

import { mande } from "mande";
import axios from "axios";

const api = mande("http://localhost:3000/getAllClubData");

// export const useClubStore = defineStore('club', {
//   state: () => ({
//     clubs: null,
//     api_url: "http://localhost:3000/getAllClubData",
//     count: 0
//   }),
//   async getData() {
//     try {
//       this.clubs = await api.get()
//       console.log(this.clubs)
//     } catch (error) {
//       console.error(error)
//       // let the form component display the error
//       return error
//     }
//   },
// })

export const useClubStore = defineStore("club", {
  state: () => ({
    fileUpload: true,
    clubName: "",
    clubPresident: "",
    user: "",
    nextMeeting: "",
  }),
  actions: {
    async changeData(nextMeeting: any, req: Request, res: Response) {
      const response = await fetch("http://localhost:3000/addClubMeeting", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        body: {
          nextMeeting: nextMeeting,
        },
      });
      this.clubs = await response.json();
      console.log(this.clubs);
    },
  },
  // persist: {
  //   storage: sessionStorage
  // }
});
