<!-- <template> -->
<!-- <div class=""> -->
<!-- <button
      class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-14 sm:w-auto"
      @click="clubStore.changeData()"
    >
      Import Image
    </button> -->
<!-- <label for="file-input"> -->
<!-- <img src="https://placehold.it/" /> -->
<!-- </label> -->
<!-- <input id="file-input" type="file" /> -->
<!-- <form>
    <input type="file" @click="fileUpload" />
    <button
      class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-14 sm:w-auto"
      type="submit"
    >
      Import Club Image
    </button>
    <img :src="imageURL" alt="ClubImage" v-if="imageURL" class="w-[25%]" />
  </form> -->
<!-- </div> -->
<!-- </template>

<script setup lang="ts">
const imageURL = null;
</script> -->
<template>
  <form class="form flex flex-col justify-center w-[80%]">
    <input ref="fileInput" type="file" @input="pickFile" />
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage"
    >
      <img :src="{ previewImage }" />
    </div>
    <button
      class="my-2 justify-center rounded-md bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:w-auto"
      type="submit"
      @click="presidentStore.uploadImage"
    >
      Import Club Image
    </button>
  </form>
</template>

<script>
import { usePresidentStore } from "../stores/user";
import axios from "axios";
const presidentStore = usePresidentStore();

export default {
  data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
  },
};
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
