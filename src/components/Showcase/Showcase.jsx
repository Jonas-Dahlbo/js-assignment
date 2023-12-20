import React from 'react'
import img_wavy from '../../assets/images/wavy-lines.svg'
import showcase_img from '../../assets/images/showcase-image.svg'
import Button from '../Generics/Button'

const Showcase = () => {
    return (
        <section className="showcase">
            <img className="wavy-lines" src={img_wavy} />
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <div className="showcase-btns">
                        <Button type="yellow" url="/" title="Get Consulting" />
                        <Button type="transparent" url="/" title="Learn More" />
                    </div>
                </div>
                <img src={showcase_img} alt="Image of a man in a suit reading from a tablet" />
            </div>
        </section>
    )
}

export default Showcase