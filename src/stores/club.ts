import { defineStore } from 'pinia';

   export const useClubStore = defineStore('club', {
      state: () => ({
          user:'',
          date:'1',
          nextMeeting: ''
        }),
  });

// const changeName = (newDate: any) =>{
//    useClubStore.value.date = newname;
// };

