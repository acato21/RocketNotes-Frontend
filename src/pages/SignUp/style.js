import styled from "styled-components";
import background from '../../img/Login.jpeg'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

`;

export const Form = styled.form`

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    padding: 0 13.6rem;

    > h1{
        font-size: 4.8rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > p{
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        margin: 4.8rem 0;
    }
    
    > a {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        text-decoration: none;
        margin-top: 8rem;
    }

    > button{
        margin-top: 1.6rem;
    }
`;

export const Background = styled.div`

    flex: 1;

    background: url(${background}) no-repeat center center; 
    background-size: cover;
    filter: brightness(.5);
`;
