import React from 'react'

const Competences = ({id, icon, title, description}) => {
  return (
    <div className="qualitication" key={id}>
        <div className="qualiticationTitle">
            {icon}
            <h3>{title}</h3>
        </div>
        <p>
            {description}
        </p>
    </div>
  )
}

export default Competences