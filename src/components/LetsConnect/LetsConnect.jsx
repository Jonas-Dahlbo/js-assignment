import React from 'react'
import img_wavyLine from '../../assets/images/wavy-lines.svg'
import { Link } from 'react-router-dom'

const LetsConnect = () => {
    return (
        <section className="lets-connect">
            <img className="wavy-lines" src={img_wavyLine} />
            <div className="container">
                <div className="connect-box">
                    <Link to="/contacts/home">Home</Link>
                    <Link to="/contacts/contact">Contact</Link>
                </div>
                <h2>Let's Connect</h2>
            </div>
        </section>
    )
}

export default LetsConnect