
import '../../Styles/App.css';
import '../../Styles/index.css'
import Navbar from '../Menu/Navbar';
// import Header from '../Menu/Header-one';
// import LoginRegister from '../LoginRegister/LoginRegister';
import SecondPage from '../SecondPage/Index.js'
import FirsPage from '../FirstPage/Index.js'
import Servicio from '../Servicios/index.js'


function App() {
  return (
    <div className="App">
      <Navbar />
      <FirsPage />
      <SecondPage />
      <Servicio />
    </div>
  );
}

export default App;
