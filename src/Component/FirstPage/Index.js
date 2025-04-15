import ImagenInicio from '../../resources/fondo.jpg';
import '../FirstPage/style.css'
import Navbar from '../Menu/Navbar';

function Index() {
    return (
        <div>
            <div className="hero-section">
            <Navbar />
                <div className="overlay">
                </div>
            </div>
        </div>
    )
}

export default Index;