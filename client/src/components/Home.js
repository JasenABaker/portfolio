import React, { Component } from 'react'
import {ContainerOne} from './styled_components/Containers'
import Logo from '../Logo.svg'


class Home extends Component {
    render(){
        return(
            <ContainerOne>
                <div>
                    <img src={Logo} alt="Jasen Baker"/>
                </div>
                <h2>My name is Jasen and I love to code.</h2>
            </ContainerOne>
        )
    }
}

export default Home