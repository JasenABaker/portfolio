import React, { Component } from 'react'
import styled from 'styled-components'

const FormPage = styled.div`
    height: 100%;
    width: 100%;
    background-color: #001737;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Top = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    h2 {
        font-size: 24px;
        text-align: center;
    }
    p{
        font-size: .9em;
        text-align: center;
    }
`

const CloseButton = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color:#0A0A0B;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.5em;
    align-self: flex-end;
    margin-right: 20px;

    &:hover{
        background-color: #373738;
    }

    @media screen and (min-width: 550px){
        height: 50px;
        width: 50px;
        font-size: 2em;
    }
`
const FormStyled = styled.form`
    height: 60%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: center;
`

const Input = styled.input`
    height: 24px;
    width: 90%;
    font-size: 16px;
    border-radius: 4px;
    box-shadow: none;
    border: 2px solid #FD8800;
    background: transparent;
    color: #fff;
    outline: none;
    @media screen and (min-width: 550px){
        height: 38px;
        width: 50%;
    }

`

const Textarea = styled.textarea`
height: 74px;
width: 90%;
font-size: 16px;
border-radius: 4px;
box-shadow: none;
border: 2px solid #FD8800;
background: transparent;
color: #fff;
outline: none;

`
const InputButton = styled.input`
color: #FD8800;
margin: 3.6rem 0 0;
font-size: 1.1rem;
background-color: transparent;
border: 2px solid #FD8800;
height: 38px;
width: 150px;
font-weight: 700;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;

:hover{
    outline-style: none;
    background-color: #FD8800;
    color: #fff;
}
@media screen and (min-width: 550px) {
    height: 68px;
    width: 350px;
    font-size: 2.1rem;
}


`



class Form extends Component {
    render() {
        return (
            <FormPage>
                <CloseButton onClick={()=>this.props.closeModal()}> X </CloseButton>
                <Top>
                
                    <h2>Please, Introduce yourself!</h2>
                    <p>I'll get in touch with you as soon as possible, usually within a day!</p>
                </Top>
                <FormStyled onSubmit={this.props.sendEmail}>
            
                    <Input type="text" name="name"  placeholder= "name" onChange={this.props.handleChange}/>

                    <Input type="email" name="email" placeholder="email" onChange={this.props.handleChange}/>

                    <Textarea name="message" rows="5" placeholder="message" onChange={this.props.handleChange}></Textarea>

                    <InputButton type="submit" />
                </FormStyled>
            </FormPage>
        )
    }

}

export default Form