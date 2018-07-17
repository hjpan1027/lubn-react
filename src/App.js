import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
           <Route exact path="/" component={Home}  />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />

         </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
