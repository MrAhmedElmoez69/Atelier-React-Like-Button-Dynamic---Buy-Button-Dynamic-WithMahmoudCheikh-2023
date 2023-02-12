import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "./Product";
import data from "../products.json";
import { Alert } from "react-bootstrap";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data, visible: false };
  }

  buy(index) {
    this.onShowAlert();
    const nextData = this.state.data;
    nextData[index]["quantity"] -= 1;
    this.setState({ data: nextData });
  }

  onShowAlert = () => {
    this.setState({ visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false });
      }, 2000);
    });
  };

  render() {
    return (
      <Container>
        <Alert variant="success">
          <Alert.Heading>Hey, welcome to our shop MyStore</Alert.Heading>
          Thank you for choosing our store , we hope you enjoy your shopping
          experience!
        </Alert>
        <Row>
          {data.map((elem, index) => (
            <Product
              key={index}
              title={elem.name}
              description={elem.description}
              price={elem.price}
              image={elem.img}
              like={elem.like}
              quantity={elem.quantity}
              buy={() => this.buy(index)}
              disabled={this.state.data[index]["quantity"] <= 0 ? true : false}
            />
          ))}
        </Row>
        <Alert key="primary" show={this.state.visible}>
          You bought an item
        </Alert>
      </Container>
    );
  }
}

export default Products;