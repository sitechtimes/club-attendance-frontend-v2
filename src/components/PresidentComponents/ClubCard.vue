<template>
  <div class="font-['sans']">
    <div class="bg-dark-gray w-full">
      <div
        class="mx-28 lg:mx-60 text-white text-xl justify-items-center mt-10 w-1/6 py-6 items-center"
      >
        <img class="my-6 lg:my-10 " src="@/assets/testimg.png" alt="" />
        <a class="my-2 lg:my-8"> {{ presidentStore.selectedClub.clubName }}</a>
        <a class="">{{ name  }}</a>
      </div>t
    </div>
  </div>
  <div class="flex flex-row font-['sans']">
    <div class="flex flex-col w-1/6 text-white h-[40.5rem] bg-dark-gray m-0">
      <div class="flex justify-center h-20 bg-black items-center text-2xl"> 
        <h1>Menu</h1>
      </div>
     

      <div class="flex flex-col px-10 bg-dark-gray363636 py-4 h-full">
        <button
          class="text-black bg-gold font-medium rounded-lg text-sm px-10 py-4 mb-5"
        >
          <a> Change Club Picture </a>
        </button>

        <button
          type="button"
          class="text-black bg-gold font-medium rounded-lg text-sm px-10 py-4 mb-5"
          @click="
            changeDate = true;
            open = true;
          "
        >
          <a>Edit meeting date</a>
        </button>
        <button
          class="text-black bg-gold font-medium rounded-lg text-sm px-10 py-4 mb-5"
        >
          <a> Generate QR Code </a>
        </button>
      </div>
    </div>
    <div class="p-24 w-[100rem] h-[] overflow-x-auto">
      <PresidentTable />
    </div>
  </div>
  <div v-show="changeDate">
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 z-10 flex justify-center">
        <div
          class="flex w-full items-center justify-center p-4 text-center sm:p-0"
        >
          <div
            class="flex flex-col px-6 py-4 sm:flex transform overflow-hidden rounded-lg items-center justify-center bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <ChangeDate />
            </div>
            <button
              type="button"
              class="w-full my-1 rounded-md bg-red-600 px-3 bg-red py-2 text-sm font-semibold text-white shadow-sm hover:red-500 sm:ml-3 sm:w-fill sm:h-10"
              @click="
                changeDate = false;
                open = true;
              "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- club div -->
<!-- <div class="flex flex-col">
    <div
      class="box flex flex-col items-end hover:scale-105 ease-in-out duration-500 cursor-pointer"
      @click="function openCard() {
        setVariables(name)
        open = true
      }"
    >
      <img src="@/assets/coding.jpeg" alt="coding" class="h-[228px] rounded-t-[20px]"
      />
      <div
        class="bg-black w-full flex flex-col items-center justify-center rounded-b-[20px] h-[4.5rem]"
      >
        <div class="text-[#c2b669] text-xl">{{ name }}</div>
        <div class="text-[#c2b669] flex items-center">
          <CalendarDaysIcon class="h-10" />
          {{ nextMeeting }}
        </div>
      </div>
    </div> -->
<!-- modal -->
<!--modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class=" px-4 pb-4 pt-5 bg-[#c2b669] sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      class="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      {{ name }}
                    </h3>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-4 sm:flex sm:px-6">
                <button
                  type="button"
                  class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto"
                  @click="
                    qrCode = true;
                    open = false;
                  "
                >
                  Generate QR Code
                </button>
                <button
                  type="button"
                  class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto"
                  @click="
                    changeDate = true;
                    open = false;
                  "
                >
                  Add/Change meeting date
                </button>
                <buttons
                  type="button"
                  class="w-full my-1 justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold bg-red text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  @click="open = false"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
<!-- modal QR code  -->
<!-- <div v-show="qrCode">
      <div
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>
        <div class="fixed inset-0 z-10 flex justify-center">
          <div
            class="flex w-full items-center justify-center p-4 text-center sm:p-0"
          >
            <div
              class="flex flex-col px-6 py-4 sm:flex transform overflow-hidden rounded-lg items-center justify-center bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <QrCode :club="props.name" />
              </div>
              <button
                type="button"
                class="w-full my-1 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white bg-red shadow-sm hover:bg-red-500 sm:ml-3 sm:w-fill sm:h-10"
                @click="
                  qrCode = false;
                  open = true;
                "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
<!-- modal date change  -->
<!-- <div v-show="changeDate">
      <div
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>
        <div class="fixed inset-0 z-10 flex justify-center">
          <div
            class="flex w-full items-center justify-center p-4 text-center sm:p-0"
          >
            <div
              class="flex flex-col px-6 py-4 sm:flex transform overflow-hidden rounded-lg items-center justify-center bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <ChangeDate />
              </div>
              <button
                type="button"
                class="w-full my-1 rounded-md bg-red-600 px-3 bg-red py-2 text-sm font-semibold text-white shadow-sm hover:red-500 sm:ml-3 sm:w-fill sm:h-10"
                @click="
                  changeDate = false;
                  open = true;
                "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
<!-- </template> -->

<script setup lang="ts">
import { CalendarDaysIcon } from "@heroicons/vue/24/solid";
import { onMounted, ref } from "vue";
import QrCode from "@/components/ClubComponents/QrCode.vue";
import ChangeDate from "./ChangeDate.vue";
import { usePresidentStore } from "@/stores/users";
import { useClubStore } from "@/stores/club";
import PresidentTable from "@/components/PresidentComponents/PresidentTable.vue";

const clubStore = useClubStore();
const presidentStore = usePresidentStore();
const props = defineProps({
  name: String,
  nextMeeting: String,
});
let open = ref(false);
const qrCode = ref(false);
const changeDate = ref(false);

function setVariables(name: string) {
  presidentStore.selectedClub = name;
  if (new Date().getMonth() + 1 <= 7) {
    let thisYear = new Date().getFullYear() - 1;
    let nextYear = new Date().getFullYear();
    let yearVar = thisYear + "-" + nextYear;
    presidentStore.year = yearVar;
  } else {
    let thisYear = new Date().getFullYear();
    let nextYear = new Date().getFullYear() + 1;
    let yearVar = thisYear + "-" + nextYear;
    presidentStore.year = yearVar;
  }
}
</script>

<!-- <style scoped>
.box {
  border-radius: 20px;
  width: 300px;
  height: 300px;
  background: #fafafa;
  box-shadow: 30px 30px 30px #cccccc, 0 0 0 #ffffff, 0 0 0 #cccccc inset,
    2px 2px 2px #ffffff inset;
}
</style> -->
