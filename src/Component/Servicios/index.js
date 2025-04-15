import React from "react";
import './servicio.css'
import casaladdin from '../../resources/fondo.jpg'
import Division from '../../resources/Division-completa.png'
import Maquina1 from '../../resources/Maquina1V2.png'
import Maquina2 from '../../resources/Maquina2V2.png'
import Maquina3 from '../../resources/Maquina3V2.png'
import DivisionM from '../../resources/Division-media.png'
import Coctel1 from '../../resources/coctel1.jpg'
import Coctel2 from '../../resources/coctel2.jpg'
import Coctel3 from '../../resources/coctel3.jpg'

function index() {

    let nombreMaq1 = "Maquina1";
    let DescriMaqui1 = "Premio $15'000.000";
    let nombreMaq2 = "Maquina2";
    let DescriMaqui2 = "Premio $25'000.000";
    let nombreMaq3 = "Maquina3";
    let DescriMaqui3 = "Premio $45'000.000";

    return (
        <>
            <div>
                <br />
                <center>
                    <div className="content-machin">
                        <div class="card">
                            <div class="image-container">
                                <img className="imagenMaquina" src={Maquina1} alt="Máquina tragamonedas" />
                            </div>
                            <div class="content">
                                <h2>{nombreMaq1}</h2>
                                <p>{DescriMaqui1}</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="image-container">
                                <img src={Maquina2} alt="Máquina tragamonedas" />
                            </div>
                            <div class="content">
                                <h2>{nombreMaq2}</h2>
                                <p>{DescriMaqui2}</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="image-container">
                                <img src={Maquina3} alt="Máquina tragamonedas" />
                            </div>
                            <div class="content">
                                <h2>{nombreMaq3}</h2>
                                <p>{DescriMaqui3}</p>
                            </div>
                        </div>
                    </div>
                </center>
                <br />
                <div className="divisionM">
                    <img src={DivisionM} alt="division" />
                    <h1 className="tittle-drink italiana-regular">Para sentirte mas comodo y seguir retando tu suerte</h1>
                </div>
                <br />
                <center>
                    <div className="content-machin">
                        <div class="card">
                            <div class="image-container">
                                <img src={Coctel1} alt="Máquina tragamonedas" />
                            </div>
                            <div class="content">
                                <h2>{nombreMaq3}</h2>
                                <p>{DescriMaqui3}</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="image-container">
                                <img src={Coctel2} alt="Máquina tragamonedas" />
                            </div>
                            <div class="content">
                                <h2>{nombreMaq3}</h2>
                                <p>{DescriMaqui3}</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="image-container">
                                <img src={Coctel3} alt="Máquina tragamonedas" />
                            </div>
                            <div class="content">
                                <h2>{nombreMaq3}</h2>
                                <p>{DescriMaqui3}</p>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </>
    )
}

export default index;