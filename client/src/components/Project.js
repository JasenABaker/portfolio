import React, { Component } from 'react'
import styled from 'styled-components'
import {ContainerFour, ContentDivThree, ContainerThreeWrap} from './styled_components/Containers'
import Project1 from './styled_components/images/Project1.png'
import Project2 from './styled_components/images/Project2.png'
import Project3 from './styled_components/images/Project3.png'
import Team from'./styled_components/images/TeamProject.png'

const ImgDiv1 = styled.a`
    height: 20vh;
    width: 100%;
    border-radius: 10px;
    background-postion: content;
    background: linear-gradient(0deg, rgba(137,49,104,0.8),rgba(137,49,104,0.8)), url(${Project1}) center no-repeat;
    background-size: cover;
    disply: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    color: white;
    text-decoration: none;

    &:hover{
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26), 0 3px 6px rgba(0, 0, 0, 0.33);
    }
    @media screen and (min-width: 550px){
        width: 90%;
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
                <ContainerThreeWrap>
                <ContentDivThree>
                    <ImgDiv1 href="http://jovial-booth-ab8fa6.bitballoon.com/">
                    <h2>Coheed Jeopardy</h2>
                    </ImgDiv1>
                    <p>My earliest Project during the Web development immersive at General Assembly, I decided to do a Jeopardy game.
                    I used jQuery and Css Grid for this project.
                    </p>
                </ContentDivThree>
                <ContentDivThree>
                    <ImgDiv2 href="https://murmuring-cliffs-92834.herokuapp.com/">
                    <h2>Dungeon Master</h2>
                    </ImgDiv2>
                    <p>This project was designed to help Dungeon Masters for the game Dungeons and Dragons organize their adventures, enconters, players, and monsters.
                        Express, Mongodb, and Mongoose were used for this project. This project was also deployed on Heroku so give it a second to load, please.
                    </p>
                </ContentDivThree>
                <ContentDivThree>
                    <ImgDiv3 href="https://stark-atoll-57206.herokuapp.com/">
                    <h2>FantaSee</h2>
                    </ImgDiv3>
                    <p>For this project, I tried my hand a travel site. But unlike other travel sites, this app helps the user book trips to locations in worlds from various fantasy novels.
                        This project used React, Express, and Mongodb.
                    </p>
                </ContentDivThree>
                <ContentDivThree>
                    <ImgDiv4 href="https://roamatl.herokuapp.com/">
                    <h2>Roam</h2>
                    </ImgDiv4>
                    <p>This was a group project that I completed with Jeremy Abernathy <a href="http://ghostmapmedia.com/">(Portfolio here)</a>,
                    Supriya Yerramilli <a href="supriyayerramilli.com">(Portfolio here)</a>, and Eric Lu <a href="www.ericlu.site">(Portfolio here)</a>. My responsibilities included building React components and styling.
                    I also helped with the backend on Rails. This was a wonderful learning experience for me.  Combining my skills with the differing skillsets of others to complete a task was a challenging but wonderful experience. 
                    </p>
                </ContentDivThree>
                </ContainerThreeWrap>
            </ContainerFour>
        )
    }



}


export default Project