import React, {useState} from "react";
import './App.css'
import Home from "./components/Home"; 
import Form from "./components/Form";
import Confirmation from "./components/Confimation";
import {Route, Link, Switch} from 'react-router-dom'

//Set initial Values for State
const initialFormValues = {
  name: "",
  instructions: "",
  /// Drop Down ///
  size: "",
  /// Checklist ///
  pepperoni: false, 
  cheese: false, 
  mushroom: false, 
  peppers: false, 
};

const initialOrders = [];

const App = () => {

///States///
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);


  return (
    <div className="App">
      <nav className="nav-links">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/pizza">Order A Pizza</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <Form />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
      </Switch>
    </div>
  );
};
export default App;


// base api url: https://reqres.in/api/