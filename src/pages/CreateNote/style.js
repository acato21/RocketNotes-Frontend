import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    > main {
        overflow-y: auto;
    }

    .tags{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        div{
            width: 45%;
        }
    }

`;

export const Form = styled.form`

    max-width: 55rem;
    margin: 3.8rem auto;

    > header{

        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 3.6rem;

        h1{
        font-size: 3.6rem;
        font-weight: 500;
        }

    }

    textarea:focus{
        border: none;
        outline: 0;
        box-shadow: 0 0 0 0;
    }

    textarea{
        width: 100%;
        height: 15rem;

        margin-bottom: 3.4rem;
        padding: 2rem;
        border-radius: 1rem;
        border: none;

        resize: none;

        color: ${({ theme }) => theme.COLORS.GRAY_100};
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    > div:last-child{
        margin-top: 4.7rem;
    }

    > button:last-child{
        margin-top: 3.4rem;
    }

`;