import styled from "styled-components";

export const Container = styled.button`

    display: flex;
    flex-direction: column;
    width: 100%;
    
    border: none;
    border-radius: 1rem;
    padding: 2.2rem 1.6rem;
    transition: all .2s;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    & + & {
        margin-top: 1.6rem;
    }

    &:hover{
        transform: scale(0.99);
        opacity: .7;
    }

    > span {
        font-size: 2.4rem;
        font-weight: 700;
        margin-bottom: 2.4rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > footer{
        display: flex;
        gap: .6rem;
    }

`;