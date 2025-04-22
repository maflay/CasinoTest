// src/components/ThirdPageCards.js
import "./Index.css";
import Maquina1 from "../../resources/Recurso-4@2x.png"
import Maquina2 from "../../resources/Recurso-5@2x.png"

export default function ThirdPage() {
  return (
    <div className="promocion-container">
      <br />
      <br />
      <div className="promo">
        <h1>PROMOCIONES</h1>
      </div>
      <br />
      <div className="card-view">
        <div className="card">
          <div className="card-image">
            <img src={Maquina1} alt="Imagen 1" />
          </div>
          <div className="card-divider" />
          <div className="card-content">
            <h1>Ruleta de premios</h1>
            <p>
              En Casino Marco Polo encuéntras
              más que casino, encuentras
              diversión, entretenimiento, amigos
              y muchos espacios para que la
              emoción nunca se detenga.
            </p>
            <button className="purple-button">Ver más</button>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={Maquina2} alt="Imagen 2" />
          </div>
          <div className="card-divider" />
          <div className="card-content">
            <h1>
              Mr. Bonus
            </h1>
            <p>
              En Casino Marco Polo encuéntras
              más que casino, encuentras
              diversión, entretenimiento, amigos
              y muchos espacios para que la
              emoción nunca se detenga.
            </p>
            <button className="purple-button">Ver más</button>
          </div>
        </div>
      </div>
    </div>
  );
}
