import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Row, Col } from 'reactstrap';
import { addItem } from '../actions/addItemAction';
import '../styles/AddItem.css';

const initialState = {
    product: '',
    qty: '',
    price: ''
};

class AddItem extends Component {
    state = { ...initialState };

    render() {
        return (
            <div className="add-item">
                <h5>Add New Item</h5>
                <Form inline onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xs="6" md="4">
                            <Input
                                type="text"
                                name="product"
                                placeholder="Product Name"
                                required
                                onChange={this.handleChange}
                                value={this.state.product}
                            />
                        </Col>
                        <Col xs="6" md="3">
                            <Input
                                type="number"
                                name="qty"
                                placeholder="Quantity"
                                required
                                onChange={this.handleChange}
                                value={this.state.qty}
                            />
                        </Col>
                        <Col xs="6" md="3">
                            <Input
                                type="number"
                                name="price"
                                placeholder="Price"
                                required
                                onChange={this.handleChange}
                                value={this.state.price}
                                step=".01"
                            />
                        </Col>
                        <Col xs="6" md="2">
                            <Button type="submit" color="secondary">Add</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch(addItem(this.state));
        this.setState({ ...initialState });
    }
}

export default connect()(AddItem);