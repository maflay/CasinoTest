import ImgTarjeta from '../../resources/Recurso-1@2x.png';
import './Index.css';

function Index() {
    return (
        <div className="container-tarjeta">
            <div className='box-container-tarjeta'>
                <div className='box-left-tarjeta'>
                    <div className='box-left-tarjeta-content'>
                        <h1>Obtén<br />
                            tu tarjeta<br />
                            Mymawi</h1>
                            <br />
                        <p>Con la Mymawi card siempre ganas,<br />
                           regístrate y obtén beneficios exclusivos para<br />
                            que tengas una experiencia completa en<br />
                             casino Marco Polo.</p>
                        <br />
                        <button className='btn-tarjeta'>Quiero mi tarjeta</button>
                    </div>
                </div>
                <div className='box-rigth-tarjeta'>
                    <img className='' src={ImgTarjeta} alt="img-tarjeta"></img>
                </div>
            </div>
        </div>
    )
}

export default Index;