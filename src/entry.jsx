import React, { Component } from 'react';
import { render } from 'react-dom';
import { DemoModule } from '../lib/app'

class App extends Component {
  constructor () {
    super();
    this.state = {}
  }
  render () {
    return (
      <div>
        React组件开发环境
        <DemoModule />
      </div>
    );
  }
}

render(
  <App />, document.getElementById('app')
)