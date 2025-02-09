<template>
<form name="newsletter-signup" method="POST" data-netlify="true">
  <label for="email">Email Address:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Subscribe</button>
</form>
  </template>
  

  
  <style lang="scss" scoped>
 /* General form styles */
form[name="newsletter-signup"] {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

/* Label styles */
form[name="newsletter-signup"] label {
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

/* Input field styles */
form[name="newsletter-signup"] input[type="email"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

form[name="newsletter-signup"] input[type="email"]:focus {
  border-color: #007BFF;
  outline: none;
}

/* Button styles */
form[name="newsletter-signup"] button {
  width: 100%;
  padding: 12px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

form[name="newsletter-signup"] button:hover {
  background-color: #0056b3;
}

/* Responsive styles */
@media (max-width: 600px) {
  form[name="newsletter-signup"] {
    padding: 15px;
  }

  form[name="newsletter-signup"] input[type="email"],
  form[name="newsletter-signup"] button {
    font-size: 14px;
  }
}
  </style>
  