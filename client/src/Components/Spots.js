import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


function Spots() {
  return (
    <section className="my-5" id="spots">
   <h1>What type of date are you feeling?</h1>
  <div className="dropdownButton">
  <Dropdown>
  <Dropdown.Toggle  className="btn-warning" id="dropdown-basic">
    DateSpot
  </Dropdown.Toggle>

  <Dropdown.Menu alignCenter>
    <Dropdown.Item className="dropdownItem" href="#/action-1">Action</Dropdown.Item> <br></br>
    <Dropdown.Item className="dropdownItem"  href="#/action-2">Another action</Dropdown.Item> <br></br>
    <Dropdown.Item className="dropdownItem"  href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
   </Dropdown>
  </div>
  </section>
  );
}

export default Spots;