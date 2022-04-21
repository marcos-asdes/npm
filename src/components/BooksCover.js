import styled from "styled-components";

/* // Element
var darkmodeBtn = document.getElementById("darkmode-btn");
var btnIcon = document.getElementById("btn-icon");
var bgMask = document.getElementById("bg-mask");
var mainBg = document.getElementById("main");

// Element Content
var darkColor = "#0e0e0e";
var lightColor = "#fff";

var bgDark = "#191919";
var bgLight = "#f2f2f2";

// Status
var status = 0; // 0 = Light mode, 1 = Dark mode
var duration = 400;

function switchMode() {

    if (status == 0) {

        bgMask.style.backgroundColor = darkColor;
        setTimeout(function() {
            mainBg.style.backgroundColor = darkColor;
        }, duration);
        btnIcon.setAttribute("class", "fas fa-moon fa-2x");
        btnIcon.style.color = lightColor;
        darkmodeBtn.style.backgroundColor = bgDark;
        
        status = 1;

    } else if (status == 1) {

        bgMask.style.backgroundColor = lightColor;
        setTimeout(function() {
            mainBg.style.backgroundColor = lightColor;
        }, duration);
        btnIcon.setAttribute("class", "fas fa-sun fa-2x");
        btnIcon.style.color = darkColor;
        darkmodeBtn.style.backgroundColor = bgLight;

        status = 0;

    }

    restartAnimation();

} */
/* 
function restartAnimation() {

    bgMask.classList.remove("animation");
    void bgMask.offsetWidth;
    bgMask.classList.add("animation");
    
} */

/*                 
    <button id="darkmode-btn" >
    <i className="fas fa-sun fa-2x" id="btn-icon" onClick={switchMode}></i>
    </button>
    <div className="bg-mask" id="bg-mask"></div> */

export default function BooksCover({darkMode, setDarkMode}) {
    
    return (
        <Main darkMode={darkMode}>
            <Header>
                <img onClick={() => {setDarkMode(!darkMode)}} src={darkMode ? "./assets/moon.svg" : "./assets/sun.svg"} alt="darkMode" />
            </Header>
            <Center>
                <div className="container">
                    <div className="left">
                        <p>Um guia de</p>
                    </div>
                    <div className="center">
                        <h1>npm</h1>
                    </div>
                    <div className="right">
                        <p>por Marcos A.</p>
                    </div>
                </div>
            </Center>
            <Footer>
                <img src='./assets/play-button.svg' alt='start' />
            </Footer>
        </Main>
    )
}

const Main = styled.main`
    background-color: ${props => !props.darkMode ? props.theme.colors.normalBackgroundColor : props.theme.colors.darkModeBackgroundColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    /* height: 100vh; */
`
const Header = styled.section`
    display: flex;
    flex-direction: row-reverse;
    margin: auto;
    width: 100vw;
    height: 100px;
    padding-top: 20px;
    padding-right: 20px;

    img {
        background-color: ${props => !props.darkMode ? props.theme.colors.normalBackgroundButtonColor : props.theme.colors.normalBackgroundButtonColor};
        border-radius: 8px;
        border: none;
        width: 40px;
        height: 40px;
    }
    
/*     ::selection {
        color: #fff;
        background-color: #fff;
    } */

 /*    button {
        position: relative;
        z-index: 100;
        width: 40px;
        height: 40px;
        border: none;
        outline: none;
        border-radius: 8px;
        background-color: #f2f2f2;
        cursor: pointer;
        transition: 300ms;
    } */

/*     .bg-mask {
        position: fixed;
        width: 0;
        height: 0;
        border-radius: 50%;
        background-color: #0e0e0e;
    }

    button {
        transform: scale(3);
    }

    button:hover {
        transform: scale(3.2);
    }

    button:active {
        transform: scale(2.8);
    }

    .animation {
        animation: BackgroundSpread 500ms backwards;
    } */

/*     @keyframes BackgroundSpread {
        0% {
            width: 0;
            height: 0;
        }

        100% {
            width: max(141.42vw, 141.42vh);
            height: max(141.42vw, 141.42vh);
        }
    } */
`
const Center = styled.section`
    display: flex;
    flex-direction: column;
    font-family: 'Lexend Deca', sans-serif;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 220px);
    padding-bottom: 50px;

    .container {
        width:100vw;
    }

    p {
        color: red;
        font-size: 18px;
        line-height: 18px;
    }

    h1 {
        color: red;
        font-size: 100px;
        line-height: 50px;
    }

    .right {
        /* background-color: blue; */
        display: flex;
        justify-content: center;
        margin-left: 95px;
        font-weight: 400;
        margin-top: 20px;
    }

    .center {
        /* background-color: green; */
        display: flex;
        justify-content: center;
    }

    .left {
        /* background-color: yellow; */
        display: flex;
        justify-content: center;
        margin-right: 105px;
    }
`
const Footer = styled.section`
    display: flex;
    width: 100vw;
    height: 120px;
    flex-direction: row-reverse;
    padding: 0 20px 0 0;
    align-items: center;


    img {
        height: 75px;
        width: 75px;
    }
`