import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router/index'

export const useUserStore = defineStore('user', {
    state: () => ({
        user:'',
        // isAuthenticated: document.cookie.includes('token'),
        
      }),


      actions: {
        async googleLink(){
          await axios.get(`${import.meta.env.VITE_BACKEND_URL}/returnRedirectUrl`,{
            headers: {}
          })
          .then((res)=>{
            console.log(res)
            window.location.href = res.data.redirectUri
          })
            
        }

      },

})
