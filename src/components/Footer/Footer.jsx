import React from 'react'
import img_wavy from '../../assets/images/wavy-lines-r.svg'
import img_logo_black from '../../assets/images/logo-black.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <img className="wavy-line" src={img_wavy} />
                <div className="logotype">
                    <Link to="/">
                        <img src={img_logo_black} />
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati
                        voluptas voluptates!
                        Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div className="headlines">
                    <h3>Company</h3>
                    <nav className="footer-links">
                        <div className="footer-link"><Link to="/NotFound">About</Link></div>
                        <div className="footer-link"><Link to="/NotFound">Features</Link></div>
                        <div className="footer-link"><Link to="/NotFound">Works</Link></div>
                        <div className="footer-link"><Link to="/NotFound">Career</Link></div>
                    </nav>
                </div>
                <div className="headlines">
                    <h3>Help</h3>
                    <nav className="footer-links">
                        <div className="footer-link"><Link to="/NotFound">Customer Support</Link></div>
                        <div className="footer-link"><Link to="/NotFound">Delivery Details</Link></div>
                        <div className="footer-link"><Link to="/NotFound">Terms & Conditions</Link></div>
                        <div className="footer-link"><Link to="/NotFound">Privacy Policy</Link></div>
                    </nav>
                </div>
                <div className="headlines">
                    <h3>Resources</h3>
                    <nav className="footer-links">
                        <div className="footer-link"><Link to="/NotFound">Free eBooks</Link></div>
                        <div className="footer-link"><Link to="/NotFound">Development Tutorial</Link></div>
                        <div className="footer-link"><Link to="/NotFound">How to - Blog</Link></div>
                        <div className="footer-link"><Link to="/NotFound">Youtube Playlist</Link></div>
                    </nav>
                </div>
                <div className="headlines">
                    <h3>Link</h3>
                    <nav className="footer-links">
                        <div className="footer-link"><Link to="/NotFound">Free eBooks</Link></div>
                        <div className="footer-link"><Link to="/NotFound">Development Tutorial</Link></div>
                        <div className="footer-link"><Link to="/NotFound">How to - Blog</Link></div>
                        <div className="footer-link"><Link to="/NotFound">Youtube Playlist</Link></div>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer