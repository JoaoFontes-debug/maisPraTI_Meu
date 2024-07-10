import logo from './images/logo.png';
import style from './Header.module.css';
import { WhyReact,CoreFeatures,RelatedResources,ReactVsJs } from './Painel';
import { useState } from "react";


function Header(){
    const [conteudo, setConteudo] = useState("whyReact");
    
    const ConteudoUl = {
        "whyReact": <WhyReact />,
        "coreFeatures": <CoreFeatures />,
        "relatedResources": <RelatedResources />,
        "reactVsJs": <ReactVsJs />
    }

    const atualizaUl = (ul) =>{
        setConteudo(ul);
                     
    };

    return(
        <div className={style.header}>
            <div className={style.conteudoHeader}>
                <img src={logo} alt="logo"  className={style.logo}/>
                <h1>React.js</h1>
                <p>i.e., using the React library for rendering the UI</p>
            </div>
                
            <div className={style.media}>
                <ul className={style.botoes}>
                    <li onClick={() => atualizaUl("whyReact")} className={conteudo === "whyReact" ? "style.selecionado" : ""}>Why React?</li>
                    <li onClick={() => atualizaUl("coreFeatures")} className={conteudo === "coreFeatures" ? "style.selecionado" : ""}>Core Features</li>
                    <li onClick={() => atualizaUl('relatedResources')}>Related Resources</li>
                    <li onClick={() => atualizaUl("reactVsJs")}>React vs JS</li>
                </ul>
                <div className={style.painel}>
                    {ConteudoUl[conteudo]}
                </div>
            </div>

        </div>
    )   
}

export default Header;