import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
        <section className="NavBar">
            <div className="Logo">
                <Link to='/' className="links">El Negro</Link> 
            </div>
            <div className="Pages">
                <Link to='/category/1' className="links">Carnes</Link>
                <Link to='/category/2' className="links">Frutas</Link>
                <Link to='/category/3' className="links">Verduras</Link>
            </div>
            <div className="Menus">
            <Link to='/' className="links">Registrarse</Link>
            <Link to='/' className="links">Iniciar Sesion</Link>
            <Link to='/' className="links"><CartWidget /></Link>
            </div>
        </section>
        </>
    );
}

export default NavBar;