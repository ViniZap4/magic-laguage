import React, {useState} from 'react'

import Song_img from '../../imagens/icons/audio/vol.png'

import InfoItem from '../InfoItem/InfoItem'



export default function  ItemListCorlos(props) {
  const [audio, setaudio] = useState(<></>)


  const initial ={
    textTransform:"initial"
  }

  function click(name) {// audio click no blue
    setaudio(
      <audio autoPlay="autoplay" controls="controls" className="audio_invisible">
        <source src={name} type="audio/ogg" />
      </audio> 
    ); 
    setTimeout(() => {
      setaudio(<></>)
    }, 2000);
  }

  return(
    <li className="item_list_box_item" >
      <span style={initial}>{props.id}</span> 
      <div className="list_box_content">{props.item}</div>
      <img src={Song_img} className="play_audio" onClick={() => click(props.tocar)} alt="Play song" />
      <InfoItem info={props.info}/>
      {audio}
    </li>
  );
}