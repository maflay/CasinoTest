
import '../../Styles/App.css';
import '../../Styles/index.css'
import Navbar from '../Menu/Navbar';
// import Header from '../Menu/Header-one';
// import LoginRegister from '../LoginRegister/LoginRegister';
import Servicio from '../Servicios/index'


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <LoginRegister /> */}
      {/* <div className='tittle-home'>
        <center>
          <h1 className='label-subtittle italiana-regular'>CASINO ALADDIN, <br />
            Reta tu suerte y gana apostando
          </h1>
        </center>
      </div> */}
      <Servicio />
    </div>
  );
}

export default App;
