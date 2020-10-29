
import React, { useState, useEffect } from 'react';
import { Dropdown, Container, Card, Button, CardColumns } from 'react-bootstrap';
import { 
    searchNowPlayingMovies,
    searchPopularMovies,
    getSweetSpot, getHotSpot, getCheapHotSpot
        } from '../utils/API';

import logo from '../images/header-background.png'


function Spots() {

  const [Movies, setMovies] = useState([]); 

  // useEffect(()=>{
  //   getHotSpot("40.7128","74.0060").then(res=>{
  //     console.log(res.data.restaurants)
  //   })
    
  //},[])
  const [Restaurants, setRestaurants] = useState([]);
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let arrayMovies = []
    let arrayRestaurants = []

    // if (!searchInput) {
    //   return false;
    // }

    try {
      
      const response = await searchNowPlayingMovies();

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { results } = await response.json();

      const movieData = results.map((movie) => ({
        movieId: movie.id,
        movieTitle: movie.title,
        moviePoster: "https://image.tmdb.org/t/p/w200/" + movie.poster_path
      }));
      
      const randomMovieNumber = Math.floor(Math.random() * Math.floor(19))
      console.log(randomMovieNumber)
      const selectionNowPlaying = movieData[randomMovieNumber]
      console.log(selectionNowPlaying)
      arrayMovies.push(selectionNowPlaying)
    } catch (err) {
      console.error(err);
    }
    try {
      const response = await searchPopularMovies();

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { results } = await response.json();

      const popularData = results.map((movie) => ({
        movieId: movie.id,
        movieTitle: movie.title,
        moviePoster: "https://image.tmdb.org/t/p/w200/" + movie.poster_path
      }));
      
      const randomPopularNumber = Math.floor(Math.random() * Math.floor(19))
      console.log(randomPopularNumber)
      const selectionPopular = popularData[randomPopularNumber]
      console.log(selectionPopular)
      arrayMovies.push(selectionPopular)
      setMovies(arrayMovies)
 
    } catch (err) {
      console.error(err);
    }
      try {
        const response = await getHotSpot();
        console.log(response)
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
  
        const { restaurants } = await response.json();
        console.log(restaurants)
  
        const restaurantData = restaurants.map((restaurant) => ({
          id: restaurant.restaurant.id,
          name: restaurant.restaurant.name,
          image: restaurant.restaurant.thumb,
          location: restaurant.restaurant.location.address
        }));

      const randomRest = Math.floor(Math.random() * Math.floor(restaurantData.length))+1
      const selectionRestaurant = restaurantData[randomRest]
      arrayRestaurants.push(selectionRestaurant)
      arrayRestaurants.push(restaurantData[0])
    } catch (err) {
      console.error(err);
    }
    try {
      const response = await getCheapHotSpot();
      console.log(response)

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { restaurants } = await response.json();
      console.log(restaurants)

      const cheaprestaurantData = restaurants.map((restaurant) => ({
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        image: restaurant.restaurant.thumb,
        location: restaurant.restaurant.location.address
      }));

    const randomCheapRest = Math.floor(Math.random() * Math.floor(cheaprestaurantData.length))
    const selectionCheapRestaurant = cheaprestaurantData[randomCheapRest]
    arrayRestaurants.push(selectionCheapRestaurant)
    setRestaurants(arrayRestaurants); 
  } catch (err) {
    console.error(err);
  }
  };

  return (
    <section className="my-5" id="spots">
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} >
      <img className="logo"  src={logo} alt="DateSpot Logo" />
      </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Dropdown>
          <Dropdown.Toggle  onClick={handleFormSubmit}  id="dropdown-basic">
            What type of date are you feeling?
          </Dropdown.Toggle>
            <Dropdown.Menu alignCenter>
              <Dropdown.Item className="dropdownItem" href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item className="dropdownItem"  href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item className="dropdownItem"  href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
          <h2 className= "options">DateSpot Suggestions</h2>
          {Movies.map((movie) => {
            return (
              <Container key={movie.movieId} >
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }} >
              <div className="dot">
                <h3 className="title">{movie.movieTitle}</h3>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }} >
                  <img className="poster" src={movie.moviePoster} alt="Movie Poster"/>
                  </div>
              </div> 
              </div>
              </Container>
            )
          })}
          {Restaurants.map((restaurant) => {
            return (
              <Container key={restaurant.id}>
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }} >
              <div className="dot" >
                <h3 className="titleRes">{restaurant.name}</h3>
                <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }} >
                <img className="resPhoto" src={restaurant.image} alt="Restaurant Photo"/>
                </div>
                <h5 className="location">{restaurant.location}</h5>
              </div>
              </div>
              </Container>
            )
          })}
  </section>
  );
}

export default Spots;