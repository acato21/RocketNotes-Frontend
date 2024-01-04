import styled from "styled-components";

export const Container = styled.div`

    width: fit-content;
    height: fit-content;
    display: flex;
    
    font-size: 1.4rem;

    border-radius: 5px;
    padding: .5rem 1.4rem;

    background: ${({ theme }) => theme.COLORS.ORANGE};
    color: black;
    margin-top: .6rem;
    
    cursor: default;

    & + & {
        margin-right: .6rem;
        margin-top: .6rem;  
    }

    &:first-child{
        margin-right: .6rem;
    }
`;