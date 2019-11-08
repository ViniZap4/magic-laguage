import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// IMPORTANDO OS COMPONENTER QUE SERÃO RENDERIZADOS
import Home from './page/home/Home'


//EXPECIICANDO AS ROTAS
export default function src(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
