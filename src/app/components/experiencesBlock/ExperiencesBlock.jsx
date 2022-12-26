import React from 'react'

import './experiencesBlock.css'

function ExperiencesBlock(data) {
  return (
    <div className="experience" key={data.data.index}>
        <img src={data.data.logo} className="experiencePhoto" />
        <div className="experienceText">
            <span className="experienceTitle">{data.data.name}</span>
            <p className="experienceDescription">{data.data.description}</p>
        </div>
    </div>
  )
}

export default ExperiencesBlock