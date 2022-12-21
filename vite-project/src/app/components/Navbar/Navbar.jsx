import { Link } from 'react-router-dom'

import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbarLeft">Eumanuel.  Dev</div>
      </Link>
      <div className="navbarCenter">
        <a href='https://www.linkedin.com/in/emanuel-ribeiro-8705611b9/' target="_blank">
          <img src="https://blz04pap001files.storage.live.com/y4mdFmJ19EugE2lOji4YS0edIDzWh4A7GZ52PbXxR_cm4YTV3lX8yWfh1kIQZF14kLI7k-kuvq7v4eE9ULY9Nx-DmM3y_hydWA6iBk1uiFH9PXJ4RnsW9cSML2fIgb4RP-59xlaZM21eZWMU8LzlsZAIyn4v1Iua8Zrm_ZsWtlCsF7AVHl8PGeLAeOlajZygUZx?width=512&height=512&cropmode=none" alt="" />
        </a>
      </div>
      <div className="navbarRight">right</div>
    </div>
  )
}
