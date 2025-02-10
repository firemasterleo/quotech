import { defineStore } from "pinia";

export const useImageStore = defineStore("image", {
  state: () => ({
    heroImage: "/src/assets/hero-piccc.png", // Default image path
  }),
  actions: {
    setHeroImage(imageUrl) {
      this.heroImage = imageUrl;
    },
  },
  persist: {
    storage: localStorage,  // Use localStorage for persistence (default)
    paths: ['heroImage'],   // Optionally specify which state properties to persist
  }
});