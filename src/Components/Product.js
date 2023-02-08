import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Product extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.likefn = this.likefn.bind(this);
        this.buy = this.buy.bind(this);
        this.state = { ...props, liked: false }
    }


    buy() {
        if (this.state.quantity !== 0) {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    }

    likefn() {
        if (this.state.liked === false) {
            this.setState({
                liked: true,
                like: this.state.like + 1
            })
        } else {
            this.setState({
                liked: false,
                like: this.state.like - 1
            })
        }
    }
    render() {
        return (
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        <p>{this.props.description}</p>
                        <p>Price : {this.props.price}$</p>
                        <p>
                            Likes : {this.state.like} , Quantity : {this.state.quantity}
                        </p>
                    </Card.Text>
                    <Button variant="primary" onClick={this.likefn}>
                        Like
                    </Button>
                    <Button variant="secondary" onClick={this.buy}>
                        Buy
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Product;
