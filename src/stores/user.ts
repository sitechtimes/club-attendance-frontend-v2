import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router/index'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: ref(
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
        testNumber: 0,      
      }),

      actions: {
        async googleLink(){
          await axios.get(`${import.meta.env.VITE_BACKEND_URL}/returnRedirectUrl`,{
            headers: {}
          })
          .then((res: { data: { redirectUri: string } })=>{
            console.log(res)
            window.location.href = res.data.redirectUri
          })

        },
        async getData(){
          const response = await fetch('http://localhost:3000/getAllClubData', {
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
      },

})
