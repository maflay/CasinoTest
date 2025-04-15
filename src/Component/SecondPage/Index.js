// src/components/SecondPageBox.js
import "./Index.css";

export default function SecondPage() {
  return (
    <div className="container-box">
      <div className="box-content">
        <div className="box-left">
            <h1>prueba</h1>
        </div>
        <div className="box-right">
          <h2>Contáctanos</h2>
          <form className="contact-form">
            <input type="email" placeholder="Correo electrónico" required />
            <input type="tel" placeholder="Teléfono" required />
          </form>
        </div>
      </div>
    </div>
  );
}
