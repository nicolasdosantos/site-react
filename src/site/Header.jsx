import style from "./Header.module.css"


function Header(prop){
    return(
        <div className={"row " + style.fundo}>
            <div className="col-md-6  d-flex justify-content-start">
                <img src="/Hollow_Knight_logo.webp"/>
            </div>
            <div className={"col-md-6 d-flex justify-content-end " + style.nav}>
                <h3>Inicio</h3>
                <h3>Complementos</h3>
                <h3>Contato</h3>
            </div>
        </div>
    )
}


export default Header