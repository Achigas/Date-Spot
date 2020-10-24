import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function Login () {
    return (
      <section id="login">
     <div>
        <h1 class="text-center font-italic">Placeholder for logo <br></br> DateSpot</h1>
          <p class="text-center lead">Find your next date idea!</p>
      </div> 
      <Container className="movieOptions">
              <Card border='dark'>
                <Card.Body>
                <Card.Title className="movieTitle">Don't have an account yet? Sign up now! <br></br>Fill out the form below to get started. <br></br>  Already a member? <a href="#sign-in">Sign in!</a> </Card.Title>
                <form>
                    <label>
                       Username:
                        <input type="text" name="name" />
                    </label> <br></br>
                    <label>
                       Password:
                        <input type="text" name="password" /> <br></br>
                        <p>Password must be at least 8 characters.</p>
                    </label><br></br>
                    <label>
                       Zipcode:
                        <input type="text" name="zipcode" />
                    </label><br></br>
                    <input type="submit" value="Submit" />
                </form>
                </Card.Body>
              </Card>
              <Card border='dark'>
                <Card.Body>
                <Card.Title className="movieTitle">Sign In </Card.Title>
                <form>
                    <label>
                       Username:
                        <input type="text" name="name" />
                    </label> <br></br>
                    <label>
                       Password:
                        <input type="text" name="password" /> <br></br>
                    </label><br></br>
                    <input type="submit" value="Submit" />
                </form>
                </Card.Body>
              </Card>
      </Container>
    </section>
    );
  }


export default Login;