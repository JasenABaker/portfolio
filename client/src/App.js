import React, { Component } from 'react';
import { Element} from 'react-scroll'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import SubFooter from './components/SubFooter'
import Form from './components/Form'
import { PageContainer } from './components/styled_components/Containers'
import Modal from 'react-modal'

import './App.css';

class App extends Component {
      state = {
    modalIsOpen: false,
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }
  closeModal= ()=> {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <PageContainer>
        <Home />
        <Element name="About">
        <About />
        </Element>
        <Project />
        <Element name="Sub">
        <SubFooter openModal={this.openModal} />
        </Element>
        <Modal isOpen={this.state.modalIsOpen}>
          <Form closeModal={this.closeModal}/>
        
        </Modal>
      </PageContainer>
    );
  }
}

export default App;
