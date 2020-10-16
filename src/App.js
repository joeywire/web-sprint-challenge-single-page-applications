import React, {useState} from "react";
import './App.css'
import Home from "./components/Home"; 
import Form from "./components/Form";
import Confirmation from "./components/Confimation";
import {Route, Link, Switch} from 'react-router-dom'
import axios from 'axios'

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

///HELPERS

const postOrder = (order) => {

  axios.post(`https://reqres.in/api/order`, order)
    .then((res) => {
      setOrders([res.data, ...orders]);
      setFormValues(initialFormValues);
    })
    .catch((err) => console.log(err));

}

/// EVENT HANDLERS

  const inputChange = (name, value) => {

    // **** ADD VALIDATION HERE***

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const orderSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      instructions: formValues.instructions.trim(),
      size: formValues.size,
      toppings: ["pepperoni", "cheese", "mushroom", "peppers"].filter(
        (topping) => formValues[topping]
      ),
    };

    postOrder(newOrder);
  }

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
          <Form 
            values={formValues}
            change={inputChange}
            submit={orderSubmit}
          />
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