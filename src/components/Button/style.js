import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 1.6rem;

    background: ${({ theme }) => theme.COLORS.ORANGE};

    border: none;
    border-radius: 1rem;
    font-weight: 500;

    &:disabled{
        opacity: .5;
    }
`;