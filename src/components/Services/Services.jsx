import React from 'react'
import img_wavy_line from '../../assets/images/wavy-lines.svg'
import ServiceBox from './ServiceBox'
import Button from '../Generics/Button'
import SectionTitle from '../Generics/sectionTitle'

const Services = () => {
    return (
        <section className="our-services">
            <div className="container">
                <img className="wavy-line" src={img_wavy_line} />
                <div className="section-title">
                    <SectionTitle title="Our Services" description="We Provide The Best Service For Consulting" />
                </div>
                <div className="service-container">
                    <ServiceBox title="Buisness Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/buisness" />
                    <ServiceBox title="Startup Buisness" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startup" />
                    <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/financial" />
                    <ServiceBox title="Risk Managment" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/risk" />
                </div>
                <div className="center-btn">
                    <Button type="transparent" url="/" title="Browse Services" />
                </div>
            </div>
        </section>
    )
}

export default Services