
import '../../Styles/App.css';
import '../../Styles/index.css'
import '../../Styles/Fonts.css';

import LoginRegister from '../LoginRegister/LoginRegister';
// import Servicio from '../Servicios/index.js'
import FirsPage from '../FirstPage/Index.js';
import SecondPage from '../SecondPage/Index.js';
import Tarjeta from '../TarjetaMymawi/Index.js';
import Promociones from '../PromocionesPage/Index.js';
import Asociar from '../Asociar/Index.js';
import Slider from '../Slider/Index.js';
import Footer from '../Footer/Footer.js';

import footer from '../../resources/Recurso-10@2x.png';


function App() {
  return (
    <div className="App">
      {/* <LoginRegister /> */}
      <FirsPage />
      <SecondPage />
      <Tarjeta />
      <Slider />
      <Promociones />
      <Asociar />
      {/* <br />
      <br />
      <br /> */}
      {/* <Footer /> */}
      <img className='img-footer' src={footer} alt="img-tarjeta"></img>
    </div>
  );
}

export default App;
