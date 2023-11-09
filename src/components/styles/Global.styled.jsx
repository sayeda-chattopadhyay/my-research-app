import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        box-sizing: border-box;
    }

    body{
        background: white;
        color: #333;
    }

    img{
        max-width: 100%;
        height:auto;
    }

    .drop-down{
        color: #fff !important;
    }

    
    .banner {
        min-height: 70vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
`;

export default GlobalStyles;
