// src/components/Footer.js
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
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
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Marco polo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
