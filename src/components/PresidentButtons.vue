<template>
  <div class="bg-gray-50 flex-col w-[25%] px-4 py-4 sm:flex sm:px-6">
    <button
      type="button"
      class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto"
      @click="
        qrCode = true;
        open = true;
      "
    >
      Generate QR Code
    </button>
    <button
      type="button"
      class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto"
      @click="
        changeDate = true;
        open = true;
      "
    >
      Add/Change meeting date
    </button>
    <button
      type="button"
      class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto"
      @click="
        open = true;
        changeImage = true;
      "
    >
      Change club profile picture
    </button>
  </div>
  <div v-show="qrCode">
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
  </div>
  <div v-show="changeDate">
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
  </div>
  <div v-show="changeImage">
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
            class="flex flex-col justify-start px-6 py-4 sm:flex transform overflow-hidden rounded-lg items-center justify-center bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <ChangeImage />
            <button
              type="button"
              class="w-full rounded-md bg-red-600 px-3 bg-red py-2 text-sm font-semibold text-white shadow-sm hover:red-500 sm:ml-3 sm:w-fill sm:h-10"
              @click="
                changeImage = false;
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

<script setup lang="ts">
import { CalendarDaysIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import QrCode from "./QrCode.vue";
import ChangeDate from "./ChangeDate.vue";
import ChangeImage from "./ChangeImage.vue";
import { onMounted } from "vue";

const props = defineProps({});
const open = ref(false);
const qrCode = ref(false);
const changeImage = ref(false);
const changeDate = ref(false);
</script>
