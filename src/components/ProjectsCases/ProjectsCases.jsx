import React from 'react'
import img_article1 from '../../assets/images/article-1.png'
import img_article2 from '../../assets/images/article-2.png'
import img_article3 from '../../assets/images/article-3.png'
import img_article4 from '../../assets/images/article-4.png'
import ProjectArticle from './ProjectArticle'
import Button from '../Generics/Button'
import SectionTitle from '../Generics/sectionTitle'

const Projects_cases = () => {
    return (
        <section className="project-and-case">
            <div className="container">
                <div className="section-title">
                    <SectionTitle title="Project & Case studies" description="Let's Looks Our Global Projects" />
                </div>
                <div className="project-and-cases">
                    <ProjectArticle url="/projectscases/article1" img={img_article1} altText="Arms of a man reading a business magazine" title="Grow your business" />
                    <ProjectArticle url="/projectscases/article2" img={img_article2} altText="Glasses, a stapler, a pen and a pink apple phone on a desk" title="Why your client needs a responsive websites" />
                    <ProjectArticle url="/projectscases/article3" img={img_article3} altText="Desk with office supplies" title="Educate your employees to get better results" />
                    <ProjectArticle url="/projectscases/article4" img={img_article4} altText="Laptop displaying Business Intelligence Insights" title="Business Insights is a important piece of your business" />
                </div>
                <div className="center-btn">
                    <Button type="black" url="/" title="All Recent Projects" />
                </div>
            </div>
        </section>
    )
}

export default Projects_cases