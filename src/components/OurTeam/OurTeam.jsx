import React from 'react'
import img_team1 from '../../assets/images/team1.png'
import img_team2 from '../../assets/images/team2.png'
import img_team3 from '../../assets/images/team3.png'
import img_team4 from '../../assets/images/team4.png'
import img_ldot from '../../assets/images/l-dot.svg'
import TeamMember from './TeamMember'
import Button from '../Generics/Button'
import SectionTitle from '../Generics/sectionTitle'


const Our_team = () => {
    return (
        <section className="our-team">
            <div className="container">
                <div className="section-title">
                    <div>
                        <SectionTitle title="Meet Our Team" description="Experience Team Members" />
                    </div>
                    <Button type="yellow" url="/" title="Browse Team" />
                </div>
                <div className="team-members">
                    <TeamMember img={img_team1} alt="Picture of Kristine Palmer" Name="Kristine Palmer" Position="Chef Operation Officer" />
                    <TeamMember img={img_team2} alt="Picture of Mark Aubri" Name="Mark Aubri" Position="Senior Consultant" />
                    <TeamMember img={img_team3} alt="Picture of Kimberly Hansen" Name="Kimberly Hansen" Position="Senior Consultant" />
                    <TeamMember img={img_team4} alt="Picture of Justin Willoman" Name="Justin Willoman" Position="Senior Tech Consultant" />
                </div>
                <div className="center-btn">
                    <div id="dot1"><img src={img_ldot} /></div>
                    <div id="dot2"><img src={img_ldot} /></div>
                    <div id="dot3"><img src={img_ldot} /></div>
                    <div id="dot4"><img src={img_ldot} /></div>
                    <div id="dot5"><img src={img_ldot} /></div>
                </div>
            </div>
        </section>
    )
}

export default Our_team