import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import AppNavbar from "./AppNavbar";
import { Link } from "react-router-dom";
import './App.css';
import './table.css'
class GroceryList extends Component {
  
  constructor(props) {
    super(props);
    this.state = { grocery: [] };
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    fetch("/grocery")
      .then((response) => response.json())
      .then((data) => this.setState({ grocery: data }));
  }
  async remove(id) {
    await fetch(`/grocery/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedGrocery = [...this.state.grocery].filter((i) => i.id !== id);
      this.setState({ grocery: updatedGrocery });
    });
  }

  render() {
    const { grocery, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groceryList = grocery.map((grocery) => {
      return (
        <tr key={grocery.id}>
          <td style={{ whiteSpace: "nowrap" }}>{grocery.name}</td>
          <td>{grocery.quantity}</td>
          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="primary"
                tag={Link}
                to={"/grocery/" + grocery.id}
              >
                Edit
              </Button>
              <Button
                size="sm"
                color="success"
                onClick={() => this.remove(grocery.id)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });

    return (
      <div className="fg">
        <AppNavbar />
        <Container fluid>
          <div className="float-right">
            <Button color="warning" tag={Link} to="/grocery/new">
              Add Grocery
            </Button>
          </div>
          <h3>Groceries</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="30%">Grocery Name</th>
                <th width="30%">Grocery Quantity</th>
                <th width="40%">Actions</th>
              </tr>
            </thead>
            <tbody>{groceryList}</tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
export default GroceryList;