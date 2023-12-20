import React from 'react'
import img_handshake from '../../assets/images/handshake.svg'
import img_startupAdvice from '../../assets/images/startup-advice.svg'
import img_financial from '../../assets/images/financial.svg'
import img_risk from '../../assets/images/risk.svg'
import FeatureArticle from './FeatureArticle'
import Button from '../Generics/Button'
import SectionTitle from '../Generics/sectionTitle'

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="section-title">
                    <SectionTitle title="Features" description="Our Accounting is trusted by thousand of companies" />
                    <Button type="yellow" url="/" title="Learn More" />
                </div>
                <div className="features-box">
                    <FeatureArticle url="/features/buisness" img={img_handshake} title="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    <FeatureArticle url="/features/startup" img={img_startupAdvice} title="Startup Buisness" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    <FeatureArticle url="/features/financial" img={img_financial} title="Financial Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    <FeatureArticle url="/features/risk" img={img_risk} title="Risk Managment" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                </div>
            </div>
        </section>
    )
}

export default Features