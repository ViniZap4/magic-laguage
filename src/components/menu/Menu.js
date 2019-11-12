import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

export default function  Menu() {
  return(<>
    <div className="content_menu">
      <Link to="/">
        Home
      </Link>
    </div>
  </>);
  
}