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
        background: linear-gradient(0deg, rgba(36,37,51,0.6), rgba(36,37,51,0.6)), url(${back}) center no-repeat;
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
    font-family: 'Dhurjati', sans-serif;
    background-color:#ECE5F0;

    h2 {
        margin: 10px 10px;
        text-align: center;
        
    }
    @media screen and (min-width: 550px) {
        min-height: 120vh;

        h2 {
            font-size: 4em;
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
    align-items: center;    
    flex: 1 0 auto;
    @media screen and (min-width: 550px){
        margin-top: 30px;
        min-height: 40vh;
        flex-direction: row;
        align-items: flex-start;;  
    }
`
export const ContainerThreeWrap = ContainerThree.extend`
        justify-content: flex-start;

    
@media screen and (min-width: 550px){
        flex-wrap: nowrap;
        justify-content: none;

    }

`

export const ContainerFour = ContainerTwo.extend`   
    min-height: 40vh;
    background-color:#fff;
    color: #001737;

    h2{
        margin-top: 30px;
        align-self: center;
    }
    @media screen and (min-width: 550px){
        min-height: 60vh;
    }
    
`

export const ScrollContainer = styled.div`
    height: 30vh;
    width: 95vw;
    overflow-y: scroll;

    @media screen and (min-width: 550px) {
        height: 50vh;
        overflow-y: hidden;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
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
            font-size: .95em;
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
        width: 70%;
        margin-bottom: 10px;


        h3{
            color: #242325;
            font-size: 1.5em;
            text-transform: uppercase;
        }
        svg{
            fill: #FD8800;
            height: 90px;
            width: 90px;
        }
        p{
            font-family: 'Nanum Myeongjo', serif;
            text-align: center;
            color:#4B4B4C;
            font-size: .9em;
            margin: 30px 10px;
        }

        @media screen and (min-width: 550px){
            height: 70%;
            width: 80%;
            h3{
                font-size: 2em;
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
        height: 30vh;
        width: 90%;
        position: relative;
        margin: 0;
        transition: .8s ease;
        
 
h2{
    font-size: 1.5em;
    padding: 0;
}

    :hover{
        h2{
            opacity: 0;
        }
    }

@media screen and (min-width: 550px) {
    width: 30vw;
    flex: 0 0 auto;

    p {
        padding: 0;
        margin: 0;
        font-size: .8em;
        text-align: center;
        
    }
    :hover{
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26), 0 3px 6px rgba(0, 0, 0, 0.33);
        transform: scale(1.3, 1.3);
        z-index: 1;

    }
}
`

export const Overlay = styled.a`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    overflow: scroll;
    text-decoration: none;
    

    p{
    padding: 0;
    margin: 0;
    height: 100%;
    width: 80%;
    color: white;
    font-size: .9em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    }

    :hover {
        opacity: 1;
        transform: translateY(90px)
    }
    @media screen and (min-width: 550px){
        p{
            font-size: .8em;
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





