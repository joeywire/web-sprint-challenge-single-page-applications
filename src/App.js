import React from "react";
import './App.css'
import Home from "./components/Home"; 
import Form from "./components/Form";
import Confirmation from "./components/Confimation";
import {Route, Link, Switch} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order A Pizza</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Form path="/pizza"/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
