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

export default App;
