import React, { Component } from 'react'
import styled from 'styled-components'
import {ATags} from './styled_components/Buttons'


const FootSub = styled.div`
    height: 60vh;
    width: 100vw;
    background-color:#FD8800;
    display: flex;
    flex-direction: column;
    align-items: center;
    jusify-content: space-between;
    color: #001737;

    h2{
        font-size: 2em;
        font-family: 'Dhurjati', sans-serif;
        font-weight: 900;
        margin-top: 30px;
    }
    p{
        font-family: 'Nanum Myeongjo', serif;
        margin: 0 auto;
        font-size: 1em;
        font-weight: bolder;
    }
    @media screen and (min-width: 550px){
        font-size: 1.5em;

`

const ButtonFoot = styled.div`
    color: #001737;
    margin: 3.6rem 0 0;
    font-size: 1.5em;
    background-color: transparent;
    border: 2px solid #001737;
    height: 48px;
    width: 250px;
    font-weight: 700;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: 'Dhurjati', sans-serif;

    :hover{
        outline-style: none;
        background-color: #001737;
        color: #FD8800;
    }
    @media screen and (min-width: 550px) {
        height: 68px;
        width: 350px;
        font-size: 2 rem;
    }
`



class SubFooter extends Component {
    render(){
        return(
            <FootSub>
            
                <h2>Let's Work Together</h2>
                <p>I am open to new experiences. Please, drop me a line.</p>
                <br />
                <ATags href="https://drive.google.com/open?id=1gDTdRK75az9hDkvDEZ2XbTCvstKtGxtH">
                Here's My Resume
                </ATags>
                <ButtonFoot onClick={()=>this.props.openModal()}>
                Let's Get To work!
                </ButtonFoot>
            </FootSub>
    
        )
    }
}


export default SubFooter