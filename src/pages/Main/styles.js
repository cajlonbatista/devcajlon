import styled from 'styled-components';

import rogueone from '../../global/assets/kaylo.jpg';


export const MainContainer = styled.main`

  > img {
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
  }
  div:first-child {
    padding-top: 65px !important;
    width: 100%;
    padding: 10px 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    background-image: url(${rogueone});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    animation: spark 0.4s linear backwards;
    h1 {
      font-family: Poppins, sans-serif;
      color: white;
      font-weight: 400;
      font-size: clamp(0.9rem, 1vw + 1.6rem, 2.2rem);
      animation: textin 0.6s linear backwards;
      padding-bottom: 10px;
    }
    span {
      color: white;
      font-family: Nunito Sans, sans-serif;
      font-weight: 100;
      animation: textin 0.4s linear backwards;
      margin-bottom: 50px;
      font-size: clamp(0.6rem, 1vw + 0.8rem, 1.5rem);
    }
    svg {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 40%;
      @media (max-width: 1000px) {
        display: none;
      }
    }
  }
  >section{
    height: 100vh;
    background: #000000;
  }
`;
