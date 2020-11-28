import styled from 'styled-components';

import lordvader from '../../global/assets/vader.jpg';

export const PortifolioContainer = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  animation: spark 0.4s linear backwards;
  background-color: black;
  background-image: url(${lordvader});
  background-position: center;
  background-size: cover;
  > section {
    padding-top: 80px !important;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    align-content: center;
    grid-gap: 20px;
    padding: 10px 20px;
    @media (max-width: 320px) {
      padding: 5px;
    }
    > section {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #1c1b20;
      border-radius: 10px;
      border: 2px solid transparent;
      transition: all 0.4s;
      :hover {
        border-color: #ad0606;
      }
      > section {
        article {
          padding: 10px 20px;
          h2 {
            color: #ad0606;
            font-family: Poppins, sans-serif;
            margin: 10px 0px;
            font-size: 20px;
          }
          p {
            color: #979797;
            font-family: Open Sans, sans-serif;
            font-size: 14px;
            margin: 10px 0px;
          }
        }
      }
      footer {
        a {
          margin: 5px 10px;
          padding: 10px 15px;
          border: 1px solid transparent;
          border-radius: 5px;
          text-decoration: none;
          color: #909090;
          font-family: Inter, sans-serif;
          font-size: 12px;
          transition: all 0.4s;
          :hover {
            opacity: 0.7;
            background: #ad0606;
            color: white;
          }
        }
      }
    }
    @media (max-width: 768px) {
      h2 {
        font-size: 19px;
      }
      a {
        font-size: 13px;
      }
      p {
        font-size: 12px;
      }
      a {
        font-size: 11px !important;
      }
    }
  }
`;
