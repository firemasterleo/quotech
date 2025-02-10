import { defineStore } from "pinia";

export const useImageStore = defineStore("image", {
  state: () => ({
    heroImage: "../assets/hero-piccc.png", // Default image path
  }),
  actions: {
    setHeroImage(imageUrl) {
      this.heroImage = imageUrl;
    },
  },
});