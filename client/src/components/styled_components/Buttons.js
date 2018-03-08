import styled from 'styled-components'


export const ButtonHome = styled.div`
    color: #fff;
    margin: 3.6rem 0 0;
    font-size: 1.1rem;
    background-color: transparent;
    border: 2px solid #FD8800;
    height: 38px;
    width: 250px;
    font-weight: 700;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .2s ease;

    :hover{
        outline-style: none;
        background-color: #FD8800;
        cursor: pointer;
    }
    @media screen and (min-width: 550px) {
        height: 68px;
        width: 350px;
        font-size: 2.1rem;
    }

`


export const ATags = styled.a`
    color: #fff;
    text-decoration: none;
    cursor: pointer;

    img {
        border-radius: 200px;
    
    :hover {
        
        transform: scale(1.1, 1.1);
        
    }
}
`
export const Tag = styled.div`
    color: #fff;
    cursor: pointer;
`



