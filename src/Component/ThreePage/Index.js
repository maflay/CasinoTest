// src/components/ThirdPageCards.js
import "./Index.css";
import Maquina1 from "../../resources/Apuesta1.png"
import Maquina2 from "../../resources/Apuesta2.jpeg"

export default function ThirdPage() {
  return (
    <div className="third-page-container">
      <div className="card">
        <div className="card-image">
          <img src={Maquina1} alt="Imagen 1" />
        </div>
        <div className="card-divider" />
        <div className="card-content">
          <p>
            Esta es una descripción breve sobre el contenido de esta tarjeta.
            Puedes editar este texto más adelante según tus necesidades.
          </p>
          <button className="purple-button">Saber más</button>
        </div>
      </div>

      <div className="card">
        <div className="card-image">
          <img src={Maquina2} alt="Imagen 2" />
        </div>
        <div className="card-divider" />
        <div className="card-content">
          <p>
            Otra descripción informativa para esta sección. Puedes cambiar este
            texto en cualquier momento.
          </p>
          <button className="purple-button">Saber más</button>
        </div>
      </div>
    </div>
  );
}
