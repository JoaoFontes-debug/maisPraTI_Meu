import React from "react";
import style from "./ComponentTres.module.css";

//nao teria problema se retirassemos os parenteses de "props"
/*export default (props) =>
  <div className={style.componente}>
    <p className={style.teste}>{props.titulo}</p>
    <p>Titulo: Componente Arrow Function</p>
  </div>
*/

//Forma correta
const ComponentTres = (props) => {

  return (
    <div className={style.componente}>
      <p className={style.teste}>{props.titulo}</p>
      <p>Titulo: {props.titulo}</p>
    </div>
  )
}

export default ComponentTres;