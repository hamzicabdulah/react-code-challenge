import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addItem } from '../actions/addItemAction';

class AddItem extends Component {
    state = {
        product: '',
        qty: 0,
        price: 0
    }

    render() {
        return (
            <Form inline onSubmit={this.handleSubmit}>
                <Label>Add a New Item</Label>
                <FormGroup>
                    <Input
                        type="text"
                        name="product"
                        placeholder="Product Name"
                        required
                        onChange={this.handleChange}
                        value={this.state.product}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="number"
                        name="qty"
                        placeholder="Quantity"
                        required
                        onChange={this.handleChange}
                        value={this.state.qty}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="number"
                        name="price"
                        placeholder="Price"
                        required
                        onChange={this.handleChange}
                        value={this.state.price}
                    />
                </FormGroup>
                <Button type="submit" color="secondary">Add Item</Button>
            </Form>
        );
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch(addItem(this.state));
        this.setState({
            product: '',
            qty: 0,
            price: 0
        });
    }
}

export default connect()(AddItem);