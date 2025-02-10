<template>
    <form name="newsletter" method="POST" data-netlify="true" @submit.prevent="handleSubmit">
      <!-- Hidden Input for Netlify Form Identification -->
      <input type="hidden" name="form-name" value="newsletter" />
      
      <!-- Optional Hidden Honeypot to Block Bots -->
      <input type="hidden" name="bot-field" />
  
      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email" required>
  
      <button type="submit">Subscribe</button>
    </form>
  
    <!-- Thank You Message -->
    <div v-if="isSubmitted" class="thank-you-message">
      <h2>Thank You for Submitting!</h2>
      <p>We appreciate your subscription.</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isSubmitted = ref(false); // Track if the form has been submitted
  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    
    const formData = new FormData(event.target);
  
    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });
  
      // Handle the response (if success, show the thank you message)
      if (response.ok) {
        isSubmitted.value = true; // Show the Thank You message
      } else {
        alert("Sorry, there was an error with your submission. Please try again.");
      }
    } catch (error) {
      alert("Error: " + error);
    }
  };
  </script>
  
  <style scoped>
  .thank-you-message {
    margin-top: 20px;
    padding: 10px;
    background-color: #dff0d8;
    border: 1px solid #d0e9c6;
    color: #3c763d;
    border-radius: 4px;
  }
  
  .thank-you-message h2 {
    margin: 0;
    font-size: 1.5em;
  }
  
  .thank-you-message p {
    margin: 10px 0 0;
  }
  </style>
  