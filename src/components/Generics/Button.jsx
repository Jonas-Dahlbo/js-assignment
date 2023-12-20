import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ type, url, title }) => {

    const getButtonClassName = () => {
        switch (type) {
            case 'yellow':
                return 'btn-yellow'
            case 'black':
                return 'btn-black'
            default:
                return 'btn-transparent'
        }
    }
    return (
        <Link className={getButtonClassName()} to={url}>{title}<i className="fa-regular fa-arrow-up-right"></i></Link>
    )
}

export default Button