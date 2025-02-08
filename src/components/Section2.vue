<template>
    <div class="infinite-scroll-container" ref="container" @mouseenter="pauseAnimation" @mouseleave="resumeAnimation">
      <div class="scroll-content" ref="content">
        <!-- Your content goes here -->
        <div v-for="(item, index) in items" :key="index" class="item">
          {{ item }}
        </div>
        <div v-for="(item, index) in items" :key="index" class="item">
          {{ item }}
        </div>
        <div v-for="(item, index) in items" :key="index" class="item">
          {{ item }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { gsap } from "gsap";
  import { Draggable } from "gsap/Draggable";
  
  gsap.registerPlugin(Draggable);
  
  export default {
    data() {
      return {
        items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"], // Replace with your content
        animation: null,
        draggable: null,
        contentWidth: 0,
      };
    },
    mounted() {
      this.setupAnimation();
      this.setupDraggable();
    },
    methods: {
      setupAnimation() {
        const content = this.$refs.content;
  
        // Duplicate content for seamless looping
        content.innerHTML += content.innerHTML;
  
        // Calculate the total width of the content
        this.contentWidth = content.offsetWidth / 2;
  
        // GSAP animation
        this.animation = gsap.to(content, {
          x: `-=${this.contentWidth}`,
          duration: 15,
          repeat: -1,
          ease: "none",
          modifiers: {
            x: gsap.utils.unitize((x) => this.modifyX(x)), // Ensure seamless looping
          },
        });
      },
      setupDraggable() {
        const content = this.$refs.content;
  
        // Make content draggable
        this.draggable = Draggable.create(content, {
          type: "x",
          ease: "cubic-bezier(0.25, 1, 0.5, 1)",

          inertia: true,
          onDrag: () => {
            this.animation.pause(); // Pause auto-scroll while dragging
            this.updatePosition(); // Update position for infinite drag
          },
          onThrowUpdate: () => {
            this.updatePosition(); // Update position during throw (inertia)
          },
          onRelease: () => {
            this.animation.play(); // Resume auto-scroll after dragging
          },
        });
      },
      updatePosition() {
        const content = this.$refs.content;
        const x = parseFloat(content._gsap.x); // Get current x position
  
        // Wrap the position to create infinite scroll
        if (x <= -this.contentWidth) {
          gsap.set(content, { x: x + this.contentWidth });
        } else if (x >= 0) {
          gsap.set(content, { x: x - this.contentWidth });
        }
      },
      modifyX(x) {
        // Ensure seamless looping during animation
        return (parseFloat(x) % this.contentWidth) || 0;
      },
      pauseAnimation() {
        this.animation.pause();
      },
      resumeAnimation() {
        this.animation.play();
      },
    },
    beforeDestroy() {
      // Clean up GSAP instances
      if (this.animation) this.animation.kill();
      if (this.draggable) this.draggable[0].kill();
    },
  };
  </script>
  
  <style scoped>
  .infinite-scroll-container {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .scroll-content {
    display: flex;
    width: max-content;
  }
  
  .item {
    padding: 20px;
    margin: 0 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    white-space: nowrap;
  }
  </style>