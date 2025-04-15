// src/components/Footer.js
import "./Footer.css";
import logo from '../../resources/marcopolo.png';
import { FaFacebookF,FaYoutube, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">
        <div className="footer-logo">
          <a href="#">
            <img src={logo} alt="logo"></img>
          </a>
        </div>

        <div className="footer-section">
          <h3>Nosotros</h3>
          <ul>
            <li><a href="/nosotros">Quiénes somos</a></li>
            <li><a href="/equipo">Nuestro equipo</a></li>
            <li><a href="/historia">Nuestra historia</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Servicios</h3>
          <ul>
            <li><a href="/servicios">Consultoría</a></li>
            <li><a href="/soporte">Soporte técnico</a></li>
            <li><a href="/desarrollo">Desarrollo web</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul>
            <li><a href="mailto:info@tusitio.com">Info@MarcoPolo.com</a></li>
            <li><a href="tel:+573001112233">+57 300 111 2233</a></li>
            <li><a href="/contacto">Formulario</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-icons">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <BsTwitterX />
        </a>
        <a href="#">
        <FaYoutube />
        </a>
        <a href="#">
        <FaInstagram />
        </a>
      </div>
      <br/>
      <br/>
      <div className="footer-bottom">
        <p>COPYRIGHT &copy; {new Date().getFullYear()} Casino Marco polo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
