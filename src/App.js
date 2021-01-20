import React from 'react'
import axios from 'axios'
import './App.css';
import Nav from './Nav'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import Debit from './components/DebitBalance'
import Credit from './components/CreditBalance'
// import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: {
        username: 'broke_programmer2857',
        joinDate: '08/23/97',
      },
      accountBalance: 0,
      debitBalance: 0,
      creditBalance: 0,
      debitData: [],
      creditData: [],
    }
    this.getDebit = this.getDebit.bind(this)
    this.getCredit = this.getCredit.bind(this)
  }

  componentDidMount() {
    this.getDebit();
    this.getCredit();
  }

  getDebit() {
    const debitLink = "https://moj-api.herokuapp.com/debits";

    axios.get(debitLink)
    .then (response => {
      let temp = response.data;

      this.setState({debitData: temp,})

      let debitBalance = 0;

      for(let object of temp) {
        debitBalance = debitBalance + object.amount;
      }

      this.setState({debitBalance})
    })
    .catch((error) => {
      console.log(error);
    })
  }

  getCredit() {
    const creditLink = "https://moj-api.herokuapp.com/credits";

    axios.get(creditLink)
    .then (response => {
      let temp = response.data;

      this.setState({creditData: temp,})

      let creditBalance = 0;

      for(let object of temp) {
        creditBalance = creditBalance + object.amount;
      }

      this.setState({creditBalance})
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  mockLogin = (loginInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.username = loginInfo.username
    this.setState({currentUser: newUser})
  }
  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile username = {this.state.currentUser.username} joinDate = {this.state.currentUser.joinDate}/>);
    const LoginComponent = () => (<Login user = {this.state.currentUser} mockLogin = {this.mockLogin} {...this.props}/>)
    const DebitComponent = () => (<Debit data = {this.state.debitData} accountBalance = {this.state.creditBalance - this.state.debitBalance}/>)
    const CreditComponent = () => (<Credit creditData = {this.state.creditData} accountBalance = {this.state.creditBalance - this.state.debitBalance}/>)

    return(
      <Router>
        <div className = "App">
          <Nav/>
          <Switch>
            <Route exact path = "/home" render = {HomeComponent}/>
            <Route exact path = "/userProfile" render = {UserProfileComponent}/>
            <Route exact path = "/login" render = {LoginComponent}/>
            <Route exact path = "/debit" render = {DebitComponent}/>
            <Route exact path = "/credit" render = {CreditComponent}/>
            {/* <Route path = "/home" exact component = {Home}/> */}
            <Route path = "/about" exact component = {About}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

// const Home = () => (
//   <div>
//     <h1>Home</h1>
//   </div>
// );

export default App;