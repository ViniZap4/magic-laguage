import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// IMPORTANDO OS COMPONENTES QUE SERÃO RENDERIZADOS
import Home from './page/home/Home'

import Exercicios from './page/exercicios/Exercicios'

// IMPORTANDO TEMAS
import Temes from './page/temes/Temes'
//GRAMMAR

import Simplepast from './page/temes/grammar/Simplepast/Simplepast'
import Simplepresent from './page/temes/grammar/Simplepresent/Simplepresent'

// VOCABULARY
import Animals from './page/temes/vocabulary/Animals/Animals'
import Colors from './page/temes/vocabulary/Colors/Colors'   
import Numbers from './page/temes/vocabulary/Numbers/Numbers'
import Weekday from './page/temes/vocabulary/Weekday/Weekday'


//CRIANDO AS ROTAS
export default function src(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        {/* temes */}
        <Route path="/temes" exact component={Temes} />
        <Route path="/exercicios" exact component={Exercicios} />
        
        {/* grammar */}
        <Route path="/temes/grammar/simple-past" exact component={Simplepast} />
        <Route path="/temes/grammar/simple-present" exact component={Simplepresent} />
    
        {/* vocabulary */}
        <Route path="/temes/vocabulary/animals" exact component={Animals} />
        <Route path="/temes/vocabulary/colors" exact component={Colors} />
        <Route path="/temes/vocabulary/numbers" exact component={Numbers} />
        <Route path="/temes/vocabulary/weekday" exact component={Weekday} />

      </Switch>
    </BrowserRouter>
  );
}
