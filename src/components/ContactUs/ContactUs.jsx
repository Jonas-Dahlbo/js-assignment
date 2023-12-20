import React from 'react'
import img_location from '../../assets/images/location.svg'
import img_phone from '../../assets/images/phone.svg'
import img_email from '../../assets/images/email.svg'

const ContactUs = () => {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contact">
                    <img src={img_location} />
                    <div>
                        <h3>Visit us</h3>
                        <p>Sveavägen 31 <br />
                            111 34 STOCKHOLM</p>
                    </div>
                </div>
                <div className="contact">
                    <img src={img_phone} />
                    <div>
                        <h3>Call us</h3>
                        <p>+46 (8) 121 470 50 <br />
                            +46 (8) 121 470 51</p>
                    </div>
                </div>
                <div className="contact">
                    <img src={img_email} />
                    <div>
                        <h3>Email us</h3>
                        <p>info@crito.com <br />
                            support@crito.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs