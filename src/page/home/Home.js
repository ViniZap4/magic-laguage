import React from 'react'

import './Home.css'

import Logotipo from '../../components/logotipo/Logotipo'
import Menu from '../../components/menu/Menu'

export default function Home(){
  return(
    <div className="App" >
      <div className="top">
        <Logotipo />
      </div>
      <Menu />
      
      <div className="contents">
        <div className="item"> {/* quem somos */}
          <h1> Quem somos </h1>
          
          <p className="open_content">
            Somos uma plataforma de aprendizado da 
            língua inglesa desenvolvida para facilitar 
            o entendimento do idioma. 
          </p>
        </div>
        <div className="item"> {/* como fazemos */}
          <h1> Como fazemos </h1>
          
          <p className="open_content">
            Através de lições simples e práticas que demandam 
            apenas 15 minutos de estudo por dia para aprimorar 
            o aprendizado.
          </p>
        </div>
      </div>

      <div className="temes">
        <div id="vocabulary_teme"   className="teme">
          <h1> Vocabulary Teme </h1>

          <ul className="open_content">
            <li>Colors</li>
            <li>Numbers</li>
            <li>Animals</li>
            <li>Day of the week</li>
          </ul>
        </div>
        <div id="grammar_teme"  className="teme">
          <h1> Grammar Teme </h1>

          <ul className="open_content">    
            <li>simple past</li>
            <li>simple present</li>
          </ul>
        </div>
      </div> {/* end */} 
    </div> 
  );
}