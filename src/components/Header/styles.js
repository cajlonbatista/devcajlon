import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 15px 20px;
  display: flex;
  background: #000000;
  align-items: center;
  justify-content: space-between;
  animation: spark 0.5s linear backwards;
  @media(max-width: 426px){
    padding: 5px 10px;
  }
  div:first-child {
   
  }
  article{
    display: none;
    @media(max-width: 669px){
      display: block;
    } 
  }
  div:last-child {
    a {
      font-family: Nunito Sans, sans-serif;
      font-weight: 500;
      color: white;
      border: 1px solid transparent;
      font-size: 14px;
      margin-right: 15px;
      text-decoration: none;
      padding: 5px 16px;
      transition: all 0.4s;
      border-radius: 4px;
      :hover {
        opacity: 0.7;
        outline: none;
      }
    }
    @media (max-width: 669px) {
      display: none;
    }
  }
`;

export const Logo = styled.div`
   img {
      width: 35px;
      margin-right: 15px;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: all 0.4s;
      :hover {
        opacity: 0.7;
      }
    }
    h1 {
      font-family: Nunito Sans, sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: white;
    }
`;