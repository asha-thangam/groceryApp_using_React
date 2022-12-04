import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GroceryList from "./GroceryList";
import GroceryEdit from "./GroceryEdit";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/grocery" exact={true} component={GroceryList} />
          <Route path="/grocery/:id" component={GroceryEdit} />
        </Switch>
      </Router>
    );
  }
}

export default App;