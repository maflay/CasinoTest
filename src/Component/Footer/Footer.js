// src/components/Footer.js
import "./Footer.css";
import logo from '../../resources/marcopolo.png';
import Vigilado from '../../resources/Recurso-10.png';
import Aladdin from '../../resources/Recurso-11.png';
import Coljuegos from '../../resources/Recurso-12.png';
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-subscriber">
        <label>Suscríbete y recibe nuestras noticias</label>
        <input type="text" id="email" />
      </div>
      <div className="footer-content">
        <div className="footer-logo">
          <a href="#">
            <img src={logo} alt="logo"></img>
          </a>
          <br />
          <label>Cali, Bogotá, Barranquilla</label>
          <label>contacto@marcopolo.com</label>
        </div>
        <div className="footer-section">
          <ul>
            <li><a href="/equipo">Equipo</a></li>
            <li><a href="/estudios">Estudios</a></li>
            <li><a href="/novedades">Novedades</a></li>
            <li><a href="/casinos">Casinos</a></li>
            <li><a href="/sostenibilidad">Sostenibilidad</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/marcopolo">Marco Polo</a></li>
            <li><a href="/aladdin">Aladdin</a></li>
            <li><a href="/aprendeajugar">Aprende a jugar</a></li>
            <li><a href="/expasion">Expasión</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li><a href="/dealerfluencer">Dealerfluencer</a></li>
            <li><a href="/globalambassadors">Global Ambassadors</a></li>
            <li><a href="/novedades">Novedades</a></li>
            <li><a href="/clubw">CLUBW</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-logos-legales">
        <div>
          <img src={Vigilado} />
        </div>
        <div>
          <img src={Aladdin} />
        </div>
        <div>
          <img src={Coljuegos} />
        </div>
      </div>

      {/* <div className="footer-icons">
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
      </div> */}
      <div className="footer-bottom">
        <p>TODOS LOS DERECHOS RESERVADOS {new Date().getFullYear()}.</p>
      </div>
    </footer>
  );
}
