import { Link } from 'react-router-dom'

import { LinkedinLogo, GithubLogo, InstagramLogo } from 'phosphor-react'

import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbarLeft">Eumanuel .Dev</div>
      </Link>
      <div className="navbarCenter">
        <a href='https://www.linkedin.com/in/emanuel-ribeiro-8705611b9/' target="_blank">
          <LinkedinLogo size={32} weight="light"/>
        </a>
        <a href='https://github.com/Eumanuel' target="_blank">
          <GithubLogo size={32} weight="light"/>
        </a>
        <a href='https://www.instagram.com/eumanuelllll/' target="_blank">
          <InstagramLogo size={32} weight="light"/>
        </a>
      </div>
      <div className="navbarRight">right</div>
    </div>
  )
}
