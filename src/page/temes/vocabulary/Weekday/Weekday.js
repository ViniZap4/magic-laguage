import React from 'react'

import Top from '../../../../components/top/Top'
import ItemListWeekDay from './ListWeekDay'


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
              tocar=""
              info="Sunfay = Domingo" 
            />
            <ItemListWeekDay
              day="Monday"
              icon={monday} 
              tocar=""
              info="Monday = Segunda-feira" 
            />
            <ItemListWeekDay
              day="Tuesday"
              icon={tuesday} 
              tocar=""
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
              tocar=""
              info="Wednesday =  Quarta-feira" 
            /> 
            <ItemListWeekDay
              day="Thursday"
              icon={thursday} 
              tocar=""
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
              tocar=""
              info="Friday = Sexta-feira" 
            />
          <ItemListWeekDay
              day="Saturday"
              icon={saturday} 
              tocar=""
              info="Saturday = Sabado" 
            />
                    
          </ul>
      </div>
    </div>
  </div>
  );
}