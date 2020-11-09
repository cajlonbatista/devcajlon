import styled from 'styled-components';

export const PortifolioContainer = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    animation: spark 0.4s linear backwards;
    section{
        padding-top: 80px!important;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        align-content: center;
        grid-gap: 20px;
        padding: 10px 20px;
        a{
            padding: 10px 15px;
            background: #FE3E57;
            border-radius: 5px;
            text-decoration: none;
            color: white;
            font-family: Inter, sans-serif;
            font-size: 14px;
            transition: all 0.4s;
            :hover{
                opacity: 0.7;
            }
        }
    }
`;