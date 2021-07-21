import React, { Component } from "react";
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decreaseCount = () => {
    if(this.state.count>0){
    this.setState({
      count: this.state.count - 1
    });
  }
  else{
    alert("No negative values");
  }
  };

  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <div className="header">Counter Application</div>
        <div>
          <div className="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div className="buttons">
          <button onClick={this.decreaseCount}>-</button>
          <button onClick={this.increaseCount}>+</button>
          </div>
        </div>
        <div className="footer">-ArunArvindh</div>
      </div>
    );
  }
}
