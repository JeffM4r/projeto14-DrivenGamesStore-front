import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
    
    body {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-family: 'Montserrat', sans-serif;
        color: #FFFFFF;

        background-color: #0E0E13;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;
