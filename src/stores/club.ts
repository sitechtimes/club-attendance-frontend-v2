import { defineStore } from 'pinia';

   export const useClubStore = defineStore('club', {
      state: () => ({
          user:'',
          date: '1',
        }),
  });

