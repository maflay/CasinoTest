import { useEffect, useState } from "react";
import logo from '../../resources/marcopolo.png';
import "./Navbar.css"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="">
                <div className={`Navbar ${(scrolled || isOpen) ? "navbar-scrolled" : ""}`}>
                    <a href="#">
                        <img className="logo-menu" src={logo} alt="logo"></img>
                    </a>

                    <div className={`nav-items ${isOpen && "open"}`}>
                        <a href="/home">Inicio</a>
                        <a href="/servicios">Casinos</a>
                        <a href="/intereses">Promociones</a>
                        <a href="/nosotros">Club navegantes</a>
                        <a href="/login">Contacto</a>
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