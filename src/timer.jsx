import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
    this.timer = null;
    console.log("Timer Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Timer from getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Timer from shouldComponentUpdate");
    return true; // Update component on every state change
  }

  componentDidMount() {
    console.log("Timer from componentDidMount");
    
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Timer from getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Timer from componentDidUpdate");

    // Stop the timer after 5 seconds
    if (this.state.time >= 5 && this.timer) {
      clearInterval(this.timer);
      this.timer = null; // Optionally, set to null after clearing
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer); // Clean up timer
  }

  render() {
    console.log("Timer from render");
    return (
      <>
        <h1 style={{ color: 'blue' }}>Time Spent: {new Date(this.state.time * 1000).toISOString().slice(11, 19)}</h1>
      </>
    );
  }
}

export default Timer;
