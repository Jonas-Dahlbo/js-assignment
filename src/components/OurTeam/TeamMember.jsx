import React from 'react'

const TeamMember = ({ img, altText, Name, Position }) => {
    return (
        <div className="member">
            <img src={img} alt={altText} />
            <h3>{Name}</h3>
            <p>{Position}</p>
        </div>
    )
}

export default TeamMember