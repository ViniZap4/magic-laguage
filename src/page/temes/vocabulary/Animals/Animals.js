import React from 'react'

import Top from '../../../../components/top/Top'
import ItemListAnimals from './ListAnimals'
import Interact from '../../../../components/Interact/Ineract'


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


// import songs for animals

import alligatorSong from '../../../../songs/temes/vocabulary/animals/alligator.ogg'
import antSong from '../../../../songs/temes/vocabulary/animals/ant.ogg'
import catSong from '../../../../songs/temes/vocabulary/animals/cat.ogg'
import cockroachSong from '../../../../songs/temes/vocabulary/animals/cockroach.ogg'
import cricketSong from '../../../../songs/temes/vocabulary/animals/cricket.ogg'
import dogSong from '../../../../songs/temes/vocabulary/animals/dog.ogg'
import dolphinSong from '../../../../songs/temes/vocabulary/animals/dolphin.ogg'
import fishSong from '../../../../songs/temes/vocabulary/animals/fish.ogg'
import lionSong from '../../../../songs/temes/vocabulary/animals/lion.ogg'
import lizardSong from '../../../../songs/temes/vocabulary/animals/lizard.ogg'
import snakeSong from '../../../../songs/temes/vocabulary/animals/snake.ogg'
import  whaleSong from '../../../../songs/temes/vocabulary/animals/whale.ogg'


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
                tocar={catSong}
                info="Cat = Gato" 
              />
              
              <ItemListAnimals
                animal="Dog"
                icon={dog} 
                tocar={dogSong}
                info="Dog = Cachorro" 
              />

              <ItemListAnimals
                animal="Lion"
                icon={lion} 
                tocar={lionSong}
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
              tocar={fishSong}
              info="fish = peixe"
            />

            <ItemListAnimals
              animal="Dolphin"
              icon={dolphin} 
              tocar={dolphinSong}
              info="Dolphin = Golfinho"   
            />    

            <ItemListAnimals
              animal="Whale"
              icon={whale} 
              tocar={whaleSong}
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
              tocar={lizardSong}
              info="Lizard = Lagarto"   
            />
            <ItemListAnimals
              animal="Snake"
              icon={snake} 
              tocar={snakeSong}
              info="Snake = Cobra"  
            />
            <ItemListAnimals
              animal="Alligator"
              icon={alligator} 
              tocar={alligatorSong}
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
              tocar={cockroachSong}
              info="Cockroach = Barata"  
            />
            <ItemListAnimals
              animal="Ant"
              icon={ant} 
              tocar={antSong}
              info="Ant = formiga"  
            />
            <ItemListAnimals
              animal="Cricket"
              icon={cricket} 
              tocar={cricketSong}
              info="Cricket = Grilo"  
            />

          </ul>

        </div>
      </div>
      <div className="interact_vocabulary">

        <Interact 
          question1="which one of the following animals is marine?"
          answer1="c"
          a1="Cricket"
          b1="Lizard"
          c1="dolphin"
          d1="snake"
          e1="Lion"
          f1="Cockroach"
          question2="which one of the following animals is a reptile?"
          answer2="d"
          a2="Whale"
          b2="ant"
          c2="cat"
          d2="cricket"
          e2="lizard"
          f2="cockroach"
          question3="which one of the following words is the translation of cockroach?"
          answer3="d"  
          a3="Peixe"
          b3="grilo"
          c3="lagarto"
          d3="barata"
          e3="gato"
          f3="pucachorrorple"
        />
      </div>
    </div>
  );
}