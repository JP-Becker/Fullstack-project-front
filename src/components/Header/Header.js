import logo from "../../assets/logo.svg"
import { StyleHeader } from "./styledHeader"
import close from "../../assets/close.svg"

function Header () {
        return (
            <StyleHeader>
                <div>
                    <img src={close} alt="botão-fechar"/>           
                </div>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div>
                    <h2><a>Entrar</a></h2>              
                </div>
            </StyleHeader>
        )    
    }
export default Header
