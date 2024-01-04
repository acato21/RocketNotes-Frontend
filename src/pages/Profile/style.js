import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    > header{
        width: 100%;
        height: 14.4rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;
        padding: 0 14.4rem;

        > a{
            background: none;
            display: flex;
            align-items: center;
            justify-content: center;

            border: none;

            svg {
                width: 2.4rem;
                height: 2.4rem;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
            }
        }

    }

`;

export const Image = styled.div`

    width: 18.6rem;
    height: 18.6rem;

    margin: -8.4rem auto 0;

`;

export const Form = styled.form`

    width: 34rem;
    margin: auto;

    > div:nth-child(4){
        margin-top: 2.4rem;
    } 

    button{

        transition: all .15s;
        margin-top: 2.4rem;

        &:hover{
            opacity: 0.5;
        }
    }

`;

export const Avatar = styled.div`

    width: 18.6rem;
    height: 18.6rem;
   
    margin: -9rem auto 6.4rem;
    position: relative;
    
    img{
        width: 18.6rem;
        height: 18.6rem;

        border-radius: 50%;

    }

    > label {

        width: 4.8rem;
        height: 4.8rem;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: .4rem;
        right: .4rem;

        border-radius: 50%;

        background-color: ${({ theme }) => theme.COLORS.ORANGE};

        cursor: pointer;

        > input{
            display: none;
        }

        svg{
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }



`;