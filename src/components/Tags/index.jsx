/* eslint-disable react/prop-types */
import { Container } from "./style";

export function Tags({title, ...rest}){

    return(
        <Container {...rest}>
            {title}
        </Container>
    );

}