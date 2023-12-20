import React from 'react'
import Header from '../components/Header/Header.jsx'
import Showcase from '../components/Showcase/Showcase.jsx'
import Partners from '../components/Partners/Partners.jsx'
import Features from '../components/Features/Features.jsx'
import About from '../components/About/About.jsx'
import Services from '../components/Services/Services.jsx'
import WhyUs from '../components/WhyUs/WhyUs.jsx'
import ProjectsCases from '../components/ProjectsCases/ProjectsCases.jsx'
import OurTeam from '../components/OurTeam/OurTeam.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'
import Articles from '../components/Articles/Articles.jsx'
import Newsletter from '../components/Newsletter/Newsletter.jsx'
import Footer from '../components/Footer/Footer.jsx'
import CopyrightBar from '../components/CopyrightBar/CopyrightBar.jsx'

const Home = () => {
    return (
        <div>
            <Header />
            <Showcase />
            <Partners />
            <Features />
            <About />
            <Services />
            <WhyUs />
            <ProjectsCases />
            <OurTeam />
            <Testimonials />
            <Articles />
            <Newsletter />
            <Footer />
            <CopyrightBar />
        </div>
    )
}

export default Home