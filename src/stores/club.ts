import { defineStore } from 'pinia'

import { mande } from 'mande'
import axios from 'axios'

const api = mande("http://localhost:3000/getAllClubData")

export const useClubStore = defineStore('clubStore', {
  state: () => ({
    clubName: '',
    clubPresident: '',
    clubAdvisor: '',
    room: '',
  }),
})