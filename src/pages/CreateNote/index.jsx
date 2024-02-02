import { Container, Form } from "./style";
import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { NewItem } from "../../components/NewItem";

import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function CreateNote(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    async function handleCreateNote(){
        const user = {
            title,
            description,
            tags,
            links
        }

        try{
            await api.post("/note/create", user);
            alert("Nota criada!")
            navigate("/")
        } catch (error){
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível fazer o cadastro");
            }
        }
    }

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("")
    }

    function handleDeleteLink(deleted){
        setLinks(prevState => prevState.filter((link) => link !== deleted))
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("")
    }

    function handleDeleteTag(deleted){
        setTags(prevState => prevState.filter((tag) => tag !== deleted))
    }

    return(
        
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar notas</h1>

                        <TextButton onClick={() => navigate(-1)} title="voltar" />
                    </header>

                    <Input 
                    placeholder='Título' 
                    onChange={e => setTitle(e.target.value)}
                    />

                    <textarea 
                    placeholder="Observações" 
                    onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Links úteis">

                        {
                            links.map((link, index) => (
                                    <NewItem
                                        key={String(index)}
                                        value={link}
                                        OnClick={() => handleDeleteLink(link)}
                                    />     
                            ))
                        }

                        <NewItem 
                            isNew 
                            OnClick={handleAddLink}
                            onChange={e => setNewLink(e.target.value)}
                            placeholder="Novo Link"
                            value={newLink}
                        />

                    </Section>

                    <Section title="Marcadores" >
                        <div className="tags">
                           
                        {
                            tags.map((tag, index) => (
                                    <NewItem
                                        key={String(index)}
                                        value={tag}
                                        OnClick={() => handleDeleteTag(tag)}
                                    />     
                            ))
                        }
                        
                        <NewItem 
                            isNew 
                            OnClick={handleAddTag}
                            onChange={e => setNewTag(e.target.value)}
                            placeholder="Marcadores"
                            value={newTag}
                        />
                        </div>
                    </Section>

                    <Button title="Salvar" onClick={handleCreateNote} />
                </Form>
            </main>
        </Container>

    );

}