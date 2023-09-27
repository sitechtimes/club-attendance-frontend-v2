import { defineStore } from 'pinia'

import { mande } from 'mande'

const api = mande("http://localhost:3000/getAllClubData")

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

export const useClubStore = defineStore('clubStore', {
  state: () => ({
    clubName: '',
    clubPresident: '',
  }),
  // persist: {
  //   storage: sessionStorage
  // }
})