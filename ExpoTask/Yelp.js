const axios = require('axios');
 
const apiKey = 'o7Hy7vuQYgzCO6VxjqImrn6A3XiCw7HfSv9KbofZBv2BzIJsNV1wp-l-OXpoibDkbyjPpq2pRx6L7NWdZG3eXWtzkC2i2ZgSrFGXCkO2bElErwdZ_1vikzLZav4XZnYx';
const cuisine = 'italian';
const restaurants = 'restaurants';
const latitude = 37.7749; // Example latitude
const longitude = -122.4194; // Example longitude
const priceRange = '2'; // Example price range ($, $$)
 
// Yelp API endpoint
const apiUrl = `https://api.yelp.com/v3/businesses/search?term=${restaurants}&latitude=${latitude}&longitude=${longitude}&caterories=${cuisine}&price=${priceRange}`;
 
// Headers required for Yelp API authorization
const headers = {
  Authorization: `Bearer ${apiKey}`
};
 
// Make the API call
axios.get(apiUrl, { headers })
  .then(response => {
    console.log('Response from Yelp API:');
    console.log(response.data);
    // Handle the response data as needed
  })
  .catch(error => {
    console.error('Error fetching data from Yelp API:', error);
  });

  ////////////////////////
  {
    "businesses": [
      {
        "id": "ma-IFK7XaRdVwA9lxNyMXA",
        "alias": "señor-sisig-food-trucks-san-francisco-3",
        "name": "Señor Sisig - Food Trucks",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/eCuzQUt4gyolCvGRZhyebw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/se%C3%B1or-sisig-food-trucks-san-francisco-3?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
        "review_count": 1690,
        "categories": [
          {
            "alias": "filipino",
            "title": "Filipino"
          },
          {
            "alias": "foodtrucks",
            "title": "Food Trucks"
          },
          {
            "alias": "asianfusion",
            "title": "Asian Fusion"
          }
        ],
        "rating": 4.2,
        "coordinates": {
          "latitude": 37.7749295,
          "longitude": -122.4194155
        },
        "transactions": [
          "pickup"
        ],
        "price": "$$",
        "location": {
          "address1": "",
          "address2": null,
          "address3": "",
          "city": "San Francisco",
          "zip_code": "94104",
          "country": "US",
          "state": "CA",
          "display_address": [
            "San Francisco, CA 94104"
          ]
        },
        "phone": "+18557474455",
        "display_phone": "(855) 747-4455",
        "distance": 3.5518877598013003,
        "attributes": {
          "business_temp_closed": null,
          "menu_url": "https://www.senorsisig.com/menu",
          "open24_hours": null,
          "waitlist_reservation": null
        }
      },
      {
        "id": "LkKjTQOZECM8vqaD3kSDoA",
        "alias": "rt-rotisserie-san-francisco",
        "name": "RT Rotisserie",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/LM4nS4nTslJaM-ZkVBy1rg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/rt-rotisserie-san-francisco?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
        "review_count": 668,
        "categories": [
          {
            "alias": "salad",
            "title": "Salad"
          },
          {
            "alias": "soup",
            "title": "Soup"
          },
          {
            "alias": "sandwiches",
            "title": "Sandwiches"
          }
        ],
        "rating": 4.2,
        "coordinates": {
          "latitude": 37.7750432,
          "longitude": -122.4211143
        },
        "transactions": [],
        "price": "$$",
        "location": {
          "address1": "101 Oak St",
          "address2": "",
          "address3": null,
          "city": "San Francisco",
          "zip_code": "94102",
          "country": "US",
          "state": "CA",
          "display_address": [
            "101 Oak St",
            "San Francisco, CA 94102"
          ]
        },
        "phone": "+14153559085",
        "display_phone": "(415) 355-9085",
        "distance": 143.76034509354233,
        "attributes": {
          "business_temp_closed": null,
          "menu_url": "https://www.rtrotisserie.com/nopa-menu-1/",
          "open24_hours": null,
          "waitlist_reservation": null
        }
      },
      {
        "id": "GNlmRz_DIkNT1PsLhR2zSw",
        "alias": "little-griddle-san-francisco-4",
        "name": "Little Griddle",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/UegZG7TEr4zdOlejAjmLiQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/little-griddle-san-francisco-4?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
        "review_count": 105,
        "categories": [
          {
            "alias": "coffee",
            "title": "Coffee & Tea"
          },
          {
            "alias": "breakfast_brunch",
            "title": "Breakfast & Brunch"
          },
          {
            "alias": "burgers",
            "title": "Burgers"
          }
        ],
        "rating": 3.9,
        "coordinates": {
          "latitude": 37.775736486686775,
          "longitude": -122.41823404585584
        },
        "transactions": [
          "pickup",
          "delivery"
        ],
        "price": "$$",
        "location": {
          "address1": "1455 Market St",
          "address2": null,
          "address3": "Dough Cafe",
          "city": "San Francisco",
          "zip_code": "94103",
          "country": "US",
          "state": "CA",
          "display_address": [
            "1455 Market St",
            "Dough Cafe",
            "San Francisco, CA 94103"
          ]
        },
        "phone": "+14158644292",
        "display_phone": "(415) 864-4292",
        "distance": 138.39363861135882,
        "attributes": {
          "business_temp_closed": null,
          "menu_url": "https://www.eatlittlegriddle.com/menus/",
          "open24_hours": null,
          "waitlist_reservation": null
        }
      },
      {
        "id": "c9VZtF34xQBdazi8k-YIMA",
        "alias": "the-italian-homemade-company-san-francisco-7",
        "name": "The Italian Homemade Company",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/H-39ZSvOcP4VowVSmIEyiA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-italian-homemade-company-san-francisco-7?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
        "review_count": 362,
        "categories": [
          {
            "alias": "italian",
            "title": "Italian"
          },
          {
            "alias": "desserts",
            "title": "Desserts"
          },
          {
            "alias": "piadina",
            "title": "Piadina"
          }
        ],
        "rating": 3.7,
        "coordinates": {
          "latitude": 37.774414,
          "longitude": -122.420937
        },
        "transactions": [
          "pickup",
          "delivery"
        ],
        "price": "$$",
        "location": {
          "address1": "1 Franklin St",
          "address2": null,
          "address3": null,
          "city": "San Francisco",
          "zip_code": "94102",
          "country": "US",
          "state": "CA",
          "display_address": [
            "1 Franklin St",
            "San Francisco, CA 94102"
          ]
        },
        "phone": "+14157570877",
        "display_phone": "(415) 757-0877",
        "distance": 145.49707731498702,
        "attributes": {
          "business_temp_closed": null,
          "menu_url": "https://italianhomemade.com/menu.pdf",
          "open24_hours": null,
          "waitlist_reservation": null
        }
      },
      {
        "id": "1IqqA8pcuCIWJtuKfHwU8g",
        "alias": "nojo-ramen-tavern-san-francisco-6",
        "name": "Nojo Ramen Tavern",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/f8jcPmO2OhZr9w11Bj2zeg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/nojo-ramen-tavern-san-francisco-6?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
        "review_count": 1255,
        "categories": [
          {
            "alias": "ramen",
            "title": "Ramen"
          },
          {
            "alias": "izakaya",
            "title": "Izakaya"
          }
        ],
        "rating": 4.2,
        "coordinates": {
          "latitude": 37.77669,
          "longitude": -122.42151
        },
        "transactions": [
          "pickup",
          "delivery"
        ],
        "price": "$$",
        "location": {
          "address1": "231 Franklin St",
          "address2": "",
          "address3": "",
          "city": "San Francisco",
          "zip_code": "94102",
          "country": "US",
          "state": "CA",
          "display_address": [
            "231 Franklin St",
            "San Francisco, CA 94102"
          ]
        },
        "phone": "+14158964587",
        "display_phone": "(415) 896-4587",
        "distance": 266.9837901636103,
        "attributes": {
          "business_temp_closed": null,
          "menu_url": "https://res.cloudinary.com/nojo/image/upload/v1/menu.pdf",
          "open24_hours": null,
          "waitlist_reservation": true
        }
      },
      {
        "id": "Je2KUIL7siL6UtqHmtOkPA",
        "alias": "kagawa-ya-udon-san-francisco",
        "name": "Kagawa-Ya Udon",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/2yQE5WUH1ggojIqGNM26SA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/kagawa-ya-udon-san-francisco?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
        "review_count": 378,
        "categories": [
          {
            "alias": "noodles",
            "title": "Noodles"
          },
          {
            "alias": "japacurry",
            "title": "Japanese Curry"
          }
        ],
        "rating": 4,
        "coordinates": {
          "latitude": 37.7752315,
          "longitude": -122.4175278
        },
        "transactions": [
          "pickup",
          "delivery"
        ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "1455 Market St",
  //         "address2": "Ste 3A",
  //         "address3": null,
  //         "city": "San Francisco",
  //         "zip_code": "94103",
  //         "country": "US",
  //         "state": "CA",
  //         "display_address": [
  //           "1455 Market St",
  //           "Ste 3A",
  //           "San Francisco, CA 94103"
  //         ]
  //       },
  //       "phone": "+14157030995",
  //       "display_phone": "(415) 703-0995",
  //       "distance": 168.62725863130024,
  //       "attributes": {
  //         "business_temp_closed": 1730358000,
  //         "menu_url": "https://kagawayaudonsf.square.site/",
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "EWSZ5U7y8q_8Pe9mAXzdvA",
  //       "alias": "market-street-gyro-san-francisco",
  //       "name": "Market street Gyro",
  //       "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/v7eFIvZPqFlBO-_KN-pffQ/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/market-street-gyro-san-francisco?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 66,
  //       "categories": [
  //         {
  //           "alias": "wine_bars",
  //           "title": "Wine Bars"
  //         },
  //         {
  //           "alias": "mediterranean",
  //           "title": "Mediterranean"
  //         },
  //         {
  //           "alias": "greek",
  //           "title": "Greek"
  //         }
  //       ],
  //       "rating": 4.3,
  //       "coordinates": {
  //         "latitude": 37.77636,
  //         "longitude": -122.418093
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "1400 Market St",
  //         "address2": null,
  //         "address3": "",
  //         "city": "San Francisco",
  //         "zip_code": "94102",
  //         "country": "US",
  //         "state": "CA",
  //         "display_address": [
  //           "1400 Market St",
  //           "San Francisco, CA 94102"
  //         ]
  //       },
  //       "phone": "+14158759068",
  //       "display_phone": "(415) 875-9068",
  //       "distance": 211.32986082022938,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "https://www.marketstreetgyro.com/product",
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "g1ycmGtoAbFcL-qOXuuVLw",
  //       "alias": "crossroad-pizzeria-san-francisco",
  //       "name": "Crossroad Pizzeria",
  //       "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/UxS3-qOoS8X8nqK7UMWwZg/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/crossroad-pizzeria-san-francisco?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 45,
  //       "categories": [
  //         {
  //           "alias": "pizza",
  //           "title": "Pizza"
  //         }
  //       ],
  //       "rating": 4.3,
  //       "coordinates": {
  //         "latitude": 37.7743313308543,
  //         "longitude": -122.420420772243
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "1596 Market St",
  //         "address2": "",
  //         "address3": null,
  //         "city": "San Francisco",
  //         "zip_code": "94102",
  //         "country": "US",
  //         "state": "CA",
  //         "display_address": [
  //           "1596 Market St",
  //           "San Francisco, CA 94102"
  //         ]
  //       },
  //       "phone": "+14159477957",
  //       "display_phone": "(415) 947-7957",
  //       "distance": 122.78709003611085,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": null,
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "b8e7zvBW9Zbu6jaNgZof1g",
  //       "alias": "pokebola-san-francisco",
  //       "name": "Pokebola",
  //       "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/y7XtjP5blfwTwuO5cZSWHQ/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/pokebola-san-francisco?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 48,
  //       "categories": [
  //         {
  //           "alias": "poke",
  //           "title": "Poke"
  //         },
  //         {
  //           "alias": "hawaiian",
  //           "title": "Hawaiian"
  //         },
  //         {
  //           "alias": "japanese",
  //           "title": "Japanese"
  //         }
  //       ],
  //       "rating": 4.4,
  //       "coordinates": {
  //         "latitude": 37.776059,
  //         "longitude": -122.419853
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "77 Van Ness Ave",
  //         "address2": null,
  //         "address3": "",
  //         "city": "San Francisco",
  //         "zip_code": "94102",
  //         "country": "US",
  //         "state": "CA",
  //         "display_address": [
  //           "77 Van Ness Ave",
  //           "San Francisco, CA 94102"
  //         ]
  //       },
  //       "phone": "+14156559293",
  //       "display_phone": "(415) 655-9293",
  //       "distance": 136.82336388370646,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "https://www.pokebolasf.com/menu",
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "_gHU7DSK2gFVRLx651c8ig",
  //       "alias": "spice-of-america-san-francisco-2",
  //       "name": "Spice of America",
  //       "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/3F3H3WuPja7G34co26Ct3A/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/spice-of-america-san-francisco-2?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 314,
  //       "categories": [
  //         {
  //           "alias": "indpak",
  //           "title": "Indian"
  //         },
  //         {
  //           "alias": "himalayan",
  //           "title": "Himalayan/Nepalese"
  //         },
  //         {
  //           "alias": "desserts",
  //           "title": "Desserts"
  //         }
  //       ],
  //       "rating": 4.4,
  //       "coordinates": {
  //         "latitude": 37.7732557,
  //         "longitude": -122.4214596
  //       },
  //       "transactions": [
  //         "restaurant_reservation",
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "1655 Market St",
  //         "address2": null,
  //         "address3": null,
  //         "city": "San Francisco",
  //         "zip_code": "94103",
  //         "country": "US",
  //         "state": "CA",
  //         "display_address": [
  //           "1655 Market St",
  //           "San Francisco, CA 94103"
  //         ]
  //       },
  //       "phone": "+14158727187",
  //       "display_phone": "(415) 872-7187",
  //       "distance": 246.6026983661239,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": null,
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "QWZO1RdLbG5h0RGDiItoAA",
  //       "alias": "zaoh-restaurant-san-francisco",
  //       "name": "Zaoh Restaurant",
  //       "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vwfE4NWNJrmxHVIkkY7nfw/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/zaoh-restaurant-san-francisco?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 378,
  //       "categories": [
  //         {
  //           "alias": "sushi",
  //           "title": "Sushi Bars"
  //         },
  //         {
  //           "alias": "japanese",
  //           "title": "Japanese"
  //         }
  //       ],
  //       "rating": 3.9,
  //       "coordinates": {
  //         "latitude": 37.773279,
  //         "longitude": -122.417995
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "1555 Mission St",
  //         "address2": "",
  //         "address3": "",
  //         "city": "San Francisco",
  //         "zip_code": "94103",
  //         "country": "US",
  //         "state": "CA",
  //         "display_address": [
  //           "1555 Mission St",
  //           "San Francisco, CA 94103"
  //         ]
  //       },
  //       "phone": "+14154313930",
  //       "display_phone": "(415) 431-3930",
  //       "distance": 218.18827403330621,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "https://orderzaoh.com/menu",
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     }
  //   ],
  //   "total": 11,
  //   "region": {
  //     "center": {
  //       "longitude": -122.4194,
  //       "latitude": 37.7749
  //     }
  //   }
  // }
  // //noodles
  // {
  //   "businesses": [
  //     {
  //       "id": "Je2KUIL7siL6UtqHmtOkPA",
  //       "alias": "kagawa-ya-udon-san-francisco",
  //       "name": "Kagawa-Ya Udon",
  //       "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/2yQE5WUH1ggojIqGNM26SA/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/kagawa-ya-udon-san-francisco?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 378,
  //       "categories": [
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         },
  //         {
  //           "alias": "japacurry",
  //           "title": "Japanese Curry"
  //         }
  //       ],
  //       "rating": 4,
  //       "coordinates": {
  //         "latitude": 37.7752315,
  //         "longitude": -122.4175278
  //       },
  //       "transactions": [
  //         "delivery",
  //         "pickup"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "1455 Market St",
  //         "address2": "Ste 3A",
  //         "address3": null,
  //         "city": "San Francisco",
  //         "zip_code": "94103",
  //         "country": "US",
  //         "state": "CA",
  //         "display_address": [
  //           "1455 Market St",
  //           "Ste 3A",
  //           "San Francisco, CA 94103"
  //         ]
  //       },
  //       "phone": "+14157030995",
  //       "display_phone": "(415) 703-0995",
  //       "distance": 168.62725863130024,
  //       "attributes": {
  //         "business_temp_closed": 1730358000,
  //         "menu_url": "https://kagawayaudonsf.square.site/",
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     }
  //   ],
  //   "total": 1,
  //   "region": {
  //     "center": {
  //       "longitude": -122.4194,
  //       "latitude": 37.7749
  //     }
  //   }
  // }
  // //new york
  // {
  //   "businesses": [
  //     {
  //       "id": "-XYp6w50XbZfS90YddS5ew",
  //       "alias": "soothr-new-york-2",
  //       "name": "Soothr",
  //       "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/YmwengvsTcB7yXAZftYZPw/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/soothr-new-york-2?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 1288,
  //       "categories": [
  //         {
  //           "alias": "thai",
  //           "title": "Thai"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         },
  //         {
  //           "alias": "cocktailbars",
  //           "title": "Cocktail Bars"
  //         }
  //       ],
  //       "rating": 4.5,
  //       "coordinates": {
  //         "latitude": 40.732259,
  //         "longitude": -73.987363
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "204 E 13th St",
  //         "address2": "",
  //         "address3": null,
  //         "city": "New York",
  //         "zip_code": "10003",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "204 E 13th St",
  //           "New York, NY 10003"
  //         ]
  //       },
  //       "phone": "+12128449789",
  //       "display_phone": "(212) 844-9789",
  //       "distance": 3031.818788296325,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": null,
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "qEe7nIhPfEL6L0-VYhWRrA",
  //       "alias": "raku-new-york-6",
  //       "name": "Raku",
  //       "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/uJUyb5gO9Cc5RQbB5BtIjw/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/raku-new-york-6?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 982,
  //       "categories": [
  //         {
  //           "alias": "japanese",
  //           "title": "Japanese"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         }
  //       ],
  //       "rating": 4.5,
  //       "coordinates": {
  //         "latitude": 40.7272479,
  //         "longitude": -74.00253944171621
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "48 Macdougal St",
  //         "address2": null,
  //         "address3": "",
  //         "city": "New York",
  //         "zip_code": "10012",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "48 Macdougal St",
  //           "New York, NY 10012"
  //         ]
  //       },
  //       "phone": "+12129894797",
  //       "display_phone": "(212) 989-4797",
  //       "distance": 2511.9975195227316,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "https://rakunyc.com/pages/menu-soho",
  //         "open24_hours": null,
  //         "waitlist_reservation": false
  //       }
  //     },
  //     {
  //       "id": "0CjK3esfpFcxIopebzjFxA",
  //       "alias": "joes-shanghai-new-york-2",
  //       "name": "Joe's Shanghai",
  //       "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ORdfWyMHOtWoL6bYHotsaA/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/joes-shanghai-new-york-2?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 7322,
  //       "categories": [
  //         {
  //           "alias": "shanghainese",
  //           "title": "Shanghainese"
  //         },
  //         {
  //           "alias": "seafood",
  //           "title": "Seafood"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         }
  //       ],
  //       "rating": 3.8,
  //       "coordinates": {
  //         "latitude": 40.7156608,
  //         "longitude": -73.9967012
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "46 Bowery St",
  //         "address2": "",
  //         "address3": "",
  //         "city": "New York",
  //         "zip_code": "10013",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "46 Bowery St",
  //           "New York, NY 10013"
  //         ]
  //       },
  //       "phone": "+12122338888",
  //       "display_phone": "(212) 233-8888",
  //       "distance": 1143.4057924396468,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "https://www.joeshanghairestaurants.com/about-1",
  //         "open24_hours": null,
  //         "waitlist_reservation": true
  //       }
  //     },
  //     {
  //       "id": "wdGMVLUzocmnl2tST0lheg",
  //       "alias": "yunshang-rice-noodle-house-new-york-5",
  //       "name": "YunShang Rice Noodle House",
  //       "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/SjIXo1UaVlguIb5on6CYdA/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/yunshang-rice-noodle-house-new-york-5?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 390,
  //       "categories": [
  //         {
  //           "alias": "chinese",
  //           "title": "Chinese"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         },
  //         {
  //           "alias": "asianfusion",
  //           "title": "Asian Fusion"
  //         }
  //       ],
  //       "rating": 4.1,
  //       "coordinates": {
  //         "latitude": 40.71525,
  //         "longitude": -73.99765
  //       },
  //       "transactions": [
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "53 Bayard St",
  //         "address2": null,
  //         "address3": "",
  //         "city": "New York",
  //         "zip_code": "10014",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "53 Bayard St",
  //           "New York, NY 10014"
  //         ]
  //       },
  //       "phone": "+16469985223",
  //       "display_phone": "(646) 998-5223",
  //       "distance": 1109.9534641378477,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": null,
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "7bpZZUpEclhn29wWVqFsKA",
  //       "alias": "lucky-rabbit-noodles-brooklyn",
  //       "name": "Lucky Rabbit Noodles",
  //       "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/hD5Y2UP7w-fCcKaWMcLfZg/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/lucky-rabbit-noodles-brooklyn?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 78,
  //       "categories": [
  //         {
  //           "alias": "tapasmallplates",
  //           "title": "Tapas/Small Plates"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         }
  //       ],
  //       "rating": 4.6,
  //       "coordinates": {
  //         "latitude": 40.70375,
  //         "longitude": -73.98809
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "140 Plymouth St",
  //         "address2": "",
  //         "address3": null,
  //         "city": "Brooklyn",
  //         "zip_code": "11201",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "140 Plymouth St",
  //           "Brooklyn, NY 11201"
  //         ]
  //       },
  //       "phone": "+13479160098",
  //       "display_phone": "(347) 916-0098",
  //       "distance": 552.2472907350264,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": null,
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "FlZ1zdVEKWv7dwqm8Uw8-w",
  //       "alias": "raku-new-york-7",
  //       "name": "Raku",
  //       "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/GEbZnH1jR4n7D5WOJ3urPg/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/raku-new-york-7?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 1639,
  //       "categories": [
  //         {
  //           "alias": "japanese",
  //           "title": "Japanese"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         }
  //       ],
  //       "rating": 4.4,
  //       "coordinates": {
  //         "latitude": 40.7264988089246,
  //         "longitude": -73.9866526052356
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "342 E 6th St",
  //         "address2": "",
  //         "address3": "",
  //         "city": "New York",
  //         "zip_code": "10003",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "342 E 6th St",
  //           "New York, NY 10003"
  //         ]
  //       },
  //       "phone": "+12122281324",
  //       "display_phone": "(212) 228-1324",
  //       "distance": 2416.6027147072045,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "https://rakunyc.com/pages/menu-east-village",
  //         "open24_hours": null,
  //         "waitlist_reservation": true
  //       }
  //     },
  //     {
  //       "id": "9I8mZXCkGZBmFh5fYOYorw",
  //       "alias": "em-vietnamese-bistro-brooklyn",
  //       "name": "Em Vietnamese Bistro",
  //       "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/X5x7qygyUV4-zNKwHiUuZg/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/em-vietnamese-bistro-brooklyn?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 184,
  //       "categories": [
  //         {
  //           "alias": "vietnamese",
  //           "title": "Vietnamese"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         },
  //         {
  //           "alias": "sandwiches",
  //           "title": "Sandwiches"
  //         }
  //       ],
  //       "rating": 4.3,
  //       "coordinates": {
  //         "latitude": 40.702670064808366,
  //         "longitude": -73.99118578021728
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "57 Front St",
  //         "address2": "",
  //         "address3": null,
  //         "city": "Brooklyn",
  //         "zip_code": "11201",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "57 Front St",
  //           "Brooklyn, NY 11201"
  //         ]
  //       },
  //       "phone": "+17188757888",
  //       "display_phone": "(718) 875-7888",
  //       "distance": 411.72273431664553,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "https://www.emrestaurants.com/menu",
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "xtxcAUvrD4dWHJd0cwvW1A",
  //       "alias": "jeju-noodle-bar-new-york",
  //       "name": "JeJu Noodle Bar",
  //       "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Y4pR--TEJCbfh8zOT0yE8g/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/jeju-noodle-bar-new-york?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 1067,
  //       "categories": [
  //         {
  //           "alias": "korean",
  //           "title": "Korean"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         },
  //         {
  //           "alias": "wine_bars",
  //           "title": "Wine Bars"
  //         }
  //       ],
  //       "rating": 4.2,
  //       "coordinates": {
  //         "latitude": 40.73304,
  //         "longitude": -74.00734
  //       },
  //       "transactions": [
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "679 Greenwich St",
  //         "address2": "",
  //         "address3": null,
  //         "city": "New York",
  //         "zip_code": "10014",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "679 Greenwich St",
  //           "New York, NY 10014"
  //         ]
  //       },
  //       "phone": "+16466660947",
  //       "display_phone": "(646) 666-0947",
  //       "distance": 3246.4669387254835,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "https://qcg-media.s3.amazonaws.com/media/uploads/84442/2021/09/20210910_344918_Jejudinnernosquid.pdf",
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "oe8GEFE4QLFAKt87y7zcgA",
  //       "alias": "very-fresh-noodles-new-york",
  //       "name": "Very Fresh Noodles",
  //       "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/gRqfWsSDep7gFKGE4lChBQ/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/very-fresh-noodles-new-york?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 1533,
  //       "categories": [
  //         {
  //           "alias": "taiwanese",
  //           "title": "Taiwanese"
  //         },
  //         {
  //           "alias": "chinese",
  //           "title": "Chinese"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         }
  //       ],
  //       "rating": 4.4,
  //       "coordinates": {
  //         "latitude": 40.74207,
  //         "longitude": -74.00565
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "409 W 15th St",
  //         "address2": null,
  //         "address3": "",
  //         "city": "New York",
  //         "zip_code": "10011",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "409 W 15th St",
  //           "New York, NY 10011"
  //         ]
  //       },
  //       "phone": "+13322156161",
  //       "display_phone": "(332) 215-6161",
  //       "distance": 4173.332756974383,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "http://www.veryfreshnoodles.com/menu",
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "Vbmv3T7hr_owVic5BQXs5w",
  //       "alias": "din-soup-dumplings-brooklyn",
  //       "name": "Din Soup Dumplings",
  //       "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/HMlvTYvTPSaPxlpQibt3RQ/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/din-soup-dumplings-brooklyn?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 234,
  //       "categories": [
  //         {
  //           "alias": "dimsum",
  //           "title": "Dim Sum"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         }
  //       ],
  //       "rating": 4.5,
  //       "coordinates": {
  //         "latitude": 40.694191,
  //         "longitude": -73.992814
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "162 Montague St",
  //         "address2": "",
  //         "address3": null,
  //         "city": "Brooklyn",
  //         "zip_code": "11201",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "162 Montague St",
  //           "Brooklyn, NY 11201"
  //         ]
  //       },
  //       "phone": "+17185503888",
  //       "display_phone": "(718) 550-3888",
  //       "distance": 1268.5669878791891,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": null,
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "sRWRA4dcN_NR1JGpuRVouA",
  //       "alias": "nan-xiang-xiao-long-bao-manhattan-new-york",
  //       "name": "Nan Xiang Xiao Long Bao - Manhattan",
  //       "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/lmcpkjW6fo_uJqBnxxqk4w/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/nan-xiang-xiao-long-bao-manhattan-new-york?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 1027,
  //       "categories": [
  //         {
  //           "alias": "dimsum",
  //           "title": "Dim Sum"
  //         },
  //         {
  //           "alias": "desserts",
  //           "title": "Desserts"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         }
  //       ],
  //       "rating": 4.6,
  //       "coordinates": {
  //         "latitude": 40.74822527534694,
  //         "longitude": -73.9857786
  //       },
  //       "transactions": [],
  //       "price": "$$",
  //       "location": {
  //         "address1": "24 W 33rd St",
  //         "address2": null,
  //         "address3": "",
  //         "city": "New York",
  //         "zip_code": "10001",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "24 W 33rd St",
  //           "New York, NY 10001"
  //         ]
  //       },
  //       "phone": "+12129703888",
  //       "display_phone": "(212) 970-3888",
  //       "distance": 4799.346531977793,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "https://nanxiangxiaolongbao.com/menu-en/",
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "bnDfFdiCcPzhuNWUJORvLQ",
  //       "alias": "noodle-village-new-york-7",
  //       "name": "Noodle Village",
  //       "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/eDGcTQVA1JcnQ21736SfFg/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/noodle-village-new-york-7?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 1433,
  //       "categories": [
  //         {
  //           "alias": "chinese",
  //           "title": "Chinese"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         }
  //       ],
  //       "rating": 3.9,
  //       "coordinates": {
  //         "latitude": 40.714167,
  //         "longitude": -73.998803
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "13 Mott St",
  //         "address2": "",
  //         "address3": "",
  //         "city": "New York",
  //         "zip_code": "10013",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "13 Mott St",
  //           "New York, NY 10013"
  //         ]
  //       },
  //       "phone": "+12122330788",
  //       "display_phone": "(212) 233-0788",
  //       "distance": 1032.228888433224,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "http://nynoodlevillage.com/catalog.aspx?cid=37",
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "Pr-q47vsmM4aoc2t_Sfk8w",
  //       "alias": "momofuku-noodle-bar-uptown-new-york",
  //       "name": "Momofuku Noodle Bar - Uptown",
  //       "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/h08ukV9YwJXhQBT2kvCCIg/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/momofuku-noodle-bar-uptown-new-york?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 644,
  //       "categories": [
  //         {
  //           "alias": "newamerican",
  //           "title": "New American"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         },
  //         {
  //           "alias": "ramen",
  //           "title": "Ramen"
  //         }
  //       ],
  //       "rating": 4,
  //       "coordinates": {
  //         "latitude": 40.76802583631109,
  //         "longitude": -73.9829243
  //       },
  //       "transactions": [],
  //       "price": "$$",
  //       "location": {
  //         "address1": "10 Columbus Cir",
  //         "address2": "Third Floor",
  //         "address3": null,
  //         "city": "New York",
  //         "zip_code": "10019",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "10 Columbus Cir",
  //           "Third Floor",
  //           "New York, NY 10019"
  //         ]
  //       },
  //       "phone": "",
  //       "display_phone": "",
  //       "distance": 7012.889017139117,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "https://momofukunoodlebar.com/uptown/menu/food/",
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "97q5nUQTuBo_h00XCxna2A",
  //       "alias": "tasty-hand-pulled-noodles-new-york",
  //       "name": "Tasty Hand - Pulled Noodles",
  //       "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/FJttNYXtGvCsX0l0XoRxvg/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/tasty-hand-pulled-noodles-new-york?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 1885,
  //       "categories": [
  //         {
  //           "alias": "chinese",
  //           "title": "Chinese"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         }
  //       ],
  //       "rating": 3.9,
  //       "coordinates": {
  //         "latitude": 40.7142,
  //         "longitude": -73.99787
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "1 Doyers St",
  //         "address2": "",
  //         "address3": "",
  //         "city": "New York",
  //         "zip_code": "10013",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "1 Doyers St",
  //           "New York, NY 10013"
  //         ]
  //       },
  //       "phone": "+12127911817",
  //       "display_phone": "(212) 791-1817",
  //       "distance": 1007.822029499755,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": null,
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "SYFLyQAFRFoDURRWafeLKA",
  //       "alias": "lin-and-daughters-new-york",
  //       "name": "Lin & Daughters",
  //       "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/sMLgTo8owbts5VEMZ0IlXg/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/lin-and-daughters-new-york?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 84,
  //       "categories": [
  //         {
  //           "alias": "chinese",
  //           "title": "Chinese"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         },
  //         {
  //           "alias": "bubbletea",
  //           "title": "Bubble Tea"
  //         }
  //       ],
  //       "rating": 4.6,
  //       "coordinates": {
  //         "latitude": 40.73253,
  //         "longitude": -74.00167
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "181 West 4th St",
  //         "address2": null,
  //         "address3": "",
  //         "city": "New York",
  //         "zip_code": "10014",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "181 West 4th St",
  //           "New York, NY 10014"
  //         ]
  //       },
  //       "phone": "+19176450229",
  //       "display_phone": "(917) 645-0229",
  //       "distance": 3063.4937842989007,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": null,
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "0dDCDQz7DrKkSvu9h2hcQw",
  //       "alias": "chow-house-new-york",
  //       "name": "Chow House",
  //       "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/kzeClsI9_2tkHqKScotx1Q/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/chow-house-new-york?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 658,
  //       "categories": [
  //         {
  //           "alias": "szechuan",
  //           "title": "Szechuan"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         },
  //         {
  //           "alias": "soup",
  //           "title": "Soup"
  //         }
  //       ],
  //       "rating": 4.4,
  //       "coordinates": {
  //         "latitude": 40.72915,
  //         "longitude": -74.00072
  //       },
  //       "transactions": [
  //         "pickup",
  //         "restaurant_reservation",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "181 Bleecker St",
  //         "address2": null,
  //         "address3": "",
  //         "city": "New York",
  //         "zip_code": "10012",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "181 Bleecker St",
  //           "New York, NY 10012"
  //         ]
  //       },
  //       "phone": "+12128371021",
  //       "display_phone": "(212) 837-1021",
  //       "distance": 2682.0146108416398,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "https://www.chowhousenyc.com/menu",
  //         "open24_hours": null,
  //         "waitlist_reservation": true
  //       }
  //     },
  //     {
  //       "id": "UK1oGbr8GU2rufpnJR4-HQ",
  //       "alias": "joes-home-of-soup-dumplings-new-york",
  //       "name": "Joe's Home of Soup Dumplings",
  //       "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/4SngHCIkZntkhwpSfZfzGQ/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/joes-home-of-soup-dumplings-new-york?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 607,
  //       "categories": [
  //         {
  //           "alias": "shanghainese",
  //           "title": "Shanghainese"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         }
  //       ],
  //       "rating": 4.5,
  //       "coordinates": {
  //         "latitude": 40.75723,
  //         "longitude": -73.97702
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "7 E 48th St",
  //         "address2": "between Fifth and Madison avenues",
  //         "address3": null,
  //         "city": "New York",
  //         "zip_code": "10017",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "7 E 48th St",
  //           "between Fifth and Madison avenues",
  //           "New York, NY 10017"
  //         ]
  //       },
  //       "phone": "+12123333868",
  //       "display_phone": "(212) 333-3868",
  //       "distance": 5915.707866880465,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "http://joestower49.com/menu.pdf",
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "l7G5tDA96xbA_bx1ZgkOeg",
  //       "alias": "ichiran-midtown-new-york",
  //       "name": "ICHIRAN Midtown",
  //       "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/sBTvrGDGxvlh-7ecxF9g4A/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/ichiran-midtown-new-york?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 1472,
  //       "categories": [
  //         {
  //           "alias": "ramen",
  //           "title": "Ramen"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         },
  //         {
  //           "alias": "soup",
  //           "title": "Soup"
  //         }
  //       ],
  //       "rating": 4.2,
  //       "coordinates": {
  //         "latitude": 40.74839,
  //         "longitude": -73.99062
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "132 W 31st St",
  //         "address2": "",
  //         "address3": null,
  //         "city": "New York",
  //         "zip_code": "10001",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "132 W 31st St",
  //           "New York, NY 10001"
  //         ]
  //       },
  //       "phone": "+12124650701",
  //       "display_phone": "(212) 465-0701",
  //       "distance": 4773.989572318294,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "https://www.ichiranusa.com/menu/",
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "utVNm8OfDl_H154lMlcMlA",
  //       "alias": "zhongzhong-noodles-brooklyn-brooklyn-3",
  //       "name": "Zhongzhong Noodles - Brooklyn",
  //       "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/u8Dy1Hy1pVAW3ifnaBmAWQ/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/zhongzhong-noodles-brooklyn-brooklyn-3?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 22,
  //       "categories": [
  //         {
  //           "alias": "chinese",
  //           "title": "Chinese"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         },
  //         {
  //           "alias": "ramen",
  //           "title": "Ramen"
  //         }
  //       ],
  //       "rating": 4.5,
  //       "coordinates": {
  //         "latitude": 40.69301,
  //         "longitude": -73.97198
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "154 Adelphi St",
  //         "address2": null,
  //         "address3": "",
  //         "city": "Brooklyn",
  //         "zip_code": "11205",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "154 Adelphi St",
  //           "Brooklyn, NY 11205"
  //         ]
  //       },
  //       "phone": "+13474575690",
  //       "display_phone": "(347) 457-5690",
  //       "distance": 2349.3159981798726,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": null,
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     },
  //     {
  //       "id": "r6r-XK_wL02FQdAgaauTxg",
  //       "alias": "kame-new-york-2",
  //       "name": "Kame",
  //       "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/73cgvnCHLknLDKkTg2FPQw/o.jpg",
  //       "is_closed": false,
  //       "url": "https://www.yelp.com/biz/kame-new-york-2?adjust_creative=1JzPLerR1zq075TMi3mFaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=1JzPLerR1zq075TMi3mFaA",
  //       "review_count": 848,
  //       "categories": [
  //         {
  //           "alias": "ramen",
  //           "title": "Ramen"
  //         },
  //         {
  //           "alias": "noodles",
  //           "title": "Noodles"
  //         },
  //         {
  //           "alias": "salad",
  //           "title": "Salad"
  //         }
  //       ],
  //       "rating": 4.5,
  //       "coordinates": {
  //         "latitude": 40.7474881059799,
  //         "longitude": -73.996648862958
  //       },
  //       "transactions": [
  //         "pickup",
  //         "delivery"
  //       ],
  //       "price": "$$",
  //       "location": {
  //         "address1": "330 8th Ave",
  //         "address2": null,
  //         "address3": null,
  //         "city": "New York",
  //         "zip_code": "10001",
  //         "country": "US",
  //         "state": "NY",
  //         "display_address": [
  //           "330 8th Ave",
  //           "New York, NY 10001"
  //         ]
  //       },
  //       "phone": "+19173918587",
  //       "display_phone": "(917) 391-8587",
  //       "distance": 4668.15196258762,
  //       "attributes": {
  //         "business_temp_closed": null,
  //         "menu_url": "https://www.kamenyc.com/menu",
  //         "open24_hours": null,
  //         "waitlist_reservation": null
  //       }
  //     }
  //   ],
  //   "total": 183,
  //   "region": {
  //     "center": {
  //       "longitude": -73.99429321289062,
  //       "latitude": 40.70544486444615
  //     }
  //   }
  // }

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Color, FontFamily } from "../../GlobalStyles";
import FoodFinderHeaderContainer from "../budget/FoodFinderHeaderContainer";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
 
const FoodFinderRestaurantList = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const route = useRoute();
  const { minValue, maxValue, cuisineSelected } = route.params;
 
  useEffect(() => {
    const clientId = "EUDVTEZ1CYOB3Q3KM2HJDPXAYF5ICML0A0WRDJDUVYDS5IUB";
    const clientSecret = "LW2WKSY4JTAWXH4FLANS1MDCADOTERKDHMYZHQK1E41BLKPP";
    const cuisine = cuisineSelected;
    const latitude = 40.7128; // To be changed to current location latitude
    const longitude = -74.006; // To be changed to current location longitude
    const price = `${minValue},${maxValue}`; // Price range ($, $$)
    const headers = {
      Authorization: "fsq33uQCp2t7ZxG3v5BGb6gJcr99TFZlRkkqiz+gC3sd3Vs=",
      Accept: "application/json",
    };
    fetch(
      `https://api.foursquare.com/v3/places/search?client_id=${clientId}&client_secret=${clientSecret}&v=20220401&ll=${latitude},${longitude}&query=${cuisine}&price=${price}&limit=20`,
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data));
        const restaurant = data.results.map((restaurant) => {
          const imageUrl = `${restaurant.categories[0].icon.prefix}bg_64${restaurant.categories[0].icon.suffix}`;
 
          return {
            fsq_id: restaurant.fsq_id,
            name: restaurant.name,
            image: imageUrl,
            address: restaurant.location.formatted_address,
            latitude: restaurant.geocodes.main.latitude,
            longitude: restaurant.geocodes.main.longitude,
          };
        });
        setRestaurants(restaurant);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
 
  const handleItemPress = (fsq_id, latitude, longitude) => {
    setSelectedItem(fsq_id);
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };
 
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.item,
        selectedItem === item.fsq_id ? styles.selectedItem : null,
      ]}
      onPress={() => {
        if (item.latitude && item.longitude) {
          handleItemPress(item.fsq_id, item.latitude, item.longitude);
        } else {
          console.error("Geocode data not available for this item:", item);
        }
      }}
    >
      <Image source={{ uri: item.image }} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>
      <Icon name="angle-right" size={20} color="#FFFFFF" />
    </TouchableOpacity>
  );
 
  return (
    <View style={styles.parent}>
      <FoodFinderHeaderContainer
        showBackArrow={true}
        text={"Food Finder"}
        onBackPress={() => navigation.goBack()}
      />
      {loading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color="#FFFFFF"
        />
      ) : (
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.fsq_id}
        />
      )}
    </View>
  );
};
 
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.bGNavy900,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#898989",
  },
  selectedItem: {
    borderColor: "#2FFEE0",
    borderWidth: 2,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "400",
    fontFamily: FontFamily.sourceSansPro,
  },
  address: {
    color: "#FFFFFF",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
    fontFamily: FontFamily.sourceSansPro,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
 
export default FoodFinderRestaurantList;