import React from 'react'

import '../../css/temes.css'
import './Colors.css'


import Top from '../../../../components/top/Top'
import ItemListColors from './ItemListColors'
import Interact from '../../../../components/Interact/Ineract'

// import audios
import blue from '../../../../songs/temes/vocabulary/colors/blue.ogg'
import red from '../../../../songs/temes/vocabulary/colors/red.ogg'
import green from '../../../../songs/temes/vocabulary/colors/green.ogg'
import grey from '../../../../songs/temes/vocabulary/colors/grey.ogg'
import orange from '../../../../songs/temes/vocabulary/colors/orange.ogg'
import purple from '../../../../songs/temes/vocabulary/colors/purple.ogg'
import black from '../../../../songs/temes/vocabulary/colors/black.ogg'
import white from '../../../../songs/temes/vocabulary/colors/white.ogg'
import yellow from '../../../../songs/temes/vocabulary/colors/yellow.ogg'
import salmon from '../../../../songs/temes/vocabulary/colors/salmon.ogg'
import nude from '../../../../songs/temes/vocabulary/colors/nude.ogg'



export default function Colors() {


  return (
    <div id="page_Colors" className="page_temes_content">
      <Top />
      <div id="colors_content">

{/*           Box Teme Colors Primary/  Tema Cores primarias                        */}
        
        <div id="primary_colors" className="box_teme_colors">
          <h2 className="title_box_colors"   >
            Primary Colors
          </h2>   
            <ul className="list_box_colors">
              <ItemListColors
                color="blue" 
                tocar={blue}
                info_color="blue = azul" 
              />
              
              <ItemListColors
                color="yellow" 
                tocar={yellow} 
                info_color="yellow = amarelo" 
              />

              <ItemListColors
                color="red" 
                tocar={red}
                info_color="red = vermelho"  
              />          
            </ul>
        </div>

{/*       Box Teme Colors Combinations /  Tema Combinações de cores                 */}

        <div id="primary_combinations" className="box_teme_colors">
          <h2 className="title_box_colors">
             Primary Combinations
          </h2>
  
          <ul className="list_box_colors">
            <ItemListColors
              color="green" 
              tocar={green}
              info_color={<>blue(azul) + yellow(amarelo)<br />= green(verde)</>}
            />

            <ItemListColors
              color="purple" 
              tocar={purple}
              info_color={<>blue(azul) + red(vermelho)<br />= purple(roxo)</>}   
            />    

            <ItemListColors
              color="orange" 
              tocar={orange}
              info_color={<>yellow(amarelo) + red(vermelho)<br />= orange(laranja)</>}   
            />
          </ul>
  
        </div>

{/*       Box Teme black or white /  Tema preto ou branco                */}

       
        <div id="black_white" className="box_teme_colors">
          <h2 className="title_box_colors">
             Black or White
          </h2>
          <ul>
            <ItemListColors
              color="black" 
              tocar={black}
              info_color="black = preto"   
            />
            <ItemListColors
              color="grey" 
              tocar={grey}
              info_color="grey = cinza"  
            />
            <ItemListColors
              color="white" 
              tocar={white}
              info_color="white = branco"  
            />

          </ul>
        </div>
{/*       Box Teme  others  /  Tema  outros              */}
      
        <div id="others" className="box_teme_colors">
          <h2 className="title_box_colors">
            Others
          </h2>
         
          <ul className="list_box_colors">

            <ItemListColors
              color="nude" 
              tocar={nude}
              info_color="nude = nude"  
            />
            <ItemListColors
              color="salmon" 
              tocar={salmon}
              info_color="salmon = salmão"  
            />

          </ul>

        </div>

      </div>
      <div className="interact_vocabulary">
        <Interact 
          question1={<>
            Como se escreve 1 em inglês
            </>}
          answer1="d"
          a1="Two"
          b1="On"
          c1="Five"
          d1="One"
          e1="Ten"
          f1="Blue"
          question2="como se escreve 10 em ingles"
          answer2="e"
          a2="Nine"
          b2="live"
          c2="Big"
          d2="Two"
          e2="Ten"
          f2="Tin"
          question3="O que é um Cricket"
          answer3="b"  
          a3="Cricket è um gato"
          b3="Cricket è um Grilo"
          c3="Cricket è a cor violeta"
          d3="Cricket è o numero 1000"
          e3="Cricket è um cino"
          f3="Cricket è a cor amarelo"
        />
      </div>
    </div>
  );
}