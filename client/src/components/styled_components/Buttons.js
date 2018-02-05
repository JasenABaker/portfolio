import styled from 'styled-components'


export const ButtonHome = styled.button`
    color: #fff;
    margin: 3.6rem 0 0;
    font-size: 1.1rem;
    background-color: transparent;
    border: 2px solid #E01A4F;
    height: 38px;
    width: 250px;
    font-weight: 700;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        outline-style: none;
        background-color: #E01A4F;
    }
    @media screen and (min-width: 550px) {
        height: 68px;
        width: 350px;
        font-size: 2.1rem;
    }

`

export const ButtonFoot = ButtonHome.extend`
    border: 2px solid #242325;
`

export const ATags = styled.a`
    color: #fff;
    text-decoration: none;
`




export default { ButtonHome, 
                ATags,}