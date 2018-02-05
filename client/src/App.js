import React, { Component } from 'react';
import { Element} from 'react-scroll'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import SubFooter from './components/SubFooter'
import { PageContainer } from './components/styled_components/Containers'

import './App.css';

class App extends Component {

  render() {
    return (
      <PageContainer>
        <Home />
        <Element name="About">
        <About />
        </Element>
        <Project />
        <Element name="Sub">
        <SubFooter />
        </Element>
      </PageContainer>
    );
  }
}

export default App;
