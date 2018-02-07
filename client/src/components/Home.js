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
    font-family: 'Nanum Myeongjo', serif;
`


class Home extends Component {
    render(){
        return(
            <ContainerOne>
                <div>
                    <ATags href="https://www.linkedin.com/in/jasenabaker/"><img src={Logo} alt="Jasen Baker"/></ATags>
                </div>
                <Contain>
                <h2>My name is Jasen and I love to code.</h2>
                <Link 
                    activeClass= "Active"
                    to="Sub"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={10}
                    duration={1000}
                    delay={30}
                    isDynamic={true}><ButtonHome>
                    Work with me.
                </ButtonHome></Link>
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
                    <ATags>Want to know more about me?</ATags>
                    </Link>
                </div>
            </ContainerOne>
        )
    }
}

export default Home