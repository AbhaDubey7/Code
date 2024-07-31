const axios = require('axios');

// Function to get pets by status
//This code will make a GET request to the endpoint and process the response based on different status values (sold, available, pending).
async function getPetsByStatus(status) {
  const BASE_URL = 'https://petstore.swagger.io/v2';

  try {
    // Making the GET request
    const response = await axios.get(`${BASE_URL}/pet/findByStatus`, {
      params: {
        status: status // Passing the status as a query parameter
      }
    });

    // Handling the response
    if (response.status === 200) {
      console.log('Successful Operation');
      // Process and print the response data
      console.log('Response Data:', JSON.stringify(response.data, null, 2));
    } else {
      console.log('Unexpected Status Code:', response.status);
    }
    
  } catch (error) {
    // Handling errors
    if (error.response) {
      console.log('Error Status:', error.response.status);
      console.log('Error Data:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.log('Error Message:', error.message);
    }
  }
}

// Example usage
getPetsByStatus('pending'); // You can change values 'sold' or 'available' or 'pending'