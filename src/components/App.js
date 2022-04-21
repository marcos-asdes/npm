import * as React from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import BooksCover from './BooksCover';
/* import Pages from './Pages'; */
/* import References from './References'; */
/* import Greetings from './Greetings'; */

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none !important;
        font-family: 'Lexend Deca', sans-serif;
        /* letter-spacing: 1px; */
        font-weight: 300;
        cursor: default;
        -ms-overflow-style: none; /* for IE, Edge */
        scrollbar-width: none; /* for Firefox */
        transition: all 200ms ease-in-out 0s;
    }

    ::-webkit-scrollbar {
        display: none;
        appearance: none;
    }

    *.hidden {
        display: none !important;
    }

    *.disabled {
        opacity: 0.4;
        pointer-events: none;
    }

    div.root {
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
    }
`

export default function App() {

    const [ darkMode, setDarkMode ] = useState(true);

    return (
        <React.Fragment>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <BooksCover darkMode={darkMode} setDarkMode={setDarkMode}></BooksCover>
            </ThemeProvider>
        </React.Fragment>
    )
}

const theme = {
    colors: {
        normalBackgroundColor: "#0E0E0E",
        darkModeBackgroundColor: "#F0F0F0",
        normalBackgroundButtonColor: "grey",
        darkModeBackgroundButtonColor: "white",
        logoColorFontDarkMode: "white",
        logoColorFontNormalMode: "red",
        progressButtonNormalModeColor: "black",
        progressButtonDarkModeColor: "white",
    }
}