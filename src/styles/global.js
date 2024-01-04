import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 1.6rem;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    body, a, button, textarea, input{
        font-family: 'Roboto Slab', serif;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter .2s;
    }

    button, a{
        filter: brightness(0.9);
    }

`