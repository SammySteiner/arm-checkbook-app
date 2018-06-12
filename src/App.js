import React, { Component } from 'react';
import DataViz from './Containers/DataViz.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ARM Checkbook App</h1>
        </header>
        <p className="App-intro">
          Integrate with the nyc checkbook api.
        </p>
        <DataViz />
      </div>
    );
  }
}

export default App;
