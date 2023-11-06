import { defineStore } from "pinia";

import { mande } from "mande";
import axios from "axios";

// const api = mande("http://localhost:3000/getAllClubData");

export const useClubStore = defineStore("club", {
  state: () => ({
    clubName: "",
    clubPresident: "",
    user: "",
    nextMeeting: "",
    clubAdvisor: '',
    room: '',
  }),
  // actions: {
  //   async changeData(nextMeeting: any, req: Request, res: Response) {
  //     const response = await fetch("http://localhost:3000/addClubMeeting", {
  //       method: "POST",
  //       mode: "cors",
  //       cache: "no-cache",
  //       credentials: "same-origin",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       redirect: "follow",
  //       body: {
  //         nextMeeting: nextMeeting,
  //       },
  //     });
  //     this.clubs = await response.json();
  //     console.log(this.clubs);
  //   },
  // },
  // persist: {
  //   storage: sessionStorage
  // }
});
