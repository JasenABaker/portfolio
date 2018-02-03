import React, { Component } from 'react';
import Home from './components/Home'
import { PageContainer } from './components/styled_components/Containers'

import './App.css';

class App extends Component {
  render() {
    return (
      <PageContainer>
        <Home />
      </PageContainer>
    );
  }
}

export default App;
