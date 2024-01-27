import { Container, Form, Avatar } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import avatarProfile from '../../assets/Profile.svg'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi";
import { useState } from "react";
import { useAuth } from "../../hook/auth";
import { api } from "../../services/api";

export function Profile(){
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarProfile ;
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatar, setAvatar] = useState(avatarURL);
    const avatarFixed = user.avatar;

    function handleUpdateProfile(){

        const user = {
            name,
            email,
            password,
            newPassword,
            avatar: avatarFixed 
        }

        updateProfile({user, avatarFile});
    }

    function handleAvatarUpdate(event){

        const file = event.target.files[0];
        setAvatarFile(file);

        const imgPreview = URL.createObjectURL(file);
        setAvatar(imgPreview);


    }

    return(

        <Container>
            <header>
                <a href="/"><FiArrowLeft/></a>
            </header>

        <Form>

            <Avatar>
                <img src={avatar} alt="Foto de usuário" />

                <label htmlFor="avatar">
                    <FiCamera />

                    <input 
                    type="file" 
                    id="avatar" 
                    onChange={handleAvatarUpdate}
                    />
                </label>
            </Avatar>

            <Input type="text" 
            placeholder="Nome" 
            icon={FiUser} 
            value={name}
            onChange={e => setName(e.target.value)}
            />

            <Input type="email" 
            placeholder="E-mail" 
            icon={FiMail} 
            value={email}
            onChange={e => setEmail(e.target.value)}
            />

            <Input type="password" 
            placeholder="Senha atual" 
            icon={FiLock} 
            onChange={e => setPassword(e.target.value)}
            />

            <Input type="password" 
            placeholder="Nova senha" 
            icon={FiLock} 
            onChange={e => setNewPassword(e.target.value)}
            />

            <Button title="Salvar" onClick={handleUpdateProfile} />
        </Form>
            
        </Container>

    );

}