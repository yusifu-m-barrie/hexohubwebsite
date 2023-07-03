import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import About from "./components/pages/About";
import Works from "./components/pages/Works";
import Clients from "./components/pages/Clients";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About}/>
          <Route path='/services' component={Services} />
          <Route path='/works' component={Works}/>
          <Route path='/clients' component={Clients}/>
          <Route path='/contact' component={Contact} />
          {/*<Route path='/sign-up' component={SignUp} />*/}
        </Switch>
      </Router>
    </>
  );
}

export default App;
