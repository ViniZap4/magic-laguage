import React from 'react'

import Top from '../../../../components/top/Top'
import ListNumbes from './ListNumbers'
import Interact from '../../../../components/Interact/Ineract'


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

import twenty from '../../../../songs/temes/vocabulary/numbers/Twenty.ogg'
import thirty from '../../../../songs/temes/vocabulary/numbers/Thirty.ogg'
import forty from '../../../../songs/temes/vocabulary/numbers/Forty.ogg'
import fifty from '../../../../songs/temes/vocabulary/numbers/Fifty.ogg'
import sixty from '../../../../songs/temes/vocabulary/numbers/Sixty.ogg'
import seventy from '../../../../songs/temes/vocabulary/numbers/Seventy.ogg'
import eighty from '../../../../songs/temes/vocabulary/numbers/Eighty.ogg'
import ninety from '../../../../songs/temes/vocabulary/numbers/Ninety.ogg'

import oneHundred from '../../../../songs/temes/vocabulary/numbers/oneHundred.ogg'
import oneThousuand from '../../../../songs/temes/vocabulary/numbers/oneThousuand.ogg'
import tenThousuand from '../../../../songs/temes/vocabulary/numbers/tenThousuand.ogg'
import oneHundredThousuand from '../../../../songs/temes/vocabulary/numbers/oneHundredThousuand.ogg'
import oneMillion from '../../../../songs/temes/vocabulary/numbers/oneMilion.ogg'

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
              tocar={ten}
              icon="10"
              info="Ten = Dez"
          />   
          <ListNumbes
            num="Twenty"
            tocar={twenty}
            icon="20"
            info="Twenty = vinte"
          />
          <ListNumbes
            num="Thirty"
            tocar={thirty}
            icon="30"
            info="Thirty = Trinta"
          />
          <ListNumbes
            num="Forty"
            tocar={forty}
            icon="40"
            info="Forty = Quarenta"
          />
          <ListNumbes
            num="Fifty"
            tocar={fifty}
            icon="50"
            info="Fifty = Cinquenta"
          />
          <ListNumbes
            num="Sixty"
            tocar={sixty}
            icon="60"
            info="Sixty = Sessenta"
          />
          <ListNumbes
            num="Seventy"
            tocar={seventy}
            icon="70"
            info="Seventy = Setenta"
          />
          <ListNumbes
            num="Eighty"
            tocar={eighty}
            icon="80"
            info="Eighty = Oitenta"
          />
          <ListNumbes
            num="Ninety"
            tocar={ninety}
            icon="90"
            info="Ninety = Noventa"
          />
          <ListNumbes
            num="One Hundred"
            tocar={oneHundred}
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
            tocar={oneHundred}
            icon="100"
            info="One Hundred = Cem"
          />
          <ListNumbes
            num="One Thousuand"
            tocar={oneThousuand}
            icon="1000"
            info="One Thousuand = Mil"
          />
          <ListNumbes
            num="Ten Thousuand"
            tocar={tenThousuand}
            icon="10000"
            info="Ten Thousuand = Dez mil"
          />
          <ListNumbes
            num="One Hundred Thousuand"
            tocar={oneHundredThousuand}
            icon="100000"
            info="One Hundred Thousuand = Cem mil"
          />
          <ListNumbes
            num="One Million"
            tocar={oneMillion}
            icon="1000000"
            info="One Million = Um milhão"
          />                      
          </ul>
      </div>
    </div>
    <div className="interact_vocabulary">
      <Interact 
        question1="Which number is the correct to describe 501 from the following options? "
        answer1="f"
        a1="five hundred and six"
        b1="five hundred and two"
        c1="one hundred"
        d1="ten"
        e1="Thursday"
        f1="five hundred and one"
        question2="Which number is the grammatical form for three thousand?"
        answer2="a"
        a2="3000"
        b2="20"
        c2="468"
        d2="7299"
        e2="1000"
        f2="300"
        question3="Sign the sequence according to the right way to read the numbers 3,13,30"
        answer3="d"  
        a3="thirty,three,two"
        b3=" three,two,one"
        c3=" thirteen,three,thirty"
        d3="three,thirteen,thirty"
        e3="thirteen,fourteen,thirty"
        f3="one,three,five"
      />
    </div>
  </div>
  );
}