
import React, { useState } from 'react';
import { Dropdown, Container, Card, Button, CardColumns } from 'react-bootstrap';
import { searchNowPlayingMovies } from '../utils/API';


function Spots() {

  const [Movies, setMovies] = useState([]); 
  const [Restaurants, setRestaurants] = useState([]);
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();

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

      setMovies(movieData)
    } catch (err) {
      console.error(err);
    }
      
      try {
        const response = await getSweetSpot();
        console.log(response)
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
  
        const { restaurants } = await response.json();
        console.log(restaurants)
  
        const restaurantData = restaurants.map((restaurant) => ({
          id: restaurant.restaurant.id,
          name: restaurant.restaurant.name
        }));

      setRestaurants(restaurantData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <section className="my-5" id="spots">
      <h1>What type of date are you feeling?</h1>
        <div className="button">
        <Dropdown>
          <Dropdown.Toggle onClick={handleFormSubmit}  className="btn-warning" id="dropdown-basic">
            DateSpot
          </Dropdown.Toggle>
            <Dropdown.Menu alignCenter>
              <Dropdown.Item className="dropdownItem" href="#/action-1">Action</Dropdown.Item> <br></br>
              <Dropdown.Item className="dropdownItem"  href="#/action-2">Another action</Dropdown.Item> <br></br>
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
      </Container>
  </section>
  </>
  );
}

export default Spots;