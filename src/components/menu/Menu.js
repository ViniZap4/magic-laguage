import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

export default function  Menu() {
  const [temes_contents, settemes_contents] = useState(<></>)
  const [ hover_temes, sethover_temes] = useState({
    display: 'none',
    padding: "0px",
    width:"36vw",
  })

  // style temesnone
 
  const teme ={
    display: 'flex',
    flexDirection: "Column",
    color:'#fff',
    textDecoration:"none",
    margin:'0.5vh 3vw',
    textShadow: 'none'
  }

  function open_temes() {
    sethover_temes({
      display: 'flex',
      padding: "1vw",
      width:"36vw",

      
    })
    settemes_contents(<>
      <div className="content_open_temes"  onMouseMove={open_temes}>
        <h1 style={teme}> Vocabulary </h1>

        <Link to="/temes/vocabulary/animals" style={teme} className="open_teme">
          <span>Animals</span>
        </Link>
        <Link to="/temes/vocabulary/colors" style={teme} className="open_teme">
          <span>Colors</span>
        </Link> 
        <Link to="/temes/vocabulary/numbers" style={teme} className="open_teme">
          <span>Numbers</span>
        </Link>
        <Link to="/temes/vocabulary/weekday" style={teme} className="open_teme">
          <span>Day of the week</span>
        </Link>    
      </div>
      <div className="content_open_temes"  onMouseMove={open_temes}>
        <h1 style={teme}> Grammar </h1>

        <Link to="/temes/grammar/simple-past" style={teme} className="open_teme">
          <span>Simple Past</span>
        </Link>
        <Link to="/temes/grammar/simple-present" style={teme} className="open_teme">
          <span>Simple Present</span>
        </Link> 
  
      </div>
    </>)
    
  }
  function  close_temes() {

    settemes_contents()
    sethover_temes({
      display: 'flex',
      padding: "1vw",
      width:"0vw", 
      height:'0vw',
      opacity:0
    })
      setTimeout(() => {
        sethover_temes({display: 'flex',
        padding: "1vw",
        width:"0vw", 
        height:'0vw',
        opacity:0})
    }, 100);
    
  }
  

  return(<>
    <div className="super_area_menu" onMouseLeave={close_temes}>
      <div className="content_menu" >
        <Link to="/" className="item_menu"  >
          <span>Home</span>
        </Link>

        <Link to="/temes" className="item_menu" onMouseMove={open_temes}>
          <span>Temas</span>

        </Link>

        <Link to="/" className="item_menu"  >
          <span>Fórum</span>
        </Link>

        <Link to="/" className="item_menu"   >
          <span>Dúvidas Frequentes</span>
        </Link >

      </div >
      <div className="hover_temes" style={hover_temes}> 
            {temes_contents}
      </div>
    </div>
  </>);
  
}