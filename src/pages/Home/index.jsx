import { useEffect, useState } from "react";

import { Container, Branch, Content, Menu, Search, CreateNote, Overflow } from "./style";
import { Header } from "../../components/Header";
import { IoMdAdd } from "react-icons/io";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { TextButton } from "../../components/TextButton";

import { api } from "../../services/api";

export function Home(){
    
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [search, setSearch] = useState("");
    const [note, setNote] = useState([]);
    const [all, setAll] = useState([]);
    
    function handleTagSelected(tagName){

        if(tagName === "all"){
                setTagsSelected([])
            return

        }

        const checkTagSelected = tagsSelected.includes(tagName);

        if(checkTagSelected){
            const filteredTags = tagsSelected.filter(tags => tags !== tagName)
            setTagsSelected(filteredTags)
        } else {
            setTagsSelected(prevState => [...prevState, tagName]);
        }

    }

    useEffect(() => {

        async function searchNote(searchTags){
            console.log(tags)
            const response = await api.get(`note?title=${search}&tags=${searchTags}`)
            setNote(response.data);
    
        }       
        
        if(tagsSelected.length === 0){
            searchNote(all)
        } else {
            searchNote(tagsSelected);
        }
    

    },[tagsSelected, search, all])

    useEffect(() => {

        async function getTags(){
            const tag = await api.get("/note/tags");
            setTags(tag.data);
            setAll(tags.map(tag => tag.name))
        }

        getTags();

    }, [tags])

    return(

        <Container>
            <Header />

            <Branch>
                Rocketnotes
            </Branch>

            <Menu>
                <TextButton 
                title = "Todos"
                onClick={() => handleTagSelected("all")} 
                isActive={tagsSelected.length === 0}
                />
                
                {
                    tags && tags.map(tag => {
                        return(
                            <TextButton 
                                key={tag.id}
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                isActive={tagsSelected.includes(tag.name)}
                            />
                        )
                    })
                }
               
            </Menu>

            <Search>
                    <Input 
                    placeholder="Pesquisar pelo título"
                    onChange={e => setSearch(e.target.value)}
                    />
            </Search>

            <Content>
                <Section title="Minhas notas" >
                   
                   <Overflow>

                    {
                        note && note.map(note => {
                            return(
                                <Note 
                                    key={note.id}
                                    data={note}
                                />
                            )
                        })
                    }
                        
                   </Overflow>

                </Section>
            </Content>

            <CreateNote to="/create" >
                <p><IoMdAdd/> Criar nota</p>
            </CreateNote>
        </Container>

    );

}