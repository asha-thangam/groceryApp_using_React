import React, { Component } from "react";
import "./App.css";
import AppNavbar from "./AppNavbar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div className="fg">
        <AppNavbar />
        <Container fluid>
          <Button color="link">
            <Link to="/grocery">Grocery Table</Link>
          </Button>
        </Container>
      </div>
    );
  }
}
export default Home;