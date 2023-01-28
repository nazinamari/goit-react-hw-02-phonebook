import "modern-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 30px;
        padding: 0;
        background-color: #f4f4f4;
        }
    p{
        margin: 0;
    }
    ul{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    h1 {
        text-align: center;
    }
`;

