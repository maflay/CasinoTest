
let vacio = "";



function Header() {

    const abrir_cerrar_menu = () => {
        let menu_despegable = document.getElementById("menu");
        let boton_cerrar = document.getElementById("x");
        menu_despegable.classList.toggle('abrir_menu')
        boton_cerrar.classList.toggle('colocar_x')
    }

    return (
        <header>
            <div className="barras">
                <button onClick={abrir_cerrar_menu} className="boton_menu" id="x"></button>
            </div>
            <nav id="menu" className="desplegable">
                <ul>
                    <li>
                        <a href={vacio}>Home</a>
                    </li>
                    <li>
                        <a href={vacio}>Servicios</a>
                    </li>
                    <li>
                        <a href={vacio}>De tus intereses</a>
                    </li>
                    <li>
                        <a href={vacio}>Nosotros</a>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header