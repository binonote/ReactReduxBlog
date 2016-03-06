import React from 'react';
import { Component } from 'react';
import Greeting from '../routes.js';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
