import React, {component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0
    };
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Count: {this.state.counter}</p>
          <button onclick={() => {this.setState({counter: this.state.counter + 1})}}>INCREASE!</button>
          <button onclick={() => {this.setState({counter: this.state.counter - 1})}}>INCREASE!</button>
        
      
      </header>
    </div>
  );
}
}

class Time extends Component {
  render() {
    return
var d = new Date(2018, 11, 24);
document.getElementById("demo").innerHTML = d;

}
}
class Time extends Component {
  render() {
    return
<div id="clock">
  <div id="hour"><img src="images/hourHand.png" /></div>
  <div id="minute"><img src="images/minuteHand.png" /></div>
  <div id="second"><img src="images/secondHand.png" /></div>
</div>
}
}
export default App;
