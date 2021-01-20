import React, { Component } from 'react';

class CreditItem extends Component{
    render() {
        return (
        <div className="credit-item">
            <h3> {this.props.description}</h3>
            <li> Amount: {this.props.amount.toLocaleString("en-US",{style: "currency", currency: "USD"})} </li>
            <li> Date: {this.props.date}</li>
        </div>
        );
    }
}

export default CreditItem;