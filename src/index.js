import './index.css'
import  ReactDOM  from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmentos from './components/basicos/Fragmentos'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
        titulo='Situação do Aluno' 
        nome='Pedro'
        nota='5.6'/>
        <Fragmentos/>
        </div>, 
    document.getElementById('root')
    )