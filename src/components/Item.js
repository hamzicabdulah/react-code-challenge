import React from 'react';
import { ListGroupItem, Row, Col } from 'reactstrap';

export default function Item({ product, qty, price }) {
    const total = qty * price;
    return (
        <ListGroupItem>
            <Row>
                <Col xs="3">{product}</Col>
                <Col xs="3">{qty}</Col>
                <Col xs="3">{price}</Col>
                <Col xs="3">{(total % 1 !== 0) ? total.toFixed(2) : total}</Col>
            </Row>
        </ListGroupItem>
    );
}