
import '../../Styles/App.css';
import '../../Styles/index.css'
import '../../Styles/Fonts.css';

import LoginRegister from '../LoginRegister/LoginRegister';
// import Servicio from '../Servicios/index.js'
import FirsPage from '../FirstPage/Index.js'
import SecondPage from '../SecondPage/Index.js'
import Tarjeta from '../TarjetaMymawi/Index.js';
import Promociones from '../PromocionesPage/Index.js'
import Slider from '../Slider/Index.js';
import Footer from '../Footer/Footer.js';


function App() {
  return (
    <div className="App">
      {/* <LoginRegister /> */}
      <FirsPage />
      <SecondPage />
      <Tarjeta />
      <Slider />
      <Promociones />
      {/* <br />
      <br />
      <br /> */}
      <Footer />
    </div>
  );
}

export default App;
