/* eslint-disable react/prop-types */
import { Container } from "./style";

export function Section({ title, children }){

    return(

        <Container>
            <span>{title}</span>

            <div id="hr"></div>

            <div>
                {children}
            </div>
        </Container>

    );

}