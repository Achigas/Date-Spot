import React from 'react';
import './App.css';
import Header from './Components/Header';
import Spots from './Components/Spots';
import Saved from './Components/Saved';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {
   return (
      <div className="App">
        <Header />
        <Spots />
        <Saved />
        <Login />
      </div>
    );
  }

export default App;
