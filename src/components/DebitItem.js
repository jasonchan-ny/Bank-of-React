import React, { Component } from 'react';

class DebitCard extends Component{
    render() {
        return (
        <div className="debit-item">
            <h3> {this.props.description}</h3>
            <li> Amount: {this.props.amount.toLocaleString("en-US",{style: "currency", currency: "USD"})} </li>
            <li> Date: {this.props.date}</li>
        </div>
        );
    }
}

export default DebitCard;