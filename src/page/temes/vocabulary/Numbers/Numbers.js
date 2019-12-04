import React from 'react'

import Top from '../../../../components/top/Top'
import ListNumbes from './ListNumbers'


import '../../css/temes.css'
import './Numbers.css'

export default function Numbers(){
  return (
    <div id="page_Numbers" className="page_temes_content">
      <Top />
      <div id="numbers_content">        
      <div id="w" className="box_teme_numbers">
        <h2 className="title_box_numbers">
          
        </h2>   
          <ul className="list_box_numbers">
            <ListNumbes
              num="One"
              tocar=""
              icon="1"
              info="One = um = 1"
            />            
          </ul>
      </div>
      <div id="w" className="box_teme_numbers"> 
        <h2 className="title_box_numbers">
        </h2>  
        <ul className="list_box_numbers">
          <ListNumbes
            num="One"
            tocar=""
            icon="2"
            info="One = um = 1"
          />            
          </ul>
      </div>
      <div id="w" className="box_teme_numbers">  
       <h2 className="title_box_numbers">
         
        </h2>  
        <ul className="list_box_numbers">
          <ListNumbes
            num="One"
            tocar=""
            icon="3"
            info="One = um = 1"          
          />                    
          </ul>
      </div>
    </div>
    </div>
  );
}