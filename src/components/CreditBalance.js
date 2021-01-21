import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance'

class CreditBalance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creditData: {
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

        let creditData = this.state.creditData;
        creditData[name] = value
        creditData.date = date
        this.setState({
            creditData
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateCredit(this.state.creditData)
    }

    render() {
        let displayCredits = (
            this.props.creditData.map((credit) => {
                return (
                    <div className = "credit-item" key = {credit.id}>
                        <h3> {credit.description}</h3>
                        <li> Amount: {credit.amount.toLocaleString("en-US",{style: "currency", currency: "USD"})} </li>
                        <li> Date: {credit.date}</li>
                    </div>
                );
            })
        )
        return(
            <div>
                <nav>
                    <h2>Credits</h2>
                </nav>
                <h1>Bank of React</h1>
                <p></p>
                <Link to = "/userProfile"><button type = "submit">User Profile</button></Link>
                <Link to = "/debit"><button type = "submit">Debit</button></Link>

                <AccountBalance accountBalance = {this.props.accountBalance}/>

                <fieldset>
                    <h3>Add Credit</h3>
                    <form onSubmit={ this.handleSubmit }>
                        <label>
                            Description:
                        </label>
                            <input type = "text" name = "description" placeholder = "Enter item" onChange = {this.handleChange} value = {this.state.creditData.description}/>
                        <label>
                            Amount:
                        </label>
                            <input type = "number" name = "amount" placeholder = "0.00" onChange = {this.handleChange} value = {this.state.creditData.amount}/>
                            <button type = "submit"> Submit </button>
                    </form>
                </fieldset>
                {displayCredits}
            </div>
        );
    }
}

export default CreditBalance