
import '../../Styles/App.css';
import '../../Styles/index.css'
import LoginRegister from '../LoginRegister/LoginRegister';
// import Servicio from '../Servicios/index.js'
import FirsPage from '../FirstPage/Index.js'
import SecondPage from '../SecondPage/Index.js'
import ThirdPage from '../ThreePage/Index.js'
import Slider from '../Slider/Index.js';
import Footer from '../Footer/Footer.js';


function App() {
  return (
    <div className="App">
      {/* <LoginRegister /> */}
      <FirsPage />
      <SecondPage />
      <Slider />
      <ThirdPage />
      {/* <br />
      <br />
      <br /> */}
      <Footer />
    </div>
  );
}

export default App;
