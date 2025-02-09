<template>
    <div class="newsletter-bar">
      <p>Subscribe to our newsletter!</p>
      <form @submit.prevent="subscribe">
        <input v-model="email" type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const email = ref('');
      const message = ref('');
  
      const subscribe = async () => {
        if (!email.value) return;
  
        try {
          const response = await fetch('/.netlify/functions/newsletter-signup', {
            method: 'POST',
            body: JSON.stringify({ email: email.value }),
            headers: { 'Content-Type': 'application/json' },
          });
  
          const data = await response.json();
          message.value = data.message || 'Thank you for subscribing!';
          email.value = ''; // Clear input
        } catch (error) {
          message.value = 'Something went wrong. Please try again.';
        }
      };
  
      return { email, message, subscribe };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .newsletter-bar {
    background: #f8f9fa;
    padding: 10px;
    text-align: center;
  }
  input {
    padding: 8px;
    margin-right: 5px;
  }
  button {
    padding: 8px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  .message {
    margin-top: 10px;
    color: green;
  }
  </style>
  