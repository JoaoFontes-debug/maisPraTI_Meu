import React from "react";
import { useState } from "react";
import Relogio from "./components/Relogio";
import Numero from './components/Numero'
import './App.css'

export default function App(){

  const textoDestaque ={
    color:'#00f',
    fontSize: '3em'
  }

  const [num, setNum] = useState(10);
  
  return(
    <>
      <div className="usandoState">
        <p>Valor do state num em App: {num}</p>
        <Numero num = {num} setNum = {setNum}/>
        

      </div>

      <section className="caixa">

        <Relogio/>

        <h1 style={{color: '#f00', fontSize: '5em'}}>CFB Cursos</h1>
        <h2 style={textoDestaque}>curso de react</h2>
        <p className="texto">vegeta super</p>
        <a href="#"> CBF Courses</a>

      </section>
     
    
    </>
  )
}