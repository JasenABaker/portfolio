import React, { Component } from 'react'
import styled from 'styled-components'

const FormPage = styled.div`
    height: 100%;
    width: 100%;
    background-color: #242325;
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

`

const Textarea = styled.textarea`
    width: 90%;
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
                <FormStyled method="POST">
            
                    <Input type="text" name="name"  placeholder= "name"/>

                    <Input type="email" name="email" placeholder="email" />

                    <Textarea name="message" rows="5" placeholder="message"></Textarea>

                    <input type="submit" />
                </FormStyled>
            </FormPage>
        )
    }

}

export default Form