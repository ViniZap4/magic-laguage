import React,{useState} from 'react'

import Top from '../../../components/top/Top'

import '../css/temes.css'
import './Colors.css'




import Song_img from '../../../imagens/icons/audio/vol.png'

// import audios
import audio from '../../../songs/colors/color.ogg'

export default function Colors() {

    //  states das cores primarias para audio
  const [blue_audio, setblue_audio] = useState(<></>)
  const [yellow_audio, setyellow_audio] = useState(<></>)
  const [red_audio, setred_audio] = useState(<></>) 
    //  states das combinaçoes para audio
  const [green_audio, setgreen_audio] = useState(<></>)
  const [purple_audio, setpurple_audio] = useState(<></>)
  const [orange_audio, setorange_audio] = useState(<></>) 
    //  states de black or white para audio
  const [black_audio, setblack_audio] = useState(<></>)
  const [grey_audio, setgrey_audio] = useState(<></>)
  const [white_audio, setwhite_audio] = useState(<></>)
    //  states de others para audio
  const [nude_audio, setnude_audio] = useState(<></>)
  const [salmon_audio, setsalmon_audio] = useState(<></>)


  function blue_click() {// audio click no blue

    setblue_audio(
      <audio autoplay="autoplay" controls="controls" className="audio_invisible">
        <source src={audio} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio> 
    ); 
    setTimeout(() => {
      setblue_audio(<></>)
    }, 3000);
  }


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
            <li className="item_list_box_colors" >
              <span>Blue</span> 
              <div className="decoration_color" id="blue"></div>
              <img src={Song_img} className="play_audio" onClick={blue_click} alt="Play song" />
              <span className="info_item"> ? </span>
              {blue_audio}
            </li>

            <li className="item_list_box_colors" >
              <span>Yellow</span> 
              <div className="decoration_color" id="yellow"></div>
              <img src={Song_img} className="play_audio" onClick={blue_click} alt="Play song" />
              <span className="info_item"> ? </span>
              {yellow_audio}
            </li>

            <li className="item_list_box_colors" >
              <span>Red</span> 
              <div className="decoration_color" id="red"></div>
              <img src={Song_img} className="play_audio" onClick={blue_click} alt="Play song" />
              <span className="info_item"> ? </span>
              {red_audio}
            </li>
           
          
          </ul>

        </div>

{/*       Box Teme Colors Combinations /  Tema Combinações de cores                 */}

        <div id="primary_combinations" className="box_teme_colors">
          <h2 className="title_box_colors">
             Primary Combinations
          </h2>
  
          <ul className="list_box_colors">
            <li className="item_list_box_colors" >
                <span>Green</span> 
                <div className="decoration_color" id="green"></div>
                <img src={Song_img} className="play_audio" onClick={blue_click} alt="Play song" />
                <span className="info_item"> ? </span>
                {green_audio}
            </li>

            <li className="item_list_box_colors" >
                <span>purple</span> 
                <div className="decoration_color" id="purple"></div>
                <img src={Song_img} className="play_audio" onClick={blue_click} alt="Play song" />
                <span className="info_item"> ? </span>
                {purple_audio}
            </li>

            <li className="item_list_box_colors" >
                <span>orange</span> 
                <div className="decoration_color" id="orange"></div>
                <img src={Song_img} className="play_audio" onClick={blue_click} alt="Play song" />
                <span className="info_item"> ? </span>
                {orange_audio}
            </li>
          </ul>
  
        </div>

{/*       Box Teme black or white /  Tema preto ou branco                */}

       
        <div id="black_white" className="box_teme_colors">
          <h2 className="title_box_colors">
             Black or White
          </h2>
         
          <li className="item_list_box_colors" >
                <span>Black</span> 
                <div className="decoration_color" id="black"></div>
                <img src={Song_img} className="play_audio" onClick={blue_click} alt="Play song" />
                <span className="info_item"> ? </span>
                {black_audio}
          </li>
          
          <li className="item_list_box_colors" >
                <span>Grey</span> 
                <div className="decoration_color" id="grey"></div>
                <img src={Song_img} className="play_audio" onClick={blue_click} alt="Play song" />
                <span className="info_item"> ? </span>
                {grey_audio}
          </li>

          <li className="item_list_box_colors" >
                <span>white</span> 
                <div className="decoration_color" id="white"></div>
                <img src={Song_img} className="play_audio" onClick={blue_click}  alt="Play song" />
                <span className="info_item"> ? </span>
                {white_audio}
          </li>

        </div>
{/*       Box Teme  others  /  Tema  outros              */}
      
        <div id="others" className="box_teme_colors">
          <h2 className="title_box_colors">
            Others
          </h2>
         
          <ul className="list_box_colors">
            <li className="item_list_box_colors" >
                  <span>Nude</span> 
                  <div className="decoration_color" id="nude"></div>
                  <img src={Song_img} className="play_audio" onClick={blue_click}  alt="Play song" />
                  <span className="info_item"> ? </span>
                  {nude_audio}
            </li>

            <li className="item_list_box_colors" >
                <span>salmon</span> 
                <div className="decoration_color" id="salmon"></div>
                <img src={Song_img} className="play_audio" onClick={blue_click}  alt="Play song" />
                <span className="info_item"> ? </span>
                {salmon_audio}
          </li>
          </ul>

        </div>
        


      </div>
    </div>
  );
}