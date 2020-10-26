import React from 'react';

function Home () {
    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#Home">Home</a></li>
            <li><a className="smoothscroll" href="#Saved">Saved Spots</a></li>
            <li><a className="smoothscroll" href="#Login">Log In</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
               <h1>Find your next date idea!</h1>
               <h3>Scroll down to start.</h3>
             </div>
             </div>

   </header>
    );
  }


export default Home;