import React, { Component } from 'react';
import './App.css';
import { Page } from './components/Page';

const pageContext = {
  userInfo: {
    id: 1,
    name: 'Legolas kun',
  },
};

class App extends Component {
  render() {
    return <Page pageContext={pageContext} />;
  }
}

export default App;
