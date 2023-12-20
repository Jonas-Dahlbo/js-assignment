import React from 'react'
import { Link } from 'react-router-dom'

const WorkMethodology = ({ url, img, title, description }) => {
    return (
        <Link className="work-methodology" to={url}>
            <img src={img} />
            <div className="methodology-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Link>

    )
}

export default WorkMethodology