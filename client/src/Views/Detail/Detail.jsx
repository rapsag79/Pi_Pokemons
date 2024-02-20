import style from "./Detail.module.css"

const Detail = ({ pokemon }) => {

  
  const {
    nombre,
    imagen,
    tipo,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso } = pokemon

  const nameUpper = nombre.charAt(0).toUpperCase() + nombre.slice(1)
  
 
  return (
    <div className={style["detail-container"]}>
      <h2> {nameUpper} </h2>
      <p className={style["P-atack"]}>Ataque {ataque} / Defensa {defensa} </p>
    
      <img className={style.img} src={imagen} alt={nombre} /> 
      <section className={style["section-container"]}>
        <p className={style["P-gral"]}> {peso} kg <br /><b>Peso:</b></p>
        <p className={style["type"]}>{tipo.toUpperCase()} </p>
      <p className={style["P-gral"]}> {altura} cm<br/><b>Altura:</b></p>
      </section>

      <section className={style["section-container1"]}>
      <p className={style["P-gral"]}> <b>Vida:</b> {vida} / <b>Velocidad:</b> {velocidad} </p>
      </section>
      
    </div>
  )
}

export default Detail;