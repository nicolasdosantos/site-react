 import style from "./Card.module.css"

function Card(prop){
    return(
        <div className={"col-md-3"}>
            <div className={style.card}>
                <img src={prop.img} />
                <h2>{prop.nome}</h2>
                <p>{prop.desc}</p>
            </div>
        </div>
    )
}

export default Card