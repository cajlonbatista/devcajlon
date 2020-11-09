import styled from 'styled-components';

import treno from '../../global/assets/back.svg';


export const MainContainer = styled.main`
    >img{
        position: absolute;
        background-repeat: no-repeat;
        background-size: cover;
    }
    background-color: white;
    background-image: url(${treno});
    background-position: center;
    background-size: cover;
    height: 100vh;
    div:first-child{
        padding-top: 65px!important;
        width: 100%;
        padding: 10px 20px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h1{
            font-family: Poppins, sans-serif;
            color: white;
            font-weight: 400;
            font-size: 40px;
            animation: textin 0.6s linear backwards;
            padding-bottom: 10px;
        }
        span{            
            color: white;
            font-family: Nunito Sans, sans-serif;
            font-weight: 100;
            animation: textin 0.4s linear backwards;
            font-size: 24px;
            margin-bottom: 50px;
        }
        svg{
            position: absolute;
            bottom: 0;
            right: 0;
            width: 40%;
        }
    }    
    
`;