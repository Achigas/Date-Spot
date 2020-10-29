import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function Login () {
    return (
      <section id="login">
     <div>
     
        <h1 class="text-center font-italic">Logo Placeholder<br></br> DateSpot</h1>
          <p class="text-center lead">Find your next date idea!</p>
      </div> 
      <Container className="movieOptions">
              <Card border='dark'>
                <Card.Body>
                <Card.Title className="movieTitle" class="title">Don't have an account yet? Sign up now! <br></br>Fill out the form below to get started. <br></br>  Already a member? <a href="#sign-in">Sign in!</a> </Card.Title>
                <br></br>
                <form>
                    <label class="label">
                       Username:  
                        <input type="text" class="input" name="name" />
                    </label> <br></br><br></br>
                    <label class="label">
                       Password:
                        <input type="text" class="input" name="password" /> <br></br><br></br>
                        <small>Password must be at least 8 characters.</small>
                    </label><br></br><br></br>
                    <label class="label">
                       Zipcode:
                        <input type="text" class="input" name="zipcode" />
                    </label><br></br><br></br>
                    <input type="submit" class="button1" value="Submit" />
                </form>
                </Card.Body>
              </Card>
              <br></br>

              <Card border='dark'>
                <Card.Body>
                <Card.Title className="movieTitle" class="title">Sign In</Card.Title>
                <br></br>
                <form>
                    <label class="label" >
                       Username:
                        <input type="text" class="input" name="name" />
                    </label> <br></br><br></br>
                    <label class="label">
                       Password:
                        <input type="text" class="input" name="password" /> <br></br>
                    </label><br></br><br></br>
                    <input type="submit" class="button1" value="Submit" />
                </form>
                </Card.Body>
              </Card>
      </Container>
    </section>
    );
  }


export default Login;