import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

export default function  Menu() {
  return(<>
    <div className="content_menu">
      <Link to="/" className="item_menu">
        <span>Home</span>
      </Link>

      <Link to="/" className="item_menu">
        <span>Tópicos</span>
      </Link>

      <Link to="/" className="item_menu">
        <span>Fórum</span>
      </Link>

      <Link to="/" className="item_menu">
        <span>Dúvidas Frequentes</span>
      </Link>

    </div>
  </>);
  
}