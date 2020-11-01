import React from 'react';
import Contact from './Contact';
import About from './About';
import Donate from './Dontate';
import Project from './Project';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
const App = () => {
    return (
       <>
    
      <Navbar />

      <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/donate" component={Donate} />
            <Redirect to="/" />
      </Switch>
    
    </>
    );

}
export default App;