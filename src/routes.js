import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// IMPORTANDO OS COMPONENTES QUE SERÃO RENDERIZADOS
import Home from './page/home/Home'


// IMPORTANDO TEMAS
import Temes from './page/temes/Temes'
//GRAMMAR

import Simplepast from './page/temes/grammar/Simplepast'
import Simplepresent from './page/temes/grammar/Simplepresent'

// VOCABULARY
import Animals from './page/temes/vocabulary/Animals'
import Colors from './page/temes/vocabulary/Colors'   
import Numbers from './page/temes/vocabulary/Numbers'
import Weekday from './page/temes/vocabulary/Weekday'


//CRIANDO AS ROTAS
export default function src(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        {/* temes */}
        <Route path="/temes" exact component={Temes} />
        
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
