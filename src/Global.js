import { createGlobalStyle } from 'styled-components'
import Fundo from './img/bg.jpg'

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    list-style: none;
  }

  body, html{
    height: 100vh;
    width: 100%;
    background-image: url(${Fundo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-family: 'Roboto', sans-serif;
    display: flex;
    /* flex-direction: row; */
  }
`
