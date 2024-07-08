import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import './App.css'

function App() {
  return(
    <div className='container'>
    <h1 className='title'>Buscar CEP</h1>

    <div className='containerInput'>
      <input type="text" placeholder='digite o cep' />

      <button className='buttonSearch' >
        <FiSearch size={25} color='#FFF'/>
      </button>
    </div>

    <main className='main'>
      <h2>cep</h2>

      <span>rua</span>
      <span>complemento</span>
      <span>bairro</span> 
      <span>cidade</span>
    </main>

  </div>

  )

}

export default App
