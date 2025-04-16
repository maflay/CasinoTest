import React from "react";
import Asociar from '../../resources/Recurso-3@2x.png';
import Clubasociar from '../../resources/Recurso-8@2x.png';
import ClubasociarP from '../../resources/Recurso-2@2x.png';

import './Index.css';

function Index() {
    return (
        <div className="container-asociar">
            <div className='box-container-asociar'>
                <div className='box-left-asociar'>
                    <div className='box-left-asociar-content'>
                        <img className='img-club' src={Clubasociar} alt="img-asociar"></img>
                        <br />
                        <br />
                        <br />
                            <h2>Cuando haces parte del Club Navegantes
                                Marco Polo accedes a múltiples beneficios 
                                como descuentos en tiendas, hotelería y
                                gastronomía. Asóciate y comienza a disfrutar ahora.</h2>
                            <br />
                            <br />
                            <br />
                            <div className="club-content">
                            <button className='btn-asociar'>Quiero asociarme</button>
                        </div>
                    </div>
                </div>
                <div className='box-rigth-asociar'>
                    <img className='' src={ClubasociarP} alt="img-asociar"></img>
                </div>
            </div>
        </div>
    )
}

export default Index;