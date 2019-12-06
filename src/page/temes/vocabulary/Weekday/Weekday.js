import React from 'react'

import Top from '../../../../components/top/Top'
import ItemListWeekDay from './ListWeekDay'
import Interact from '../../../../components/Interact/Ineract'

import '../../css/temes.css'
import './Weekday.css'



// import img dos dias 
import sunday from '../../../../imagens/icons/vocabulary/weekday/sunday.png'
import monday from '../../../../imagens/icons/vocabulary/weekday/monday.png'
import wednesday from '../../../../imagens/icons/vocabulary/weekday/wednesday.png'
import thursday from '../../../../imagens/icons/vocabulary/weekday/thursday.png'
import friday from '../../../../imagens/icons/vocabulary/weekday/friday.png'
import tuesday from '../../../../imagens/icons/vocabulary/weekday/tuesday.png'
import saturday from '../../../../imagens/icons/vocabulary/weekday/saturday.png'

//import song for weed day

import sundaySong from "../../../../songs/temes/vocabulary/weekday/sunday.ogg"
import mondaySong from "../../../../songs/temes/vocabulary/weekday/monday.ogg"
import wednesdaySong from "../../../../songs/temes/vocabulary/weekday/wednesday.ogg"
import thursdaySong from "../../../../songs/temes/vocabulary/weekday/Thursday.ogg"
import fridaySong from "../../../../songs/temes/vocabulary/weekday/friday.ogg"
import tuesdaySong from "../../../../songs/temes/vocabulary/weekday/tuesday.ogg"
import saturdaySong from "../../../../songs/temes/vocabulary/weekday/saturday.ogg"

export default function Weekday() {
  return (
    <div id="page_weekday" className="page_temes_content">
    <Top />
    <div id="weekday_content">        
      <div id="week-day" className="box_teme_weekday">
        <h2 className="title_box_animals"   >
          Days of the Week
        </h2>   
          <ul className="list_box_animals">
            <ItemListWeekDay
              day="Sunday"
              icon={sunday} 
              tocar={sundaySong}
              info="Sunfay = Domingo" 
            />
            <ItemListWeekDay
              day="Monday"
              icon={monday} 
              tocar={mondaySong}
              info="Monday = Segunda-feira" 
            />
            <ItemListWeekDay
              day="Tuesday"
              icon={tuesday} 
              tocar={thursdaySong}
              info="Tuesday = Terça-feira" 
            />

          </ul>
      </div>
      <div id="week-day" className="box_teme_weekday"> 
        <h2 className="title_box_animals"   >
        </h2>  
        <ul className="list_box_animals">
            <ItemListWeekDay
              day="Wednesday"
              icon={wednesday} 
              tocar={wednesdaySong}
              info="Wednesday =  Quarta-feira" 
            /> 
            <ItemListWeekDay
              day="Thursday"
              icon={thursday} 
              tocar={thursdaySong}
              info="Thursday = Quinta-feira" 
            />
            


          </ul>
      </div>
      <div id="week-day" className="box_teme_weekday">  
       <h2 className="title_box_animals"   >
         
        </h2>  
        <ul className="list_box_animals">
           <ItemListWeekDay
              day="Friday"
              icon={friday} 
              tocar={fridaySong}
              info="Friday = Sexta-feira" 
            />
          <ItemListWeekDay
              day="Saturday"
              icon={saturday} 
              tocar={saturdaySong}
              info="Saturday = Sabado" 
            />
                    
          </ul>
      </div>
    </div>
    <div className="interact_vocabulary">
      <Interact 
        question1="sign the option that means sexta-feira?"
        answer1="a"
        a1="Friday"
        b1="Tuesday"
        c1="Saturday"
        d1="Sunday"
        e1="Thursday"
        f1="Monday"
        question2="which one is the correct word for Domingo in English?"
        answer2="c"
        a2="Thursday"
        b2="Monday"
        c2="Sunday"
        d2="tuesday"
        e2="Friday"
        f2="wdnesday"
        question3="which one is the last day of the week?"
        answer3="d"  
        a3="Wednesday"
        b3="Tuesday"
        c3="Friday"
        d3="Saturday"
        e3="Monday"
        f3="Sunday"
      />
    </div>
  </div>
  );
}