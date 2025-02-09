

<template>
    <div
      ref="content"
      class="scrolling-content"
      @mouseover="pauseAnimation"
      @mouseleave="resumeAnimation"
    >
      <!-- Hardcoded divs for testing -->
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
      <div class="item">Item 4</div>
      <div class="item">Item 5</div>
      <div class="item">Item 6</div>
      <div class="item">Item 7</div>
      <div class="item">Item 8</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import { gsap } from "gsap";
  import { Draggable } from "gsap/Draggable";
  
  // Register GSAP plugins
  gsap.registerPlugin(Draggable);
  
  // Refs and reactive variables
  const content = ref(null);
  let animation = null;
  let draggable = null;
  let contentWidth = 0;
  let dragPosition = 0;  // Track the drag position
  
  // Mounting the animation and draggable logic
  onMounted(() => {
    setupAnimation();
    setupDraggable();
  });
  
  // Setup the auto-scrolling animation
  function setupAnimation() {
    // Duplicate content for seamless looping
    content.value.innerHTML += content.value.innerHTML;
  
    // Calculate the total width of the content
    contentWidth = content.value.offsetWidth / 2;
  
    // GSAP animation with smooth loop
    animation = gsap.to(content.value, {
      x: `-=${contentWidth}`,
      duration: 15,
      repeat: -1,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize(modifyX), // Ensure seamless looping
      },
      paused: true, // Start paused until drag completes
    });
  }
  
  // Setup the draggable functionality
  function setupDraggable() {
    draggable = Draggable.create(content.value, {
      type: "x",
      ease: "power3.out", // Smooth easing for drag
      inertia: true,
      dragResistance: .3,
      edgeResistance: .2,
      throwProps: true, // Enable momentum-based throw effect
      onDrag: () => {
        // Pause the animation while dragging
        animation.pause();
        dragPosition = parseFloat(content.value._gsap.x); // Track drag position
      },
      onRelease: () => {
        // After drag release, stop modifying the position and let the content stay
        animation.seek(animation.totalTime() + dragPosition); // Continue from the new drag position
      }
    });
  }
  
  // Modify x position for seamless looping
  function modifyX(x) {
    return (parseFloat(x) % contentWidth) || 0;
  }
  
  // Pause the animation on hover
  function pauseAnimation() {
    animation.pause();
  }
  
  // Resume the animation when hover leaves
  function resumeAnimation() {
    // Resume from the drag position (dragPosition is the position where drag left off)
    animation.play();
    animation.seek(dragPosition);
  }
  
  // Cleanup on component destruction
  onBeforeUnmount(() => {
    if (animation) animation.kill();
    if (draggable) draggable[0].kill();
  });
  </script>
  
  <style scoped>
  .scrolling-content {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    cursor: grab; /* Change cursor to indicate draggable area */
  }
  
  .scrolling-content:active {
    cursor: grabbing; /* Change cursor when dragging */
  }
  
  .item {
    padding: 20px;
    background-color: #f0f0f0;
    margin: 0 10px;
  }
  </style>
  