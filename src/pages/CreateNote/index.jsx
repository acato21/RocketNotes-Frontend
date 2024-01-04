import { Container, Form } from "./style";
import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { NewItem } from "../../components/NewItem";

export function CreateNote(){

    return(
        
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar notas</h1>

                        <TextButton to="/" title="voltar" />
                    </header>

                    <Input placeholder='Título' />

                    <textarea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NewItem value="https://www.rocketseat.com.br/" />
                        <NewItem isNew />
                    </Section>

                    <Section title="Marcadores" >
                        <div className="tags">
                            <NewItem value="node" />
                            <NewItem placeholder='Novo marcador' isNew />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>

    );

}