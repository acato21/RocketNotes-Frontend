import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`

    color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
    width: fit-content;
    background: none;
    border: none;

    &&:hover{
        text-decoration: underline;
    }

`;

