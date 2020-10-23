import React from 'react';
import './App.css';
import Header from './Components/Header';
import Spots from './Components/Spots';
import Saved from './Components/Saved';


function App () {
   return (
      <div className="App">
        <Header />
        <Spots />
        <Saved />
      </div>
    );
  }

export default App;
