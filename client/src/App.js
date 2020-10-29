import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Spots from './pages/Spots';
import Saved from './pages/Saved';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {
   return (
  <Router>
  <>
  <Navbar/>
  <Switch>
    <Route exact path='/' component={Spots} />
    <Route exact path='/Saved' component={Saved} />
    <Route exact path='/Login' component={Login} />
    <Route exact path='/Sign-Up' component={SignUp} />
  </Switch>
</>
</Router>
      
    );
  }

export default App;
