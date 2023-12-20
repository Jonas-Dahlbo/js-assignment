import React from 'react'
import { Link } from 'react-router-dom'

const ProjectArticle = ({ url, img, altText, title }) => {
  return (
    <Link className="project" to={url}>
      <img src={img} alt={altText} />
      <h3>{title}</h3>
      <div className="read-more">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
    </Link>
  )
}

export default ProjectArticle