import React from 'react'

import './Uppage.css'


function Rotate(props) {
  return(
  <span className="rotatex">{props.text}</span>
  );
}

export default function Uppage(){

  return(
    <a id="a_uppage" href="#logo"><div id="uppage"> 
     <div><Rotate  text="->" /><span> Up</span>   </div>
    </div></a>
  );
}