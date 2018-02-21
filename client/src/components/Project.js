import React, { Component } from 'react'
import styled from 'styled-components'
import {ContainerFour, ContentDivThree, ContainerThreeWrap, ScrollContainer, Overlay} from './styled_components/Containers'
import Project1 from './styled_components/images/Project1.png'
import Project2 from './styled_components/images/Project2.png'
import Project3 from './styled_components/images/Project3.png'
import Team from'./styled_components/images/TeamProject.png'

const ImgDiv1 = styled.div`
    height: 100%;
    width: 100%;
    background-postion: content;
    background: linear-gradient(0deg, rgba(137,49,104,0.8),rgba(137,49,104,0.8)), url(${Project1}) center no-repeat;
    background-size: cover;
    disply: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: white;
    text-decoration: none;
    
    @media screen and (min-width: 550px){

        width: 100%;
        h2{
            font-size: 1.5em;
        }
    }

`

const ImgDiv2 =  ImgDiv1.extend`
background: linear-gradient(0deg, rgba(114,225,209,0.8),rgba(114,225,209,0.8)), url(${Project2}) center no-repeat;
background-size: cover;
`

const ImgDiv3 = ImgDiv1.extend`
background: linear-gradient(0deg, rgba(220,150,90,0.8),rgba(220,150,90,0.8)), url(${Project3}) center no-repeat;
background-size: cover;
`

const ImgDiv4 = ImgDiv1.extend`
background: linear-gradient(0deg, rgba(42,114,33,0.8),rgba(42,114,33,0.8)), url(${Team}) center no-repeat;
background-size: cover;
`


class Project extends Component {
    render(){
        return(
            <ContainerFour>
                <h2>Projects</h2>
                
                
                <ScrollContainer>
                <ContainerThreeWrap>
                <ContentDivThree>
                    <ImgDiv1 >
                    <h2>Coheed Jeopardy</h2>
                    </ImgDiv1>
                    <Overlay href="http://jovial-booth-ab8fa6.bitballoon.com/">
                    <p>My earliest Project during the Web development immersive at General Assembly, I decided to do a Jeopardy game.
                    I used jQuery and Css Grid for this project.
                    </p>
                    </Overlay>
                </ContentDivThree>
                <ContentDivThree>
                    <ImgDiv2 >
                    <h2>Dungeon Master</h2>
                    </ImgDiv2>
                    <Overlay href="https://murmuring-cliffs-92834.herokuapp.com/">
                    <p>This project was designed to help Dungeon Masters for the game Dungeons and Dragons organize their adventures, enconters, players, and monsters.
                        Express, Mongodb, and Mongoose were used for this project. This project was also deployed on Heroku so give it a second to load, please.
                    </p>
                    </Overlay>
                </ContentDivThree>
                <ContentDivThree>
                    <ImgDiv3 >
                    <h2>FantaSee</h2>
                    </ImgDiv3>
                    <Overlay href="https://stark-atoll-57206.herokuapp.com/">
                    <p>For this project, I tried my hand a travel site. But unlike other travel sites, this app helps the user book trips to locations in worlds from various fantasy novels.
                        This project used React, Express, and Mongodb.
                    </p>
                    </Overlay>
                </ContentDivThree>
                <ContentDivThree>
                    <ImgDiv4>
                    <h2>Roam</h2>
                    </ImgDiv4>
                    <Overlay href="https://roamatl.herokuapp.com/">
                    <p>This was a group project that I completed with Jeremy Abernathy <a href="http://ghostmapmedia.com/">(Portfolio here)</a>,
                    Supriya Yerramilli <a href="https://supriyayerramilli.com">(Portfolio here)</a>, and Eric Lu <a href="https://www.ericlu.site">(Portfolio here)</a>. My responsibilities included building React components and styling.
                    I also helped with the backend on Rails. This was a wonderful learning experience for me.  Combining my skills with the differing skillsets of others to complete a task was a challenging but wonderful experience. 
                    </p>
                    </Overlay>
                </ContentDivThree>
                 </ContainerThreeWrap>
                </ScrollContainer>
               
                
            </ContainerFour>
        )
    }



}


export default Project