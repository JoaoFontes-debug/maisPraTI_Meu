import React from "react";
import style from './Component.module.css'


const ComponentQuatro = (props) => {
    return (
        <div className={style.componente}>
            <p>Titulo: {props.titulo}</p>
            <br />
            {props.children}
        </div>
    )
}

export default ComponentQuatro;