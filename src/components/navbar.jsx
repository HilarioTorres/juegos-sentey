import juegosSenteyLOGO from '../pictures/juegosSenteyLOGO.png';
import CartWidget from "./cartWidget";
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-primary bg-gradient bg-opacity-75 ">
            <div className="collapse navbar-collapse a d-flex justify-content-between" id="navbarTogglerDemo01">
                <div>
                <Link to="/"><img className="tamaño-Imagen" src={juegosSenteyLOGO} alt="Imagen Carrito" /></Link>
                </div>
                <div className="centrar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/category/1" className="navbar-brand">Aventura</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/2" className="navbar-brand">Rol</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/3" className="navbar-brand">Indie</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );

}

export default NavBar;