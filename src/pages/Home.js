import React, {Component} from 'react'
import AccountBalance from '../components/AccountBalance'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return(
            <div>
                <nav>
                    <h2>Home</h2>
                </nav>
                <h1>Bank of React</h1>

                {/* <Link to = "/userProfile">User Profile</Link> */}
                <Link to = "/userProfile"><button type = "submit">User Profile</button></Link>

                <AccountBalance accountBalance = {this.props.accountBalance}/>
            </div>
        );
    }
}

export default Home;