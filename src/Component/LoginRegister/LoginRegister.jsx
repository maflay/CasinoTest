import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './LoginRegister.css'

const LoginRegister = () => {
    return (
        <>
        <div className='login-page'>
            
            <div className="wrapper">
                <div className="form-box login">
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Usuario" required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Contraseña" required />
                            <FaLock className='icon'/>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />
                                Recuerdame
                            </label>
                            <a href="#">Olvide la contraseña</a>
                        </div>
                        <button type="submit">Iniciar Sesion</button>
                        <div className="register-link">
                            <p>No tienes cuenta? <a href="#">Registrarse</a></p>
                        </div>
                        <div className='register-link btn-ini'><p><a href='#'>Inicio</a></p></div>
                    </form>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default LoginRegister;