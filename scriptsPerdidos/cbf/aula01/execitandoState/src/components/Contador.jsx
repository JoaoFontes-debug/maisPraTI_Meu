import { useState } from "react"
import style from './Contador.module.css'

function Contador (){
    const [count,setCount] = useState(0);

    return(
        <div className={style.contador}>
            <p>Voce clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Click aqui</button>
        </div>
    )
}

export default Contador;

