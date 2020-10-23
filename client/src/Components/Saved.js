import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function Spots() {
  return (
    <section className="my-5" id="spots">
   <h1>Your Saved Spots</h1>
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

