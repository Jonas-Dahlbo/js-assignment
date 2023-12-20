import React from 'react'
import img_arrow_link from '../../assets/images/arrow-link.svg'
import { Link } from 'react-router-dom'

const ServiceBox = ({ title, description, url }) => {
    return (
        <div className="service-box">
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={url} ><img src={img_arrow_link} /></Link>
        </div>
    )
}

export default ServiceBox