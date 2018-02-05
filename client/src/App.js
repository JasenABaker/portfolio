import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/About'
import { PageContainer } from './components/styled_components/Containers'

import './App.css';

class App extends Component {
  render() {
    return (
      <PageContainer>
        <Home />
        <About />
      </PageContainer>
    );
  }
}

export default App;
