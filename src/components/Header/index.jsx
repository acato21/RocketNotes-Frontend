import { IoMdPower } from "react-icons/io";
import { Container, User } from "./style";

import { useAuth } from "../../hook/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import avatarProfile from '../../assets/Profile.svg'

export function Header(){

    const { user, signOut } = useAuth();
    const name = user.name

    const navigate = useNavigate();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarProfile ;

    function handleSignOut(){
        signOut();
        navigate("/")
    }

    return(

        <Container>
            <User>
                <a href="/profile"><img src={avatarURL}/></a>

                <div>
                    <span>Bem vindo,</span>
                    <p>{name}</p>
                </div>
            </User>

            <button>
                <IoMdPower onClick={handleSignOut} />
            </button>
        </Container>

    )
}