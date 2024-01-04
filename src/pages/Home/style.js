import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10.6rem 12.8rem auto 8rem;
    grid-template-areas: 
    "branch header"
    "menu search"
    "menu content"
    "createNote content"
    ;

`;

export const Branch = styled.div`

    grid-area: branch;
    display: flex;

    font-size: 2.4rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.ORANGE};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

`;

export const Menu = styled.div`

    grid-area: menu;
    background: orange;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding: 6.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

`;

export const Search = styled.div`

    grid-area: search;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;

    padding: 6.4rem;
`;

export const Content = styled.div`

    grid-area: content;
    
    position: relative;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    padding: 6.4rem;

`;


export const CreateNote= styled(Link)`

    grid-area: createNote;
    background: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2rem;

    transition: all .3s;

    &:hover{
        transform: scale(.99);
        opacity: .5;
    }

    > p{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .8rem;
    }

`;

export const Overflow = styled.div`

    width: 100%;
    height: 50rem;

    overflow-y: auto;

`;