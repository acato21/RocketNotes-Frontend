import styled from "styled-components";

export const Container = styled.header`
    
    width: 100%;
    height: 106px;

    grid-area: header;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;
    align-items: center;
    justify-content: space-between ;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 0 4.5rem 0 4rem;

    > button {

        background: transparent;
        border: none;

        > svg {
            width: 4.9rem;
            height: 3.6rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

`;

export const User = styled.div`

    display: flex;
    align-items: center;
    gap: .9rem;

    img {
        width: 7rem;
        height: 7rem;
        
        border-radius: 50%;
    }

    > div {

        display: flex;
        flex-direction: column;

        span{
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        p{
            font-size: 1.8rem;
            font-weight: 700;
        }

    }

`;