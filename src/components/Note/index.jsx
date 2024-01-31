/* eslint-disable react/prop-types */
import { Container } from "./style";
import { Tags } from "../Tags";

export function Note({ data, onClick }){

    return(
        <Container onClick={onClick}>
            <span>{data.title}</span>
            
            {
            data.tags && 
            
            <footer>
                { data.tags.map(tag => <Tags key={tag.id} title={tag.name}/>) }
            </footer>

            }
            
        </Container>
    )

}