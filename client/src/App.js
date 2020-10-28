import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Spots from './Components/Spots';
import Saved from './Components/Saved';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {
   return (
    <Router>
       <>
      <div className="App">
        <Header/>
        <Spots />
        <Saved />
        <Login />
        <SignUp />
      </div>
      </>
   </Router>
      
    );
  }

export default App;
