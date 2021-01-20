import React, {Component} from 'react'

class AccountBalance extends Component {
  render() {
    return (
        <div>
          <h3>Balance: {this.props.accountBalance}</h3>
        </div>
    );
  }
}

export default AccountBalance;