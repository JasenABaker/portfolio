import styled from 'styled-components'



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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    h2{
        font-size: 24px;
        color: white;
        font-weight: 700;
        text-align: center;
        margin: 10px;
    }
`



export default { PageContainer, ContainerOne }