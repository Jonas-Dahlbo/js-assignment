import React from 'react'
import img_stars from '../../assets/images/stars.png'
import img_cassandra from '../../assets/images/cassandra-warren.png'
import img_amanda from '../../assets/images/amanda-tulling.png'
import img_jack from '../../assets/images/jack-mcdogglas.png'
import ReviewBox from './ReviewBox'
import Button from '../Generics/Button'
import SectionTitle from '../Generics/sectionTitle'

const Testimonials = () => {
    return (
        <section className="testimonial">
            <div className="container">
                <div className="section-title">
                    <SectionTitle title="Testimonial" description="What Our Client Says" />
                </div>
                <div className="reviews">
                    <ReviewBox imgRating={img_stars} review="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                         Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                        imgReviewer={img_cassandra} Name="Cassandra Warren" Position="Business Manager, Dorfus" />
                    <ReviewBox imgRating={img_stars} review="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                         Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                        imgReviewer={img_amanda} Name="Amanda Tulling" Position="Senior Developer, Square" />
                    <ReviewBox imgRating={img_stars} review="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                         Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                        imgReviewer={img_jack} Name="Jack McDogglas" Position="Key Account Manager, Gobona" />
                </div>
                <div className="center-btn">
                    <Button type="black" url="/" title="All Reviews" />
                </div>
            </div>
        </section>
    )
}

export default Testimonials