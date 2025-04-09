import { useState } from "react";
import logo from '../../resources/ALADDIN-GOLD.png';
import "../../Styles/Navbar.css"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="">
                <div className="Navbar">
                    <img className="logo-menu" src={logo} alt="logo"></img>
                    <div className={`nav-items ${isOpen && "open"}`}>
                        <a href="/home">Home</a>
                        <a href="/servicios">Servicios</a>
                        <a href="/intereses">De tus intereses</a>
                        <a href="/nosotros">Nosotros</a>
                        <a href="/nosotros">Login</a>
                    </div>
                    <div className={`nav-toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;