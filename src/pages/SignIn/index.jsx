import { Container, Form, Background } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiMail, FiLock } from "react-icons/fi";
import { useState } from "react";
import { useAuth } from "../../hook/auth";


export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn} = useAuth();

    function handlesingIn(){
        signIn({email, password})
    }

    return(

        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input type="email" 
                placeholder="E-mail" 
                icon={FiMail} 
                onChange={e=> setEmail(e.target.value)}
                />

                <Input type="password" 
                placeholder="Senha" 
                icon={FiLock} 
                onChange={e=> setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handlesingIn} />

                <a href="/register">Criar conta</a>

            </Form>

            <Background/>
        </Container>

    );

}