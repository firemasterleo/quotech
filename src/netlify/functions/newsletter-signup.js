const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { email } = JSON.parse(event.body);

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Email is required' }),
    };
  }

  try {
    // Example: Send email to a Google Sheet, API, or newsletter service like Mailchimp
    console.log(`New subscriber: ${email}`);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subscription successful!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};