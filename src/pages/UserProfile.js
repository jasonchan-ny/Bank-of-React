import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import Debit from './components/DebitBalance'
// import Credit from './components/CreditBalance'

class UserProfile extends Component {
    render() {
        return(
            <div>
                <nav>
                    <h2>User Profile</h2>
                </nav>
                <h1>Bank of React</h1>
                <h3>Username: {this.props.username}</h3>
                <h3>Member Since: {this.props.joinDate}</h3>
                <Link to = "/debit"><button type = "submit">Debit</button></Link>
                <Link to = "/credit"><button type = "submit">Credit</button></Link>
            </div>
        );
    }
}

export default UserProfile;