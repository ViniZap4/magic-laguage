import React from 'react'

import Top from '../../../../components/top/Top'
import ListNumbes from './ListNumbers'


import '../../css/temes.css'
import './Numbers.css'



// import audio numbers
import one from '../../../../songs/temes/vocabulary/numbers/one.ogg'
import two from '../../../../songs/temes/vocabulary/numbers/two.ogg'
import three from '../../../../songs/temes/vocabulary/numbers/three.ogg'
import four from '../../../../songs/temes/vocabulary/numbers/four.ogg'
import five from '../../../../songs/temes/vocabulary/numbers/five.ogg'
import six from '../../../../songs/temes/vocabulary/numbers/six.ogg'
import seven from '../../../../songs/temes/vocabulary/numbers/seven.ogg'
import eight from '../../../../songs/temes/vocabulary/numbers/eight.ogg'
import nine from '../../../../songs/temes/vocabulary/numbers/nine.ogg'
import ten from '../../../../songs/temes/vocabulary/numbers/ten.ogg'


export default function Numbers(){
  return (
    <div id="page_Numbers" className="page_temes_content">
      <Top />
      <div id="numbers_content">        
      <div id="num1to10" className="box_teme_numbers">
        <h2 className="title_box_numbers">
           1 to 10 
        </h2>   
          <ul className="list_box_numbers">
            <ListNumbes
              num="One"
              tocar={one}
              icon="1"
              info="One = um"
            />
            <ListNumbes
              num="Two"
              tocar={two}
              icon="2"
              info="Two = dois"
            />
            <ListNumbes
              num="Three"
              tocar={three}
              icon="3"
              info="Three = três"
            />
            <ListNumbes
              num="Four"
              tocar={four}
              icon="4"
              info="Four = Quatro"
            />
            <ListNumbes
              num="Five"
              tocar={five}
              icon="5"
              info="Five = Cinco"
            />
            <ListNumbes
              num="Six"
              tocar={six}
              icon="6"
              info="Six = Seis"
            />
            <ListNumbes
              num="Seven"
              tocar={seven}
              icon="7"
              info="Seven = Sete"
            />
            <ListNumbes
              num="Eight"
              tocar={eight}
              icon="8"
              info="Eight = Oito"
            />
            <ListNumbes
              num="Nine"
              tocar={nine}
              icon="9"
              info="Nine = Nove"
            />
            <ListNumbes
              num="Ten"
              tocar={ten}
              icon="10"
              info="Ten = Dez"
            />            
          </ul>
      </div>
      <div id="num10to10" className="box_teme_numbers"> 
        <h2 className="title_box_numbers">
          10 in 10          
        </h2>  
        <ul className="list_box_numbers">
          <ListNumbes
              num="Ten"
              tocar=""
              icon="10"
              info="Ten = Dez"
          />   
          <ListNumbes
            num="Twenty"
            tocar=""
            icon="20"
            info="Twenty = vinte"
          />
          <ListNumbes
            num="Thirty"
            tocar=""
            icon="30"
            info="Thirty = Trinta"
          />
          <ListNumbes
            num="Forty"
            tocar=""
            icon="40"
            info="Forty = Quarenta"
          />
          <ListNumbes
            num="Fifty"
            tocar=""
            icon="50"
            info="Fifty = Cinquenta"
          />
          <ListNumbes
            num="Sixty"
            tocar=""
            icon="60"
            info="Sixty = Sessenta"
          />
          <ListNumbes
            num="Seventy"
            tocar=""
            icon="70"
            info="Seventy = Setenta"
          />
          <ListNumbes
            num="Eighty"
            tocar=""
            icon="80"
            info="Eighty = Oitenta"
          />
          <ListNumbes
            num="Ninety"
            tocar=""
            icon="90"
            info="Ninety = Noventa"
          />
          <ListNumbes
            num="One Hundred"
            tocar=""
            icon="100"
            info="One Hundred = Cem"
          />             
          </ul>
      </div>
      <div id="num100to10" className="box_teme_numbers">  
       <h2  className="title_box_numbers">
         Decimal
        </h2>  
        <ul className="list_box_numbers">
          <ListNumbes
            num="One Hundred"
            tocar=""
            icon="100"
            info="One Hundred = Cem"
          />
          <ListNumbes
            num="One Thousuand"
            tocar=""
            icon="1000"
            info="One Thousuand = Mil"
          />
          <ListNumbes
            num="Ten Thousuand"
            tocar=""
            icon="10000"
            info="Ten Thousuand = Dez mil"
          />
          <ListNumbes
            num="One Hundred Thousuand"
            tocar=""
            icon="100000"
            info="One Hundred Thousuand = Cem mil"
          />
          <ListNumbes
            num="One Million"
            tocar=""
            icon="1000000"
            info="One Million = Um milhão"
          />                      
          </ul>
      </div>
    </div>
    </div>
  );
}