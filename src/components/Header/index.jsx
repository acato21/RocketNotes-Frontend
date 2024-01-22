import { IoMdPower } from "react-icons/io";
import { Container, User } from "./style";
import Profile from "../../img/Profile.png";

import { useAuth } from "../../hook/auth";

export function Header(){

    const { user } = useAuth();
    const name = user.name

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
                <IoMdPower />
            </button>
        </Container>

    )
}