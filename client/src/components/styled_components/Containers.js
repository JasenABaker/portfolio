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

        img {
            height:83.2183px;
            width:80px;
        }

    }
`

export const ContainerTwo = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 auto;

    h2 {
        margin: 10px 10px;
        text-align: center;
    }

`

export const ContainerThree = ContainerTwo.extend`
    min-height: 100vh;
    width: 100vw;
    justify-content: none;
`
export const ContentDiv = styled.div`
        display: flex;
        height: 30vh;
        width: 100%;
        justify-content: space-around;
        flex: 1 0 auto;

        p{
            width: 200px;
            font-size: .8em;
            margin-left: 10px;
            font-weight: 700;
        }
`
export const ContentDivTwo = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 90vh;
        width: 100%;
        margin-bottom: 10px;


        h3{
            color: #242325;
            font-size: .9em;
            text-transform: uppercase;
        }
        svg{
            fill: #E01A4F;
            height: 4em;
        }
        p{
            color:#4B4B4C;
            font-size: .8em;
            margin: 5px 10px;
        }
`

export const ImgContainer = styled.div`
    height: 150px;
    width: 150px;
    overflow: hidden;
    border-radius: 100%;
    border: 3px solid black;

    img{
        height: 100%;
        width: auto;
        transform: translateX(-40px);
        
    }
`





export default { PageContainer, 
                ContainerOne, 
                ContainerTwo,
                ContainerThree, 
                ImgContainer,
                ContentDiv,
                ContentDivTwo}