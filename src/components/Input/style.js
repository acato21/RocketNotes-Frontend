import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 5.6rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    
    border-radius: 1rem;
    margin-bottom: .8rem;

    input:focus{
        border: none;
        outline: 0;
        box-shadow: 0 0 0 0;
    }

    > input {

        width: 100%;
        height: 5.6rem;
        background: none;
        
        border: none;
        padding: 2rem 1.2rem;

        color: ${({ theme }) => theme.COLORS.GRAY_100}; 

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

    }

    > svg {
       color: ${({ theme }) => theme.COLORS.GRAY_100};
       margin-left: 1.2rem;
    }

`;