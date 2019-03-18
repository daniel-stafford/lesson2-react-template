/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css';

/****** ADD YOUR CODE AFTER THIS LINE ******/

const Hello = () => (
  <div>
    <h1>Hello World!</h1>
    <h2>This is my first time using docker.</h2>
  </div>
);

class App extends Component {
  render() {
    return <Hello />;
  }
}

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(<App />, document.getElementById('root'));
