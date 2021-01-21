import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance'

class DebitBalance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            debitData: {
                id: "",
                description: "",
                amount: "",
                date: "",
            },
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        // alert(e.target.name)
        const name = e.target.name;
        const value = e.target.value;
        const date = Date().toLocaleString();
        let debitData = this.state.debitData;
        debitData[name] = value
        debitData.date = date
        this.setState({
            debitData
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateDebit(this.state.debitData)
    }

    render() {
        let displayDebits = (
            this.props.debitData.map((debit) => {
                return (
                    <div className="credit-item">
                        <h3> {debit.description}</h3>
                        <li> Amount: {debit.amount.toLocaleString("en-US",{style: "currency", currency: "USD"})} </li>
                        <li> Date: {debit.date}</li>
                    </div>
                );
            })
        )
        return(
            <div>
                <nav>
                    <h2>Debits</h2>
                </nav>
                <h1>Bank of React</h1>
                <p></p>
                <Link to = "/userProfile"><button type = "submit">User Profile</button></Link>
                <Link to = "/credit"><button type = "submit">Credit</button></Link>

                <AccountBalance accountBalance = {this.props.accountBalance}/>

                <fieldset>
                    <h3>Add Debit</h3>
                    <form onSubmit={ this.handleSubmit }>
                        <label>
                            Description:
                        </label>
                            <input type = "text" name = "description" placeholder = "Enter item" onChange = {this.handleChange} value = {this.state.debitData.description}/>
                        <label>
                            Amount:
                        </label>
                            <input type = "number" name = "amount" placeholder = "0.00" onChange = {this.handleChange} value = {this.state.debitData.amount}/>
                            <button type = "submit"> Submit </button>
                    </form>
                </fieldset>
                {displayDebits}
            </div>
        );
    }
}

export default DebitBalance