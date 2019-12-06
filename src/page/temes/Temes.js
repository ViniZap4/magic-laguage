import React from 'react'
import { Link } from 'react-router-dom'

import './css/index.css'

import Top from '../../components/top/Top'

export default function Temes() {
  return(
    <div className="content_Temes">
      <Top />
      
      {/* <div className="temes_info_conent">
        <h1>O que é Lorem Ipsum?</h1>
        <p>Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. 
          Lorem Ipsum é o texto fictício padrão do setor desde os anos 1500, quando uma impressora 
          desconhecida pegou uma galera do tipo e a mexeu para fazer um livro de amostras do tipo. 
          Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica,
          permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento
          de folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software
          de editoração eletrônica como o Aldus PageMaker, incluindo versões do Lorem Ipsum.</p>
      </div> */}
      <div className="content_links">
        <div id="vocabulary_teme" className="list_teme" >
          <h2 > Vocabulary </h2>
          <ul>
            <li><Link className="item_teme" to="/temes/vocabulary/animals">
              <h1> <small> -> </small> Animals</h1>
            </Link></li>
            <li><Link className="item_teme" to="/temes/vocabulary/colors">
              <h1> <small> -> </small> Colors</h1>
            </Link></li>
            <li><Link className="item_teme" to="/temes/vocabulary/numbers">
              <h1> <small> -> </small> Numbers</h1>
            </Link></li>
            <li><Link className="item_teme" to="/temes/vocabulary/weekday">
              <h1> <small> -> </small> Day of the week</h1>
            </Link></li>
            
          </ul> 
        </div>
        <div id="grammar_teme" className="list_teme" >
          <h2 > Vocabulary </h2>
          <ul>
          <li><Link className="item_teme" to="/temes/grammar/simple-past">
              <h1> <small> -> </small> Simple past</h1>
            </Link></li>
            <li><Link className="item_teme" to="/temes/grammar/simple-present">
              <h1> <small> -> </small> Simple present </h1>
            </Link></li>    
          </ul>      
        </div>
      </div>
    </div>
  );  
}