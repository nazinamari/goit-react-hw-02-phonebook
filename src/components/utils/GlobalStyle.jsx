import "modern-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
        background: #f3f3f3;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 16px;
        padding: 32px;
    }

    p{
        margin: 0;
    }

    ul{
        padding: 0;
        margin: 0;
        list-style: none;
    }

    h1, h2, h3, h4 {
        text-align: center;
        color:#333;
        margin: 0;
    }

    h1 {
        margin-bottom: 25px;
    }
`
    


