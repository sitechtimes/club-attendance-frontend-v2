<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "../stores/club";

const store = useUserStore();
const nameInput = ref("");

const handleSubmit = () => {
  store.changeName(nameInput.value);
  nameInput.value = "";
};
// export const useUserStore = defineStore("user", {
//   state: () => {
//     return {
//       // for initially empty lists
//       userList: [] as UserInfo[],
//       // for data that is not yet loaded
//       user: null as UserInfo | null,
//     };
//   },
// });

// interface UserInfo {
//   name: string;
//   age: number;
// }
</script>

<tempalte>
    <h1> Name is {{store.user.name}}</h1>
    <h2> Email is {{store.user.email}}</h2>
    <h2> Website is {{store.website}}</h2>
    <input
    type="text";
    placeholder="NewName"
    />
    <button @click="handleSubmit">Change name</button>
</tempalte>
