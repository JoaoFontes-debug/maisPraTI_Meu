import React from "react";

export default function Numero(props){
    return(
        <p>
            <p>Valor do state num em Numero: {props.num}</p>
            <button onClick= {() => props.setNum(props.num*2)}>num vezes 2</button>
        </p>

    )
}