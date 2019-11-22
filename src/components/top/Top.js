import React from 'react'


import Logotipo from '../logotipo/Logotipo'
import Menu from '../menu/Menu'
import Uppage from '../Uppage/Uppage'

import './Top.css'

export default function  Top(){
  return(<>
      <div className="top">
        <Logotipo />
      </div>
      <Menu />
      <Uppage />
      
    
  </>);
}