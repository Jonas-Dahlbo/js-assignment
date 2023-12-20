import React from 'react'
import img_news1 from '../../assets/images/news1.png'
import img_news2 from '../../assets/images/news2.png'
import img_news3 from '../../assets/images/news3.png'
import img_ldot from '../../assets/images/l-dot.svg'
import ArticleBox from './ArticleBox'
import Button from '../Generics/Button'
import SectionTitle from '../Generics/sectionTitle'

const Articles = () => {
    return (
        <section className="article-news">
            <div className="container">
                <div className="section-title">
                    <div>
                        <SectionTitle title="Article & News" description="Get Every Single Articles & News" />
                    </div>
                    <Button type="transparent" url="/" title="Browse Articles" />
                </div>
                <div className="article-box">
                    <ArticleBox url="/articles/article1" img={img_news1} category="Buisness" title="How To Use Digitalization In The Classroom"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
                    <ArticleBox url="/articles/article2" img={img_news2} category="Buisness" title="How To Implement Chat GPT In Your Projects"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
                    <ArticleBox url="/articles/article3" img={img_news3} category="Buisness" title="The Guide To Support Modern CSS Design"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
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

export default Articles