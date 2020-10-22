var APIKeyMovieDB = "4ee2048f656df52ca79c1b3928871706"

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
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4ee2048f656df52ca79c1b3928871706&language=en-US&page=1')
}