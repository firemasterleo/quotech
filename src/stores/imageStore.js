import { defineStore } from "pinia";

export const useImageStore = defineStore("image", {
  state: () => ({
    heroImage: "src/assets/hero-picc.png", // Default image path
  }),
  actions: {
    setHeroImage(imageUrl) {
      this.heroImage = imageUrl;
    },
  },
  persist: true, // Enables the persistence feature for this store

});