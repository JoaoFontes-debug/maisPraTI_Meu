import logo from './images/logo.png';
import style from './Header.module.css';
import { WhyReact, CoreFeatures, RelatedResources, ReactVsJs } from './Painel';
import { useState } from "react";


function Header() {
    const [conteudo, setConteudo] = useState("whyReact");

    const ConteudoUl = {
        "whyReact": <WhyReact />,
        "coreFeatures": <CoreFeatures />,
        "relatedResources": <RelatedResources />,
        "reactVsJs": <ReactVsJs />
    }

    function atualizaLi(conteudo, id) {
        setConteudo(conteudo)
        //setando a class name atraves do id
        document.getElementById('Um').className = style.botoes
        document.getElementById('Dois').className = style.botoes
        document.getElementById('Tres').className = style.botoes
        document.getElementById('Quatro').className = style.botoes
        //className da li selecionada
        document.getElementById(id).className = style.selecionada;
    }


    return (
        <div className={style.header}>
            <div className={style.conteudoHeader}>
                <img src={logo} alt="logo" className={style.logo} />
                <h1>React.js</h1>
                <p>i.e., using the React library for rendering the UI</p>
            </div>

            <div className={style.media}>
                <ul className={style.botoes} id='botoes'>
                    <li onClick={() => atualizaLi('whyReact', 'Um')} id='Um'>Why React?</li>
                    <li onClick={() => atualizaLi('coreFeatures', 'Dois')} id='Dois'>Core Features</li>
                    <li onClick={() => atualizaLi('relatedResources', 'Tres')} id='Tres'>Related Resources</li>
                    <li onClick={() => atualizaLi('reactVsJs', 'Quatro')} id='Quatro'>React vs JS</li>
                </ul>
                <div className={style.painel}>
                    {ConteudoUl[conteudo]}
                </div>
            </div>

        </div>
    )
}

export default Header;