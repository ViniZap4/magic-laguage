import React from 'react'

import '../../css/temes.css'
import './Colors.css'


import Top from '../../../../components/top/Top'
import ItemListColors from './ItemListColors'


// import audios
import audio from '../../../../songs/temes/vocabulary/colors/color.ogg'
import red from '../../../../songs/temes/vocabulary/colors/red.ogg'





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
                tocar={audio}
                info_color="blue = azul" 
              />
              
              <ItemListColors
                color="yellow" 
                tocar={audio} 
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
              tocar={audio}
              info_color={<>blue(azul) + yellow(amarelo)<br />= green(verde)</>}
            />

            <ItemListColors
              color="purple" 
              tocar={audio}
              info_color={<>blue(azul) + red(vermelho)<br />= purple(roxo)</>}   
            />    

            <ItemListColors
              color="orange" 
              tocar={audio}
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
              tocar={audio}
              info_color="black = preto"   
            />
            <ItemListColors
              color="grey" 
              tocar={audio}
              info_color="grey = cinza"  
            />
            <ItemListColors
              color="white" 
              tocar={audio}
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
              tocar={audio}
              info_color="nude = nude"  
            />
            <ItemListColors
              color="salmon" 
              tocar={audio}
              info_color="salmon = salmão"  
            />

          </ul>

        </div>
      </div>
    </div>
  );
}