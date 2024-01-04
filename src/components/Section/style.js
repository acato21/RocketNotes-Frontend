import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    margin-top: 2.6rem;

    > span{
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > #hr{
        border-top: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    > div {
        display: flex;
        flex-wrap: wrap;
        margin-right: 1rem;
    }

`;