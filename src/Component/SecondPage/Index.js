// src/components/SecondPageBox.js
import supercash from '../../resources/Recurso-7@2x.png'
import "./Index.css";

export default function SecondPage() {
  return (
    <div className="container-box">
      <div className="box-content">
        <div className="box-left">
          <h1>Regístrate<br />
            y obtén un bono<br />
            Super cash<br />
            de $40.000 pesos<br />
            para que comiences<br />
            a disfrutar de casino<br />
            Marco Polo.</h1>
          <br />
          <p>
            En Casino Marco Polo encuéntras más que<br />
            casino, encuentras diversión, <br />
            entretenimiento, amigos y muchos espacios<br />
            para que la emoción nunca se detenga.
          </p>
        </div>
        <div className="box-right">
          <img src={supercash} alt="logo"></img>
          <br />
          <br />
          <form className="contact-form">
            <input type="email" placeholder="Correo electrónico" required />
            <input type="tel" placeholder="Teléfono" required />
            <div className="datos-form">
              <input type="checkbox" />
              <label>
                Acepto tratamientos de datos
              </label>
            </div>
            <div className='btn-form'>
              <button className="purple-button">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
