import React, { Component } from "react";
import "./App.css";
import Web3 from "web3";

var web3 = new Web3("wss://mainnet.infura.io/_ws");

const subscription = web3.eth
  .subscribe("newBlockHeaders", function(error, result) {
    if (!error) console.log(result);
  })
  .on("data", function(transaction) {
    console.log(transaction);
  });

class App extends Component {
  componentWillUnmount() {
    subscription.unsubscribe(function(error, success) {
      if (success) console.log("Successfully unsubscribed!");
    });
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
