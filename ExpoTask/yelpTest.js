// function filterCategoriesByParentAlias(categories, parentAlias) {
//     return categories.filter(category => category.parent_aliases.includes(parentAlias));
//   }
  
//   const fetchCategories = async () => {
//     const response = await fetch('https://api.yelp.com/v3/categories', {
//       headers: {
//         'Authorization': 'Bearer o7Hy7vuQYgzCO6VxjqImrn6A3XiCw7HfSv9KbofZBv2BzIJsNV1wp-l-OXpoibDkbyjPpq2pRx6L7NWdZG3eXWtzkC2i2ZgSrFGXCkO2bElErwdZ_1vikzLZav4XZnYx'
//       }
//     });
//     const data = await response.json();
//     return data.categories;
//   };
  
//   const parentAlias = 'restaurants';
  
//   // Wrap the code in an async function to use await
//   (async () => {
//     const categories = await fetchCategories();
//     const restaurantCategories = filterCategoriesByParentAlias(categories, parentAlias);
//     console.log(restaurantCategories);
//   })();
function filterCategoriesByParentAlias(categories, parentAlias) {
    return categories.filter(category => category.parent_aliases.includes(parentAlias));
}

const fetchCategories = async () => {
    try {
        const response = await fetch('https://api.yelp.com/v3/categories', {
            headers: {
                'Authorization': 'Bearer o7Hy7vuQYgzCO6VxjqImrn6A3XiCw7HfSv9KbofZBv2BzIJsNV1wp-l-OXpoibDkbyjPpq2pRx6L7NWdZG3eXWtzkC2i2ZgSrFGXCkO2bElErwdZ_1vikzLZav4XZnYx'
            }
        });
        const data = await response.json();
        const categories = data.categories;
        const parentAlias = 'food';
        const restaurantCategories = filterCategoriesByParentAlias(categories, parentAlias);
        const formattedCategories = restaurantCategories.map(category => ({
            title: category.title,
            alias: category.alias
        }));
        console.log("categories:", formattedCategories);
        return formattedCategories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return []; // Return an empty array or handle the error accordingly
    }
};

(async () => {
    await fetchCategories();
})();

