var APIKeyMovieDB = "4ee2048f656df52ca79c1b3928871706"
const ZomatoAPI = "c209bc4f98e550ee1bf34b732bd7faad"

export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};
  //   return fetch('/api/users/me', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       authorization: `Bearer ${token}`,
  //     },
  //   });
  // };
  
  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

//   // save book data for a logged in user
// export const saveBook = (bookData, token) => {
//     return fetch('/api/users', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(bookData),
//     });
//   };

  
//   // remove saved book data for a logged in user
//   export const deleteBook = (bookId, token) => {
//     return fetch(`/api/users/books/${bookId}`, {
//       method: 'DELETE',
//       headers: {
//         authorization: `Bearer ${token}`,
//       },
//     });
//   };

//export const searchGoogleBooks = (query) => {
//return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
//};

export const searchNowPlayingMovies = () => {
  //random page number
  const pageNumber = Math.floor(Math.random() * Math.floor(5)) + 1
  //take out API key
  return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=4ee2048f656df52ca79c1b3928871706&language=en-US&page=${pageNumber}`)
    //return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  //};
}
export const searchNowPlayingMovies = () => {
    //random page number
    const pageNumber = Math.floor(Math.random() * Math.floor(5)) + 1
    //take out API key
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=4ee2048f656df52ca79c1b3928871706&language=en-US&page=${pageNumber}`)
}

export const searchPopularMovies = () => {
  const pageNumber = Math.floor(Math.random() * Math.floor(10)) + 1
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4ee2048f656df52ca79c1b3928871706&language=en-US&page=${pageNumber}`)
}

export const getGenreInfo = () => {
  return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + APIKeyMovieDB + "&language=en-US")
}




//HotSpot
export const getHotSpot = () =>{
  return fetch('https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city', {
  method: 'GET', //This could be any http method
  headers: {
    'Authorization': 'Basic c209bc4f98e550ee1bf34b732bd7faad',
    'Content-Type': 'application/json',
  } 
})
.then((response) => response.json)
 
  
  
 // fetch('https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city')
//   return client search({
//     entity_id: 280,
//     entity_type: "city",
//     q: trending, popular, best, 
//     start: 5,
//     count: 2,
//     cuisines: "dine-in", 
//     collection_id: 1
// })
}
// {
//   entity_id: 280,
//   entity_type: "city",
//   q: trending, popular, best, 
//   start: 5,
//   count: 2,
//   cuisines: "dine-in", 
//   collection_id: 1,
//   user_rating: {
//     aggregate_rating: "3.7",
//     title: "Trending This Week",
//   }
// }
//HotSpot 
// export const getHotSpot = () => {
//   return client search({
//     collection: {
//       entity_id: 280,
//       entity_type: "city",
//       start: 5,
//       count: 2,
//       collection_id: 1,
//       user_rating: {
//         aggregate_rating: "3.7",
//         title: "Trending This Week",
//       categories: {
//         id: 2,
//         name: "Dine-out",
//         }
//       }
//     })
// }

// //LazySpot 
// export const getLazySpot = () => {
//   return client search({
//     collection: {
//       entity_id: 280,
//       entity_type: city,
//       start: 5,
//       count: 2,
//     establishment: {
//       id: 281, 
//       name: "Fast Food",
//     has_online_delivery: 0,
//     is_delivering_now: 0, 
//     }
//     categories: {
//         id: 5,
//         name: "Takeaway",
//         }
//       }
//     })
// }

// //SweetSpot
// export const getSweetSpot = () => {
//   return client search{(
//     entity_id: 280,
//     entity_type: city,
//     start: 5,
//     count 2, 
//     collection_id: 320,
//     establishment: {
//     establishment_id: 31,
//     establishment_name: "Bakery"
//   }
//   )}
// }
  
//  return fetch ("https://api.themoviedb.org/3/genre/movie/list?api_key=" + APIKeyMovieDB + "&language=en-US")
//}