import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;
    color: #D0D6F9;
    background-image: url("/images/home/background-home-desktop.jpg");
    font-family: "Barlow", sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }  
  p{
    margin: 0;
  }
  h2,h1{
    margin: 0;
  }
`;
