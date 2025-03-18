import { createGlobalStyle } from 'styled-components';
import './normalize.css';
import { COLORS } from '../constants/colors';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        font-family: "Manrope", sans-serif;
        margin: 0;
        background-color: ${COLORS.black};
    }

`;
