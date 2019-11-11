import React from 'react'

import logo from '../../imagens/logo_opa.png'
import title from '../../imagens/title.png'

export default function Logotipo() {
 return( 
  <div className="logo_tipo">
    <img src={logo} alt="Magic Language" className="logo" />
    <img src={title} alt="Magic Language" className="logotipo" />
  </div> 
 );
}
