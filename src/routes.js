import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// IMPORTANDO OS COMPONENTES QUE SERÃO RENDERIZADOS
import Home from './page/home/Home'
// IMPORTANDO TEMAS
// VOCABULARY
import Colors from './page/home/temes/vocabulary/Colors'   

//EXPECIICANDO AS ROTAS
export default function src(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/temes/vocabulary/colors" exact component={Colors} />
      </Switch>
    </BrowserRouter>
  );
}
