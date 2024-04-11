const apiKey = 'YOUR_YELP_API_KEY';
const cuisine = 'Italian';
const latitude = 37.7749; // Example latitude
const longitude = -122.4194; // Example longitude
const priceRange = '1,2'; // Example price range ($, $$)

// Construct the API request URL
const url = `https://api.yelp.com/v3/businesses/search?term=${cuisine}&latitude=${latitude}&longitude=${longitude}&price=${priceRange}`;

// Make the API request using fetch
fetch(url, {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})
  .then(response => response.json())
  .then(data => {
    // Process the response data
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
