import React from 'react';


function Header () {
    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">Food Spots</a></li>
	         <li><a className="smoothscroll" href="#web">Movie Spots</a></li>
            <li><a className="smoothscroll" href="#portfolio">Saved Spots</a></li>
            <li><a className="smoothscroll" href="#portfolio">Log In</a></li>
            <li><a className="smoothscroll" href="#portfolio">Sign Up</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
             
             </div>
             </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }


export default Header;
