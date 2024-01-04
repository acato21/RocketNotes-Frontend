import { IoMdPower } from "react-icons/io";
import { Container, User } from "./style";
import Profile from "../../img/Profile.png";

export function Header(){

    return(

        <Container>
            <User>
                <a href="/profile"><img src={Profile}/></a>

                <div>
                    <span>Bem vindo,</span>
                    <p>Igor Gabriel</p>
                </div>
            </User>

            <button>
                <IoMdPower />
            </button>
        </Container>

    )
}