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

    
   .paragraph{
    width: 100%!important;
    max-width: 70%!important;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 0 auto;
        
      }
   
   
   }



   }

`;

export default GlobalStyles;
