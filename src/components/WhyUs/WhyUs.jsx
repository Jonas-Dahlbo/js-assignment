import React from 'react'
import img_thumbs from '../../assets/images/thumbs-up.svg'
import img_pentagon from '../../assets/images/pentagon.svg'
import img_nib from '../../assets/images/nib.svg'
import img_ai from '../../assets/images/ai.svg'
import img_whyUs from '../../assets/images/why-us.png'
import WorkMethodology from './WorkMethodology'
import SectionTitle from '../Generics/sectionTitle'


const Why_us = () => {
    return (
        <section className="why-us">
            <div className="container">
                <div className="section-title">
                    <SectionTitle title="Why Choose us" description="Why We Are The Best Business Consulting Agency" />
                    <div className="services">
                        <WorkMethodology url="/whyus/excellence" img={img_thumbs} title="Process Excellence" description="Lorem, ipsum dolor sit amet consectetur." />
                        <WorkMethodology url="/whyus/planning" img={img_pentagon} title="Strategic Planning" description="Lorem, ipsum dolor sit amet consectetur." />
                        <WorkMethodology url="/whyus/design" img={img_nib} title="Experience Design" description="Lorem, ipsum dolor sit amet consectetur." />
                        <WorkMethodology url="/whyus/ai" img={img_ai} title="Artificial Intelligence" description="Lorem, ipsum dolor sit amet consectetur." />
                    </div>
                </div>
                <div className="image-box">
                    <img src={img_whyUs} alt="two women sitting at a desk and having a conversation" />
                    <div className="grey-box"></div>
                </div>
            </div>
        </section>
    )
}

export default Why_us