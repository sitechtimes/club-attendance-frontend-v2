import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", ()=> {
   const user = ({
    date: "8/12/2023",
   });

   const changeDate = (newDate: any) => {
    user.date = newDate; 
   };

   return {
    user, 
    changeDate, 
   }
  });