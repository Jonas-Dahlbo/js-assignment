import React from 'react'
import img_curvy from '../../assets/images/curvy-line.svg'
import Button from '../Generics/Button'

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <img src={img_curvy} />
                <div className="section-title">
                    <h2>Get News Updates By Signup</h2>
                </div>
                <div className="newsletter-form">
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <input type="text" id="email" name="email" placeholder="username@domail.com" />
                        <Button type="yellow" url="/" title="Subscribe" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter