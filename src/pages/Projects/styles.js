import styled from 'styled-components';

export const ProjectsContainer = styled.main`
  padding-top: 80px!important;
  overflow: auto;
  width: 100vw;
  height: 100vh;
  background: #383C4A;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  grid-gap: 20px;
  padding: 10px;
  section{
    background: #4b5d67;
    padding: 10px;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h1{
      color: #bbe1fa;
      font-size: 18px;
      font-family: Nunito, sans-serif;
      text-align: center;
    }
    p{
      font-size: 14px;
      padding: 20px 5px;
      font-family: Nunito, sans-serif;
      text-align: center;
      color: #F7F7F7;
    }
    footer{
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 10px;
      a{
        padding: 5px 10px;
        border-radius: 5px;
        border: 2px solid transparent;
        font-size: 14px;
        text-decoration: none;
        font-family: Nunito, sans-serif;
        transition: all 0.3s;
        color: #bbe1fa;
        :hover, :focus{
          border-color: #bbe1fa;
        }
      }
    }
  }
  section:last-child{
    margin-bottom: 20px;
  }
`;