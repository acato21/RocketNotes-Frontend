import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 106px auto;
    grid-template-areas: 
    "header"
    "content"
    ; 

    > main{
        padding: 0 2rem 1rem;
        overflow-y: auto;
    }

`;

export const Content = styled.div`

    grid-area: content;
    display: flex;
    flex-direction: column;
    position: relative;

    max-width: 55rem;
    height: auto;
    margin: 6.5rem auto auto;

    > button:first-child{
        align-self: end;
    }

    h1{
        font-size: 3.6rem;
        font-weight: 500;
        margin-top: 6.4rem;
    }

    p{
        text-align: justify;
        margin: 1.6rem 0 2.6rem; 
    }

    > button:last-child{
        margin-top: 10rem;
    }

`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 1.2rem;

        a{
            color: ${({ theme }) => theme.COLORS.WHITE};

            &:hover{
                text-decoration: underline;
            }
        }
    }
`;