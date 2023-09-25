import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", ()=> {
   const user = ({
    name: "Matt",
   });

   const changeName = (newName: any) => {
    user.name = newName; 
   };

   return {
    user, 
    changeName, 
   }
  });