import logo from "../assets/logo.svg";
import Nav from "./Nav";


function Header() {
    return (
        <header>
            <img src={logo} alt="Logo"></img>
            <Nav></Nav>
        </header>
    )
}
export default Header;