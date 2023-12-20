import React from 'react'
import { Link } from 'react-router-dom'

const FeatureArticle = ({ url, img, title, description }) => {
    return (
        <Link className="feature-article" to={url}>
            <img src={img} />
            <h3>{title}</h3>
            <p>{description}</p>
        </Link>
    )
}

export default FeatureArticle