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
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h2 {
        margin: 10px 10px;
        text-align: center;
    }
    @media screen and (min-width: 550px) {
        min-height: 120vh;

        h2 {
            font-size: 2em;
            margin: 30px 10px;
        }

    }

`


export const ContainerThree = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 0 auto;
    @media screen and (min-width: 550px){
        margin-top: 30px;
        min-height: 40vh;
        flex-direction: row;
    }
`
export const ContainerThreeWrap = ContainerThree.extend`
    @media screen and (min-width: 550px){
        flex-wrap:wrap;
    }

`

export const ContainerFour = ContainerTwo.extend`
    background-color:#E9E6E0;

    h2{
        margin-top: 30px;
        align-self: center;
    }
    @media screen and (min-width: 550px){
        min-height: 40vh;
    }
    
`
export const ContentDiv = styled.div`
        display: flex;
        flex-direction: column;
        height: 40vh;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        flex: 1 0 auto;

        p{
            text-align: center;
            width: 200px;
            font-size: .8em;
            margin-left: 10px;
            font-weight: 700;
        }
        @media screen and (min-width: 550px){
            height: 40vh;
            flex-direction: row;
            p {
                font-size: 2em;
                width: 450px;
                marign: 10px auto 0 0;
                
            }
        }

`
export const ContentDivTwo = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 70%;
        width: 100%;
        margin-bottom: 10px;


        h3{
            color: #242325;
            font-size: .9em;
            text-transform: uppercase;
        }
        svg{
            fill: #E01A4F;
            height: 90px;
            width: 90px;
        }
        p{
            text-align: center;
            color:#4B4B4C;
            font-size: .7em;
            margin: 5px 10px;
        }

        @media screen and (min-width: 550px){
            height: 60%;
            width: 80%;
            h3{
                font-size: 24px;
            }
            svg {
                height: 150px;
                width: 150px;
            
            }
            p {
                text-align: left;
                font-size: 1.5em;
                margin: 10px 20px;
            }
            
        }
`

export const ContentDivThree = ContentDivTwo.extend`
@media screen and (min-width: 550px) {
    width: 30vw;

    p {
        font-size: .9em;
        text-align: center;
    }
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
    @media screen and (min-width: 550px){
        height: 300px;
        width: 300px;
    }
`





export default { PageContainer, 
                ContainerOne, 
                ContainerTwo,
                ContainerThree,
                ContainerThreeWrap,
                ContainerFour, 
                ImgContainer,
                ContentDiv,
                ContentDivTwo,
                ContentDivThree}