import styled from "styled-components";

export const Container = styled.div`

    width: 100%;

    display: flex;

    margin-bottom: 1.9rem;
    border: ${({ theme, isNew }) => isNew ? `.2rem dashed ${theme.COLORS.GRAY_200}` : "none"};
    background: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    border-radius: 1rem;

    .button-add{
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    .button-delete{
        color: ${({ theme }) => theme.COLORS.RED};
    }

    input:focus{
        border: none;
        outline: 0;
        box-shadow: 0 0 0 0;
    }

    input {
        width: 100%;
        height: 5.6rem;
        border: none;
        padding: 2rem;
  
        
        background: transparent;

        color: ${({ theme }) => theme.COLORS.WHITE};

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    button{
        border: none;
        border-radius: 1rem;
        padding: 1.6rem;

        background: transparent;

        display: flex;
        align-items: center;

    

        svg {
            font-size: 2rem;
        }
    }
`;