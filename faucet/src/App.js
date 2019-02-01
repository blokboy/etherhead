import React, { Component } from "react";
import "./App.css";
import Web3 from "web3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashes: [],
      error: ""
    };
    this.web3 = new Web3("wss://mainnet.infura.io/_ws");
  }

  componentWillMount() {
    this.web3.eth
      .subscribe("newBlockHeaders", function(error, result) {
        if (!error) {
          console.log(result);
        }
      })
      .on("data", transaction => {
        this.web3.eth
          .getTransactionFromBlock(transaction.hash, 0)
          .then(data => {
            this.setState({
              hashes: [
                ...this.state.hashes,
                this.web3.utils.fromWei(data.value)
              ]
            });
          });
      });
  }

  componentWillUnmount() {
    this.web3.unsubscribe(function(error, success) {
      if (success) console.log("Successfully unsubscribed!");
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Transactions:</h2>
        {this.state.hashes.map(hash => (
          <h2>{hash}</h2>
        ))}
      </div>
    );
  }
}

export default App;
