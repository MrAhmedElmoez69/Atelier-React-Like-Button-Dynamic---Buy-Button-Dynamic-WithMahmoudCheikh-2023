import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "./Product";

class Products extends Component {
    array = [];
    constructor(props) {
        super(props);

        var data = require("../products.json");
        this.array = data.map((e) => (
            <Product
                title={e.name}
                description={e.description}
                price={e.price}
                image={e.img}
                like={e.like}
                quantity={e.quantity}
                liked={false}
            />
        ));
    }
    render() {

        return <Container><Row>{this.array}</Row></Container>;
    }
}

export default Products;
