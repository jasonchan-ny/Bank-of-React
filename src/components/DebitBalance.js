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
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        const value = e.target.value
        this.setState({
            [e.target.name]: value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getDebit(this.state.debit)
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

                {this.debitList(this.props.data)}
                
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

debitList(data)
{
    let arr = [];

    data.forEach((element, index) => {
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