<template>
  <nav
    class="bg-black dark:bg-dark-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 font-['sans']"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <span class="self-center text-3xl whitespace-nowrap text-white"
        >Club Attendance
      </span>
      <!-- log out button -->
      <div class=" lg:pr-0 flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mr-28 lg:mr-6">
        <button
          type="button"
          class="mx-20 text-black fixed bg-yellow hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2 px-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log Out
        </button>
        <Menu as="div" class="relative">
          <MenuButton
            @click="show = !show"
            class="top-6vw text-black bg-yellow hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <img src="@/assets/menu.png" alt="" class="w-6" />
          </MenuButton>

          <!-- hamburger menu -->
          <div id="demo" class="mt-0">
            <Transition v-if="show" name="fade">
              <div
                v-if="show"
                class="max-m-{10} grow flex absolute rounded h-auto bg-black m-5"
              >
                <ul class="p-5">
                  <li
                    v-for="club in clubStore.club"
                    @click="dookie(club)"
                    class="hover:text-gray hamburger-item hover:bg-sky-white text-white p-1 w-32"
                  >
                    {{ club.clubName }}
                  </li>
                  <div></div>
                </ul>
              </div>
            </Transition>
          </div>
        </Menu>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { Transition, Vue } from "vue";
import { ref } from "vue";
import { useUserStore, usePresidentStore } from "@/stores/users";
import { useClubStore } from "@/stores/club";

const clubStore = useClubStore();
const userStore = useUserStore();
const presidentStore = usePresidentStore()
// userStore.userClubData.PresidentOf.forEach((club: string) => {
//   clubStore.getData(club, "2023-2024")
// });
console.log(userStore.user);
console.log(userStore.user["Club Data"].PresidentOf);
console.log("mounted");
clubStore.club = [];
userStore.user["Club Data"].PresidentOf.forEach((club: string) => {
  clubStore.getData(club, "2024-2025");
});
console.log(clubStore.club);
const show = ref(true);
const year = new Date().getFullYear()

function dookie(club: any) {
  presidentStore.selectedClub = club
  console.log(presidentStore.selectedClub, "asd");
  clubStore.qrCode = presidentStore.selectedClub.qrcodeWeb
  userStore.getClubMembers(presidentStore.selectedClub.clubName,`${year}-${year+1}`, userStore.user.uid)
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
