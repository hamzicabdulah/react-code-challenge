import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { testAction } from '../actions/testAction';

class Test extends Component {
    render() {
        return (
            <Button onClick={this.handleButtonClick}>Test Action</Button>
        );
    }

    handleButtonClick = () => {
        this.props.dispatch(testAction([]));
    }
}

function mapStateToProps(state) {
    console.log(state);
    return state;
}

export default connect(mapStateToProps)(Test);