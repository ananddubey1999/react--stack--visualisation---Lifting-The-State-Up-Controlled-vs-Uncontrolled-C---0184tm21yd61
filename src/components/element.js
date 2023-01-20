import React, { Component } from 'react';

class Element extends Component {
  render() {
    return (
      <div className="element" value={this.props.value}>
        {this.props.value}
      </div>
    );
  }
}

class Stack extends Component {
  constructor() {
    super();
    this.state = {
      stack: [],
    };
  }

  push = (value) => {
    let newStack = this.state.stack;
    newStack.push(value);
    this.setState({ stack: newStack });
  };

  pop = () => {
    let newStack = this.state.stack;
    if (newStack.length === 0) {
      window.alert("Stack is empty");
      return;
    }
    let value = newStack.pop();
    this.setState({ stack: newStack });
    return value;
  };

  top = () => {
    let newStack = this.state.stack;
    if (newStack.length === 0) {
      window.alert("Stack is empty");
      return;
    }
    let value = newStack[newStack.length - 1];
    return value;
  };

  render() {
    const stack = this.state.stack.map(val => {
      return <Element value={val} key={val} />;
    });
    return (
      <div className="stack">
        {stack}
        <button onClick={() => this.push(this.props.value)}>Push</button>
        <button onClick={() => this.pop()}>Pop</button>
        <button onClick={() => this.top()}>Top</button>
      </div>
    );
  }
}

export default Element;
