import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: () => ({
        user:'',

        
      }),


      actions: {
        async googleLink(){
          await axios.get(`${import.meta.env.VITE_BACKEND_URL}/oauth2`,{
            headers: {}
          })
          // .then((res)=>{
          //   console.log(res.data)
          // })
            
        }

      },

})
