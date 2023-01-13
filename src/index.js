import './index.css'
import  ReactDOM  from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
        titulo='Situação do Aluno' 
        nome='Pedro'
        nota='5.6'/>
        </div>, 
    document.getElementById('root')
    )