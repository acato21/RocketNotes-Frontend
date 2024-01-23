import { IoMdPower } from "react-icons/io";
import { Container, User } from "./style";
import Profile from "../../img/Profile.png";

import { useAuth } from "../../hook/auth";
import { useNavigate } from "react-router-dom";

export function Header(){

    const { user, signOut } = useAuth();
    const name = user.name

    const navigate = useNavigate();

    function handleSignOut(){
        signOut();
        navigate("/")
    }

    return(

        <Container>
            <User>
                <a href="/profile"><img src={Profile}/></a>

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