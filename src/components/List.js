import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import Item from './Item';

class List extends Component {
    render() {
        return (
            <Table dark bordered>
                <thead>
                    <tr><th colSpan={4}>Items</th></tr>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.list.map(index => {
                        return <Item {...this.props.items.details[index]} key={index} />
                    })}
                </tbody>
            </Table>
        );
    }
}

function mapStateToProps(state) {
    return { items: state.items };
}

export default connect(mapStateToProps)(List);