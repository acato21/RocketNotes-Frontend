import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Content, Links } from "./style";
import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

export function ShowNote(){

    const params = useParams();
    const navigate = useNavigate();

    const [note, setNote] = useState({});
    const [links, setLinks] = useState([]);
    const [tags, setTags] = useState([]);

    async function deleteNote(){
        await api.delete(`/note/delete/${params.id}`)
        navigate("/")
    }

    useEffect(() => {

        async function fetchNote() {
            const response = await api.get(`/note/show/${params.id}`);
            setNote(response.data.note);
            setLinks(response.data.links);
            setTags(response.data.tags)

        };

        fetchNote();

    },[])

    return(

        <Container>
            <Header/>
            
            <main>
                <Content>
                    <TextButton title="Excluir a nota" onClick={deleteNote}/>

                    <h1>{note.title}</h1>

                    <p>{note.description}</p>

                    <Section title="Links úteis">
                        <Links>
                            <li><a href="#">https://www.rocketseat.com.br/</a></li>
                            {
                                links && links.map(link => {
                                    return(
                                        <li><a href={link.url} target="_blank">{link.url}</a></li>
                                    )
                                })
                            }
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                    {
                                tags && tags.map(tag => {
                                    return(
                                        <Tags title={tag.name} />
                                    )
                                })
                            }
                    </Section>

                    <Button title="Voltar" />
                </Content>
            </main>
        </Container>

    )

}