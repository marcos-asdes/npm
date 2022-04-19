import styled from "styled-components";

export default function BooksCover() {
    return (
        <Main>
            <Center>
                <p>Um guia de</p>
                <h1>npm</h1>
                <p>por Marcos</p>
            </Center>
            <Footer>
                <img src='./assets/play-button.svg' alt='start' />
            </Footer>
        </Main>
    )
}

const Main = styled.main`
    background-color: black;
`

const Center = styled.section`
    display: flex;

    p {
        color: red;
    }

    h1 {
        color: red;
    }
`

const Footer = styled.section`
    display: flex;

    img {
        height: 150px;
        width: 150px;
    }
`