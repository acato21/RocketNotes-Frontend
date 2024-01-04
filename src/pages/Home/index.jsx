import { Container, Branch, Content, Menu, Search, CreateNote, Overflow } from "./style";
import { Header } from "../../components/Header";
import { IoMdAdd } from "react-icons/io";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { TextButton } from "../../components/TextButton";

export function Home(){

    return(

        <Container>
            <Header />

            <Branch>
                Rocketnotes
            </Branch>

            <Menu>
                <TextButton title="Todos" isActive/>
                <TextButton title="Frontend" />
                <TextButton title="Node" />
                <TextButton title="React" />
            </Menu>

            <Search>
                    <Input placeholder="Pesquisar pelo título"/>
            </Search>

            <Content>
                <Section title="Minhas notas" >
                   
                   <Overflow>
                         <Note data={{
                        title: 'React Modal',
                         tags: [
                            {id: '1', name:'react'},
                            {id: '2', name:'node'}
                        ]}} />

                        <Note data={{
                            title: "Exemplo de Middleware",
                            tags: [
                                {id:'3', name: 'node'},
                                {id:'4', name: 'express'}
                            ]
                        }} />
                   </Overflow>

                </Section>
            </Content>

            <CreateNote to="/create" >
                <p><IoMdAdd/> Criar nota</p>
            </CreateNote>
        </Container>

    );

}