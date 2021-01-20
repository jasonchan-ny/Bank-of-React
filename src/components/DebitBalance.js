import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance'
import DebitItem from './DebitItem'

class DebitBalance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            debit: {
                id: "",
                description: "",
                amount: "",
                date: "",
                // debitData: this.props.debitData
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        const update = {...this.state.debit};
        const input = e.target.name;
        const value = e.target.value

        update[input] = value;
        if(input === "amount"){
            update.amount = Number(value);
        }
        this.setState({debit: update});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const arr = this.props.debitData;
        arr.unshift({
            description: this.state.description,
            amount: this.state.amount
        })
    }

    render() {
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
                            <input type = "text" name = "description" placeholder = "Enter item" onChange = {this.handleChange}/>
                        <label>
                            Amount:
                        </label>
                            <input type = "number" name = "amount" placeholder = "0.00" onChange = {this.handleChange}/>
                            <button type = "submit"> Submit </button>
                    </form>
                </fieldset>

                {this.debitList(this.props.debitData)}
                
                {/* {this.state.data.map((data) => (
                <div key = {data.id}>
                    Description: {data.description} <p></p>
                    Amount: {data.amount} <p></p>
                    Date: {data.date} <p></p>
                </div>
            ))}   */}

            </div>
        );
    }

debitList(debitData)
{
    let arr = [];

    debitData.forEach((element, index) => {
        const id = element.id;
        const description = element.description;
        const amount = element.amount;
        const date = element.date;
        
        arr.push(
        <DebitItem
        // key = {index.toString()}
        id = {id}
        description = {description}
        amount = {amount}
        date = {date}
        />)
    })
    return arr;
}}

export default DebitBalance