import React, { Component } from 'react';
import { connect } from 'react-redux';

class GrandTotal extends Component {
    render() {
        return (
            <div>{this.props.items.list.reduce((grandTotal, index) => {
                const { qty, price } = this.props.items.details[index];
                const itemTotal = qty * price;
                return grandTotal + itemTotal;
            })}</div>
        );
    }
}

function mapStateToProps(state) {
    return { items: state.items };
}

export default connect(mapStateToProps)(GrandTotal);