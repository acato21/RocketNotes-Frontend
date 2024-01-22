import { Container, Form, Background } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiMail, FiLock, FiUser } from "react-icons/fi";

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

   function handleSignUp(){

        if(!name || !email || !password){
            return alert("Preencha todos os campos!")
        }
            api.post("/user/register", {name, email, password})
            .then(() => {
                alert("Usuário cadastardo com sucesso");
                navigate("/");
            })
            .catch ( error => {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível fazer o cadastro");
            }})
    }

    return(

        <Container>
            <Background />

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input type="text"
                placeholder="Nome"
                icon={FiUser}
                onChange={e => setName(e.target.value)}
                />

                <Input type="email"
                placeholder="E-mail"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />

                <Input type="password" 
                placeholder="Senha" 
                icon={FiLock} 
                onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignUp} />

                <a href="/">Voltar para o Login</a>

            </Form>
        </Container>

    );

}