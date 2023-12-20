import React from 'react'
import img_paperz from '../../assets/images/paperz.svg'
import img_dorfus from '../../assets/images/dorfus.svg'
import img_martino from '../../assets/images/martino.svg'
import img_square from '../../assets/images/square.svg'
import img_gobona from '../../assets/images/gobona.svg'

const Partners = () => {
    return (
        <section className="partners">
            <div className="container">
                <a className="partner" href="#" target="_blank" ><img src={img_paperz} /></a>
                <a className="partner" href="#" target="_blank" ><img src={img_dorfus} /></a>
                <a className="partner" href="#" target="_blank" ><img src={img_martino} /></a>
                <a className="partner" href="#" target="_blank" ><img src={img_square} /></a>
                <a className="partner" href="#" target="_blank" ><img src={img_gobona} /></a>
            </div>
        </section>
    )
}

export default Partners