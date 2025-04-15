
import '../../Styles/App.css';
import '../../Styles/index.css'

// import Header from '../Menu/Header-one';
// import LoginRegister from '../LoginRegister/LoginRegister';
import SecondPage from '../SecondPage/Index.js'
import ThirdPage from '../ThreePage/Index.js'
import FirsPage from '../FirstPage/Index.js'
import Servicio from '../Servicios/index.js'
import Footer from '../Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <FirsPage />
      <SecondPage />
      <ThirdPage />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
