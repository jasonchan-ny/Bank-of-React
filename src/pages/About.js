import React from 'react'

function About() {
    return(
        <div>
            <nav>
                <h2>About</h2>
            </nav>      
            <h1>Bank of React</h1>                      
           </div>
    );
}

export default About;




  // getDebit() {
  //   const debitLink = "https://moj-api.herokuapp.com/debits";

  //   axios.get(debitLink)
  //   .then (response => {
  //       response.data.map((data) => {
  //         this.setState({
  //           debitBalance: this.state.debitBalance + data.amount,
  //         })
  //       })
  //       this.setState({debitData: response.data,})
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }

  // getCredit() {
  //   const creditLink = "https://moj-api.herokuapp.com/credits";

  //   axios.get(creditLink)
  //   .then (response => {
  //       response.data.map((data) => {
  //         this.setState({
  //           creditBalance: this.state.creditBalance + data.amount,
  //         })
  //       })
  //       this.setState({creditData: response.data,})
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }