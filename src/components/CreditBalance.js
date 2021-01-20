import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance'
import CreditItem from './CreditItem'

class CreditBalance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credit: {
                id: "",
                description: "",
                amount: "",
                date: "",
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        const update = {...this.state.credit};
        const input = e.target.name;
        const value = e.target.value

        update[input] = value;
        if(input === "amount"){
            update.amount = Number(value);
        }
        this.setState({credit: update});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const arr = this.props.creditData;
        arr.unshift({
            description: this.state.description,
            amount: this.state.amount
        })
    }

    render() {
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
                            <input type = "text" name = "description" placeholder = "Enter item" onChange = {this.handleChange}/>
                        <label>
                            Amount:
                        </label>
                            <input type = "number" name = "amount" placeholder = "0.00" onChange = {this.handleChange}/>
                            <button type = "submit"> Submit </button>
                    </form>
                </fieldset>

                {this.creditList(this.props.creditData)}
                
                {/* {this.state.debitData.map((data) => (
                <div key = {data.id}>
                    Description: {data.description} <p></p>
                    Amount: {data.amount} <p></p>
                    Date: {data.date} <p></p>
                </div>
            ))}   */}

            </div>
        );
    }

creditList(creditData)
{
    let arr = [];

    creditData.forEach((element, index) => {
        const id = element.id;
        const description = element.description;
        const amount = element.amount;
        const date = element.date;
        
        arr.push(
        <CreditItem
        // key = {index.toString()}
        id = {id}
        description = {description}
        amount = {amount}
        date = {date}
        />)
    })
    return arr;
}}

export default CreditBalance