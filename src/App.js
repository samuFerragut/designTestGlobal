import { Component } from 'react';
import './assets/css/App.css';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Router />
        </header>
      </div>
    );
  }
}

export default App;
