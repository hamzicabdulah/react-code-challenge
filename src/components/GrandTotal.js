import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/GrandTotal.css';

class GrandTotal extends Component {
    render() {
        return (
            <div className="grand-total">
                <h5>Grand Total</h5>
                {(this.props.items.list.reduce((grandTotal, index) => {
                    const { qty, price } = this.props.items.details[index];
                    const itemTotal = qty * price;
                    return grandTotal + itemTotal;
                }).toFixed(2))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { items: state.items };
}

export default connect(mapStateToProps)(GrandTotal);