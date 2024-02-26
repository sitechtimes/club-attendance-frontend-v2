<template>
  <form class="form flex flex-col justify-center w-[80%]">
    <input
      id="image"
      v-on:change="onFileChange"
      type="file"
      @input="pickFile"
    />
    <!-- <input ref="fileInput" type="file" @input="pickFile" /> -->
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage"
    >
      <!-- <img :src="{ previewImage }" /> -->
    </div>
    <button
      class="my-2 justify-center rounded-md bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:w-auto"
      type="submit"
      @click="selectImage()"
    >
      Import Club Image
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePresidentStore } from "../stores/user";
const presidentStore = usePresidentStore();
const pickFile = ref("");

function onFileChange(this: any, e: Event) {
  var files =
    (e.target as HTMLInputElement).files ||
    (e.dataTransfer as DataTransfer).files;
  if (!files.length) return;
  this.createImage(files[0]);
}

function selectImage() {
  try {
    const input = document.querySelector("input[type=file].value");
    const image: string = input.files[0];
    const inputImg = `{"year": "${presidentStore.year}", "clubName": "Art Club", "image": "${presidentStore.image}"}`;
    presidentStore.uploadImage(inputImg);
  } catch (error) {
    console.log(error);
  }
}

// export default {
//   setup() {
//     const previewImage = ref(null);

//     const selectImage = () => {
//       this.$refs.fileInput.click();
//     };

//     const pickFile = () => {
//       let input = this.$refs.fileInput;
//       let file = input.files;
//       if (file && file[0]) {
//         let reader = new FileReader();
//         reader.onload = (e) => {
//           previewImage.value = e.target.result;
//         };
//         reader.readAsDataURL(file[0]);
//         this.$emit("input", file[0]);
//       }
//     };

//     return {
//       presidentStore,
//       previewImage,
//       selectImage,
//       pickFile,
//     };
//   },
// };
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
