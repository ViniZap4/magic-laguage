import React from 'react'

import Top from '../../../../components/top/Top'
import ItemListAnimals from './ListAnimals'

import '../../css/temes.css'
import './Animals.css'

// import img para animais

import cat from '../../../../imagens/icons/vocabulary/animals/cat.png'
import dog from '../../../../imagens/icons/vocabulary/animals/dog2.png'
import lion from '../../../../imagens/icons/vocabulary/animals/lion2.png'
import fish from '../../../../imagens/icons/vocabulary/animals/fish.png'
import dolphin from '../../../../imagens/icons/vocabulary/animals/gorfinho.png'
import whale from '../../../../imagens/icons/vocabulary/animals/whale.png'
import lizard from '../../../../imagens/icons/vocabulary/animals/lizarblack.png'
import snake from '../../../../imagens/icons/vocabulary/animals/snake.png'
import alligator from '../../../../imagens/icons/vocabulary/animals/alligator.png'
import cockroach from '../../../../imagens/icons/vocabulary/animals/cockroach.png'
import ant from '../../../../imagens/icons/vocabulary/animals/ant.png'
import cricket from '../../../../imagens/icons/vocabulary/animals/cricket.png'

export default function Animals() {
  return (
    <div id="page_animals" className="page_temes_content">
      <Top />
      <div id="animals_content">

        
        <div id="mammal-animals" className="box_teme_animals">
          <h2 className="title_box_animals"   >
            Mammal Animals
          </h2>   
            <ul className="list_box_animals">
              <ItemListAnimals
                animal="Cat"
                icon={cat} 
                tocar=""
                info="Cat = Gato" 
              />
              
              <ItemListAnimals
                animal="Dog"
                icon={dog} 
                tocar="" 
                info="Dog = Cachorro" 
              />

              <ItemListAnimals
                animal="Lion"
                icon={lion} 
                tocar=""
                info="lion = Leão"  
              />          
            </ul>
        </div>


        <div id="marine-animals" className="box_teme_animals">
          <h2 className="title_box_animals">
             Marine Animals
          </h2>
  
          <ul className="list_box_animals">
            <ItemListAnimals
              animal="Fish"
              icon={fish} 
              tocar=""
              info="fish = peixe"
            />

            <ItemListAnimals
              animal="Dolphin"
              icon={dolphin} 
              tocar=""
              info="Dolphin = Golfinho"   
            />    

            <ItemListAnimals
              animal="Whale"
              icon={whale} 
              tocar=""
              info="Whale = Baleia"
            />
          </ul>
  
        </div>


       
        <div id="reptiles" className="box_teme_animals">
          <h2 className="title_box_animals">
             Reptiles
          </h2>
          <ul>
            <ItemListAnimals
              animal="Lizard"
              icon={lizard} 
              tocar=""
              info="Lizard = Lagarto"   
            />
            <ItemListAnimals
              animal="Snake"
              icon={snake} 
              tocar=""
              info="Snake = Cobra"  
            />
            <ItemListAnimals
              animal="Alligator"
              icon={alligator} 
              tocar=""
              info="Alligator = Jacaré"  
            />

          </ul>
        </div>

      
        <div id="insects" className="box_teme_animals">
          <h2 className="title_box_animals">
            Insects  
          </h2>
         
          <ul className="list_box_animals">

            <ItemListAnimals
              animal="Cockroach"
              icon={cockroach} 
              tocar=""
              info="Cockroach = Barata"  
            />
            <ItemListAnimals
              animal="Ant"
              icon={ant} 
              tocar=""
              info="Ant = formiga"  
            />
            <ItemListAnimals
              animal="Cricket"
              icon={cricket} 
              tocar=""
              info="Cricket = Grilo"  
            />

          </ul>

        </div>
      </div>
    </div>
  );
}