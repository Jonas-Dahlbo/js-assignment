import React from 'react'
import { Link } from 'react-router-dom'

const ArticleBox = ({ url, img, category, title, description }) => {
    return (
        <div className="article">
            <Link to={url}>
                <img src={img} />
                <p>{category}</p>
                <h3>{title}</h3>
                <p>{description}</p>
            </Link>
        </div>
    )
}

export default ArticleBox