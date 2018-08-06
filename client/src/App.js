import React, { Component } from 'react';
import axios from 'axios'
import { Element} from 'react-scroll'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import SubFooter from './components/SubFooter'
import Footer from './components/Footer'
import Form from './components/Form'
import { PageContainer } from './components/styled_components/Containers'
import Modal from 'react-modal'

import './App.css';

class App extends Component {
      state = {
        modalIsOpen: false,
        name: '',
        email: '',
        message: ''
  
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }
  closeModal = ()=> {
    this.setState({modalIsOpen: false});
  }

  handleSendMail = async () => {

    const { name, email, message } = this.state
   try{ const res = await axios.post('/api/send', {
        name,
        email,
        message
      })
    }catch(err){
      console.log(err)
    }

  }

  handleInputChange = (event) => {
    const attribute = event.target.name
    const val = event.target.value

    const email = { ...this.state.email }
    email[attribute] = val

    this.setState({ email })
}

sendEmail = (event)=>{ 
  event.preventDefault()
  this.handleSendMail()
  this.closeModal()
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
        <Footer />
        <Modal isOpen={this.state.modalIsOpen}>
          <Form sendEmail={this.sendEmail}
                closeModal={this.closeModal}
                handleChange={this.handleInputChange}/>
        
        </Modal>
      </PageContainer>
    );
  }
}

export default App;
