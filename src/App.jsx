import React, { Component } from 'react';
import './App.css';
import Timer from './timer'; // Ensure Timer component is correctly imported

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount : false,
    };
  


  }
  handleMount = () => {
    this.setState((prevState) => ({ mount: !prevState.mount }));
  }
  
  render() {
    return (
      <div className="App">
        <h1 style ={{ fontFamily: 'Impact, sans-serif',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        
            fontWeight: 700
        }} >Task Completion Timer</h1>
        <button style={{ 
    backgroundColor: this.state.mount ? 'red' : 'green',
    color: 'white' ,
    padding: '10px 20px',
    fontSize: '18px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 1)'
  }} 
                onClick={this.handleMount}>{this.state.mount?"Stop" : "Start"}</button>
        {this.state.mount ? <Timer/> :null} {/* Ensure Timer is rendered properly */}
      </div>
    );
  }
}

export default App;
