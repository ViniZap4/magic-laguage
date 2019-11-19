import React from 'react'

import './Home.css'

import Top from '../../components/top/Top'


export default function Home(){
  return(
    <div className="App" >
      <Top />
    
      
      <div className="contents">
        <div className="item"> {/* quem somos */}
          <h1> Quem somos </h1>
          
          <p className="open_content">
            Somos uma plataforma de aprendizado da língua <br /> 
            inglesa desenvolvida para facilitar <br />
            o entendimento do idioma. 
          </p>
        </div>
        <div className="item" id="item2"> {/* como fazemos */}
          <h1> Como fazemos </h1>
          
          <p className="open_content">
            Através de lições simples e práticas que demandam <br />
            apenas 15 minutos de estudo por dia para  <br />
            aprimorar o aprendizado.
          </p>
        </div>
      </div>
            
      <div className="temes">
        <div id="vocabulary_teme"   className="teme_vocabulary">
          <h1> Vocabulary Teme </h1>

          <ul className="open_content">
            <li>Colors</li>
            <li>Numbers</li>
            <li>Animals</li>
            <li>Day of the week</li>
          </ul>
        </div>
        <div id="grammar_teme"  className="teme_grammar">
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