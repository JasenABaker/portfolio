import React, { Component } from 'react'
import styled from 'styled-components'


const FootSub = styled.div`
    height: 40vh;
    width: 100vw;
    background-color:#E01A4F;
    display: flex;
    flex-direction: column;
    align-items: center;
    jusify-content: space-around;
    color: #242325;

    h2{
        margin-top: 30px;
    }
    p{
        margin: 0 auto;
        font-size: .9em;
    }
    @media screen and (min-width: 550px){
        font-size: 1.5em;

`

const ButtonFoot = styled.div`
    color: #242325;
    margin: 3.6rem 0 0;
    font-size: 1.1rem;
    background-color: transparent;
    border: 2px solid #242325;
    height: 48px;
    width: 250px;
    font-weight: 700;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    :hover{
        outline-style: none;
        background-color: #242325;
        color: #E01A4F;
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
                <p>I am open to new experinces. Please, drop me a line.</p>
                <ButtonFoot onClick={()=>this.props.openModal()}>
                Let's Get To work!
                </ButtonFoot>
            </FootSub>
    
        )
    }
}


export default SubFooter