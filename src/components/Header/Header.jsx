import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import img_logo from '../../assets/images/logo.svg'
import Button from '../Generics/Button'

const Header = () => {
    return (
        <header>
            <div className="container">
                <button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button>
                <div className="logotype" href="index.html">
                    <Link to="/">
                        <img src={img_logo} />
                    </Link>
                </div>
                <div className="contactinformation-bar">
                    <p className="contact-box"><i className="fa-light fa-phone-volume"></i>
                        +46 (8) 121 470 50</p>
                    <p className="contact-box">
                        <i className="fa-regular fa-envelope-dot"></i>
                        Info@crito.com
                    </p>
                    <p className="contact-box last">
                        <i className="fa-light fa-location-dot"></i>
                        Sveavägen 31, 111 34 STOCKHOLM
                    </p>
                </div>
                <div className="socialmedia-bar">
                    <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div className="menu">
                    <nav className="menubar">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </nav>
                    <Button type="yellow" url="#" title="Login" />
                </div>
            </div>
        </header>
    )
}

export default Header