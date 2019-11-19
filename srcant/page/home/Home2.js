import React, {useState} from 'react'

import './Home.css'

import Logotipo from '../../components/logotipo/Logotipo'

export default function Home(){

  // contents 
  const [open_content1, setopen_content1] = useState(0)
  const [content1, setcontent1] = useState(
    <h1> Quem somos </h1>
  );

  const [open_content2, setopen_content2] = useState(0)
  const [content2, setcontent2] = useState (
    <h1> Como fazemos </h1> 
  );


  // temes
  const [vocabulary_content, setvocabulary_conent] = useState(
     <h1> Vocabulary Teme </h1>
  );
  const [grammar_content, setgrammar_content] = useState (
    <h1> Grammar teme </h1>
  );

  
  function open_item(item) {
    if(item === 1){
      
      if (open_content1 === 0){
        // open content 1 "quem somos" 
        setcontent1(<>
          <h1> Quem somos </h1>
          <p className="open_content"> SOMOS UMA PLATAFORMA DE APRENDIZADO DA 
              LÍNGUA INGLESA DESENVOLVIDA PARA FACILITAR 
              O ENTENDIMENTO DO IDIOMA. </p>
        </>)
        setopen_content1(1)
      }else{
        //close content 1 
        setcontent1(<><h1> Quem somos </h1></>)
        setopen_content1(0)
      }
      
      // close content 2 "como fazemos"
      // setcontent2(<><h1> Como fazemos </h1></>)
      // close temes 
      // setgrammar_content(<><h1> Grammar Teme </h1></>)
      // setvocabulary_conent(<><h1> Vocabulary Teme </h1></>)
    }

    if(item === 2){

      if (open_content2 === 0){
      // open content 2 "como fazemos"
        setcontent2(<>
          <h1> Como fazemos </h1>
          <p className="open_content">ATRAVÉS DE LIÇÕES SIMPLES E PRÁTICAS QUE DEMANDAM 
            APENAS 15 MINUTOS DE ESTUDO POR DIA PARA APRIMORAR 
            O APRENDIZADO.</p>
        </>)
        setopen_content2(1)
      }else{
        setcontent2(<><h1> Como fazemos </h1></>)
        setopen_content2(0)
      }

      // close content 1 "quem somos"
      // setcontent1(<><h1> Quem somos </h1></>)

      // close temes 
      // setgrammar_content(<><h1> Grammar Teme </h1></>)
      // setvocabulary_conent(<><h1> Vocabulary Teme </h1></>)


    }
  }

  function open_temes(teme) {
    if (teme === 1){

      // open vocabulary
      setvocabulary_conent(<>
        <h1> Vocabulary Teme </h1>

        <ul className="open_content">
          <li>Colors</li>
          <li>Numbers</li>
          <li>Animals</li>
          <li>Day of the week</li>
        </ul>

      </>)

      //close contents 
      // setcontent1(<><h1> Quem somos </h1></>)
      // setcontent2(<><h1> Como fazemos </h1></>)

      // close teme grammar 
      setgrammar_content(<><h1> Grammar Teme </h1></>)
    }
    if (teme === 2){

      // open teme gramar
      setgrammar_content(<>
        <h1> Grammar Teme </h1>

          <ul className="open_content">
            <li>simple past</li>
            <li>simple present</li>
          </ul>
        
      </>)

      //close contents 
      // setcontent1(<><h1> Quem somos </h1></>)
      // setcontent2(<><h1> Como fazemos </h1></>)


      // close teme vocabulary
      setvocabulary_conent(<><h1> Vocabulary Teme </h1></>)      
    }
  }

  return(
    <div className="App" >
      <div className="top">
        <Logotipo />
      </div>
      
      <div className="contents">
        <div className="item" onClick={() => open_item(1)} /*onMouseOver={() => open_item(1)}*/> {/* quem somos */}
          {content1}
        </div>
        <div className="item" onClick={() => open_item(2)} /*onMouseOver={() => open_item(2)}*/> {/* como fazemos */}
          {content2}
        </div>
      </div>

      <div className="temes">
        <div id="vocabulary_teme" onClick={() => open_temes(1)}  className="teme">
          {vocabulary_content}
        </div>
        <div id="grammar_teme" onClick={() => open_temes(2)} className="teme">
          {grammar_content}
        </div>
      </div> {/* end temes */}  
    </div> 
  );
}