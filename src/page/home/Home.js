import React, {useState} from 'react'

import './Home.css'

import Logotipo from '../../components/logotipo/Logotipo'

export default function Home(){
  const [vocabulary_content, setvocabulary_conent] = useState(
     <h1> Vocabulary Teme </h1>
  );


  const [grammar_content, setgrammar_content] = useState (
     <h1> grammar Teme </h1> 
  );


  return(
    <div className="App" >
      <div className="top">
        <Logotipo />
      </div>
      <div className="content">
        
      </div>
      <div className="temes">
        <div id="vocabulary_teme" className="teme">
          {vocabulary_content}
        </div>
        <div id="grammar_teme" className="teme">
          {grammar_content}
        </div>
      </div> {/* end temes */}  
     </div> 
  );
}