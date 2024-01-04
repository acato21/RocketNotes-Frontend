import { Container, Form, Avatar } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi";

export function Profile(){

    return(

        <Container>
            <header>
                <a href="/"><FiArrowLeft/></a>
            </header>

        <Form>

            <Avatar>
                <img src="https://github.com/acato21.png" alt="Foto de usuário" />

                <label htmlFor="avatar">
                    <FiCamera />

                    <input type="file" id="avatar" />
                </label>
            </Avatar>

            <Input type="text" placeholder="Nome" icon={FiUser} />
            <Input type="email" placeholder="E-mail" icon={FiMail} />
            <Input type="password" placeholder="Senha atual" icon={FiLock} />
            <Input type="password" placeholder="Nova senha" icon={FiLock} />

            <Button title="Salvar" />
        </Form>
            
        </Container>

    );

}