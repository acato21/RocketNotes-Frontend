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

        &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.COLORS.BACKGROUND_900} inset !important; /* Cobrir a borda com uma sombra branca */
            -webkit-text-fill-color: #999591 !important; /* Restaurar a cor do texto para o padrão */
            transition: background-color 5000s ease-in-out 0s !important; /* Desativar transição de cor de fundo */
            -webkit-border-radius: 1rem;
        }

/* Adicionalmente, para alguns navegadores como o Firefox */
&:-moz-autofill {
  -moz-box-shadow: 0 0 0px 1000px white inset !important;
  -moz-text-fill-color: initial !important;
}

    }

    > svg {
       color: ${({ theme }) => theme.COLORS.GRAY_100};
       margin-left: 1.2rem;
    }

`;