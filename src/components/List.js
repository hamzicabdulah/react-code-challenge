import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import Item from './Item';
import GrandTotal from './GrandTotal';
import '../styles/List.css';

class List extends Component {
    render() {
        return (
            <div className="items">
                <h5>Items</h5>
                <ListGroup>
                    <ListGroupItem>
                        <Row>
                            <Col xs="3">Product</Col>
                            <Col xs="3">Quantity</Col>
                            <Col xs="3">Price</Col>
                            <Col xs="3">Total</Col>
                        </Row>
                    </ListGroupItem>
                    {this.props.items.list.map(index => {
                        return <Item {...this.props.items.details[index]} key={index} />
                    })}
                    <Col xs={{ size: 6, offset: 6 }} md={{ size: 3, offset: 9 }}><GrandTotal /></Col>
                </ListGroup>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { items: state.items };
}

export default connect(mapStateToProps)(List);