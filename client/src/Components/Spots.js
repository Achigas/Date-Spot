import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function Spots() {
  return (
    <section className="my-5" id="spots">
   <h1>What type of date spot are you feeling?</h1>
  <div className="dropdownButton">
  <Dropdown>
  <Dropdown.Toggle  className="btn-warning" id="dropdown-basic">
    DateSpot
  </Dropdown.Toggle>

  <Dropdown.Menu alignCenter>
    <Dropdown.Item className="dropdownItem" href="#/action-1">Romantic</Dropdown.Item> <br></br>
    <Dropdown.Item className="dropdownItem"  href="#/action-2">Casual</Dropdown.Item> <br></br>
    <Dropdown.Item className="dropdownItem"  href="#/action-3">Energized</Dropdown.Item><br></br>
    <Dropdown.Item className="dropdownItem"  href="#/action-3">Energized</Dropdown.Item><br></br>
    <Dropdown.Item className="dropdownItem"  href="#/action-3">Spontaneous</Dropdown.Item><br></br>
    <Dropdown.Item className="dropdownItem"  href="#/action-3">Outgoing</Dropdown.Item><br></br>
    <Dropdown.Item className="dropdownItem"  href="#/action-3">Antisocial</Dropdown.Item><br></br>
  </Dropdown.Menu>
   </Dropdown>
  </div>
  <div className="dateSpot">
  <span className="dot"></span>
  <span className="dot"></span>
  </div>
  <div className="dateCards">
      <Card cardName="movieCard" style={{ width: '18rem' }}>
      <Card.Header>Movies</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className="listItem">Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
    <Card cardName="foodCard" style={{ width: '18rem' }}>
    <Card.Header>Food</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  </div>
  </section>
  );
}

export default Spots;

