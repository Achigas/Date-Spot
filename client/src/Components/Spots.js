
import React, { useState, useEffect } from 'react';
import { Dropdown, Container, Card, Button, CardColumns } from 'react-bootstrap';
import { 
    searchNowPlayingMovies,
    searchPopularMovies,
    getSweetSpot, getHotSpot, getCheapHotSpot
        } from '../utils/API';


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
    <>
    <section className="my-5" id="spots">
        <div className="button">
        <Dropdown>
          <Dropdown.Toggle  onClick={handleFormSubmit}  className="btn-warning" id="dropdown-basic">
            What type of date are you feeling?
          </Dropdown.Toggle>
            <Dropdown.Menu alignCenter>
              <Dropdown.Item className="dropdownItem" href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item className="dropdownItem"  href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item className="dropdownItem"  href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
        <div className="dateSpot">
          <span className="dotTop">Fave <br></br> Movie Spot</span>
          <span className="dotTop">Fave <br></br> Food Spot</span>
        </div>
        <div className="button">
        <Button id="dropdown-basicSave" variant="warning">Save DateSpots</Button>{' '}
        </div>
        <Container className="movieOptions">
          <h2>DateSpot Suggestions</h2>
          <CardColumns>
          {Movies.map((movie) => {
            return (
              <Card className="dot" key={movie.movieId} border='dark'>
                <Card.Body>
                <span><Card.Title className="movieTitle">{movie.movieTitle}</Card.Title>
                  <Card.Img className="moviePoster" src={movie.moviePoster}></Card.Img></span>
                </Card.Body>
              </Card>
            )
          })}
          </CardColumns>
          <CardColumns>
          {Restaurants.map((restaurant) => {
            return (
              <Card className="dot" key={restaurant.id} border='dark'>
                <Card.Body>
                <Card.Title className="movieTitle">{restaurant.name}</Card.Title>
                <Card.Img className="moviePoster" src={restaurant.image}></Card.Img>
                <Card.Text className="movieTitle">{restaurant.location}</Card.Text>
                </Card.Body>
              </Card>
            )
          })}
          </CardColumns>
      </Container>
  </section>
  </>
  );
}

export default Spots;