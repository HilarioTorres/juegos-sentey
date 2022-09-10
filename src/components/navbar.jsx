import juegosSenteyLOGO from '../pictures/juegosSenteyLOGO.png';
import CartWidget from "./cartWidget";

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-primary bg-gradient bg-opacity-75 ">
            <div className="collapse navbar-collapse a d-flex justify-content-between" id="navbarTogglerDemo01">
                <div>
                    <img className="tamaño-Imagen" src={juegosSenteyLOGO} alt="" />
                </div>
                <div className="centrar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="navbar-brand" href="#">Categoria 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="#">Categoria 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="#">Categoria 3</a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );

}

export default NavBar;