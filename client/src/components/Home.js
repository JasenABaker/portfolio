import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'
import {ContainerOne} from './styled_components/Containers'
import {ButtonHome, ATags} from './styled_components/Buttons'
import Logo from '../Subtract.svg'

const Contain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


class Home extends Component {
    render(){
        return(
            <ContainerOne>
                <div>
                    <img src={Logo} alt="Jasen Baker"/>
                </div>
                <Contain>
                <h2>My name is Jasen and I love to code.</h2>
                <ButtonHome>
                    Work with me.
                </ButtonHome>
                </Contain>
                <div>
                    <Link 
                    activeClass= "Active"
                    to="About"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={20}
                    duration={1000}
                    delay={30}
                    isDynamic={true}>
                    <ATags href="#">Want to know more about me?</ATags>
                    </Link>
                </div>
            </ContainerOne>
        )
    }
}

export default Home