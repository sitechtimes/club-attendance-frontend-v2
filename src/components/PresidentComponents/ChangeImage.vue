<template>
  <form
    class="form flex flex-col justify-center w-[80%]"
    @submit.prevent="selectImage"
  >
    <input
      id="image"
      v-on:change="onFileChange($event)"
      type="file"
      ref="fileInput"
    />
    <button
      class="my-2 justify-center rounded-md bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:w-auto"
      type="submit"
    >
      Submit Club Image
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePresidentStore } from "@/stores/users";
import { useUserStore } from "@/stores/users";
import { useClubStore } from "@/stores/club";
const presidentStore = usePresidentStore();
const fileInput = ref("");

function onFileChange(this: any, event: any) {
  // presidentStore.selectedImage is a formData
  // append the file into the formData
  // also append a uuid and clubName
  presidentStore.selectedImage = new FormData();
  presidentStore.selectedImage.append("clubName", "Art Club");
  presidentStore.selectedImage.append("year", "2024-2025")
  presidentStore.selectedImage.append("uuid", "100231622882297228860");
  presidentStore.selectedImage.append(
    "image",
    event.target.files[0],
    "image.jpg"
  );
  console.log(presidentStore.selectedImage);
}

function selectImage() {
  try {
    presidentStore.uploadImage();
  } catch (error) {
    console.log(error);
  }
}
</script>

<style>
.imagePreviewWrapper {
  width: 100%;
  height: 250px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}
</style>
