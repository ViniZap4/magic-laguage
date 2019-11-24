import React, {useState} from 'react'

import Song_img from '../../../../imagens/icons/audio/vol.png'

import InfoItem from '../../../../components/InfoItem/InfoItem'



export default function  ItemListCorlos(props) {
  const [audio, setaudio] = useState(<></>)


  const initial ={
    textTransform:"initial"
  }

  function click(name) {// audio click no blue
    setaudio(
      <audio autoplay="autoplay" controls="controls" className="audio_invisible">
        <source src={name} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio> 
    ); 
    setTimeout(() => {
      setaudio(<></>)
    }, 3000);
  }

  return(
    <li className="item_list_box_colors" >
      <span style={initial}>{props.color}</span> 
      <div className="decoration_color" id={props.color}></div>
      <img src={Song_img} className="play_audio" onClick={() => click(props.tocar)} alt="Play song" />
      <InfoItem info={props.info_color}/>
      {audio}
    </li>
  );
}