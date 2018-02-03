import styled from 'styled-components'
import back from './images/another.jpg'





export const PageContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`

export const ContainerOne = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    flex: 1 0 auto;
    background-color:#242325;
    
    h2{
        font-size: 24px;
        color: white;
        font-weight: 700;
        text-align: center;
        margin: 10px;
    }

    @media screen and (min-width: 550px) {
        background: linear-gradient(0deg, rgba(36,35,37,0.6), rgba(36,35,37,0.6)), url(${back}) center no-repeat;
        background-size: cover;

        h2{
            font-size: 48px;
        }

    }
`



export default { PageContainer, ContainerOne }