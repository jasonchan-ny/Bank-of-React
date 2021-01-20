import { render } from '@testing-library/react'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance'

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
    }

    render() {
        return(
            <div>
                <nav>
                    <h2>Credits</h2>
                </nav>
                <h1>lol</h1>

                {/* <Link to = "/userProfile"><button type = "submit">User Profile</button></Link> */}

                <AccountBalance accountBalance = {this.props.accountBalance}/>
            </div>
        );
    }
}

export default CreditBalance