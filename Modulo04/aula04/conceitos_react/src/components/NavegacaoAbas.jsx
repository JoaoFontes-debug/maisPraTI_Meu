
import React from "react";
import { useState } from "react";


const conteudos = [
    [   "conteudo 0",
        "conteudo 1",
        "conteudo 2"
    ]
    [   "conteudo 0",
        "conteudo 1",
        "conteudo 2"
    ]
    [   "conteudo 0",
        "conteudo 1",
        "conteudo 2"
    ]
]


function NavegacaoAbas(){
    const [estadoAtual, setEstado] = useState(0);

    return(
        <>
            <div>
                <header>
                    <img src="" alt="" />
                    <h1>Aula +PraTi - react js</h1>
                    <p>Exercicio para treinar o useState</p>
                </header>
            </div>

            <div id="abas">
                <nav>
                    <button onClick={() => setEstado(0) }>Gremio</button>
                    <button onClick={() => setEstado(1) }>Gremio</button>
                    <button onClick={() => setEstado(2) }>Gremio</button>

                </nav>
            </div>

            <div id="conteudo">
                <ul>
                    {conteudos[estadoAtual].map((item) =>(
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )

}

export default NavegacaoAbas;