import { defineStore } from 'pinia';

   export const useClubStore = defineStore('club', {
      state: () => ({
          user:'',
          date:'1',
          
        }),
  });

const changeDate = (newDate: any) =>{
   useClubStore.value.date = newDate;
};

