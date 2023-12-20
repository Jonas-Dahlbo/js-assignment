import React from 'react'
import img_founder from '../../assets/images/founder.png'
import img_video from '../../assets/images/video.svg'
import { Link } from 'react-router-dom'
import Button from '../Generics/Button'
import SectionTitle from '../Generics/sectionTitle'

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="founder">
                    <img src={img_founder}
                        alt="Samantha Brown walking down a corridor with a laptop in her hand" />
                    <div className="bluebox">
                        <h4>Samantha Brown, <span>Founder</span></h4>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                    </div>
                </div>
                <div className="about-company">
                    <div className="section-title">
                        <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts" />
                        {/* <p>About Company</p>
                        <h2>We Are Business Consulting & Credit Repair Experts</h2> */}
                        <p className="company-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                            officiis quas assumenda
                            esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                        <p className="company-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                            esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                        <div className="aboutcompany-btns">
                            <Button type="black" url="/" title="Learn More" />
                            <div className="video-btn">
                                <Link href="video.mp4"><img src={img_video} />Intro Video</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About