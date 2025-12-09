import React from 'react'

function Contact() {
  return (
   <div className="tt-inner-contact-container">
            <div className="tt-contact-infos">
                {/* <!-- single contact info --> */}
                <div className="tt-contact-info">
                    <div className="icon"><i className="flaticon-location-2"></i></div>
                    <div className="txt">
                        <h6 className="title">Our Address</h6>
                        <p className="descr mb-0">2715 Ash Dr. San Jose, South Dakota 83475</p>
                    </div>
                </div>

                {/* <!-- single contact info --> */}
                <div className="tt-contact-info">
                    <div className="icon"><i className="flaticon-email"></i></div>
                    <div className="txt">
                        <h6 className="title">Email Address</h6>
                        <p className="descr mb-0">
                            <a href="mailto:info@ticstube.com">info@ticstube.com</a>
                            <a href="mailto:contact@ticstube.com">contact@ticstube.com</a>
                        </p>
                    </div>
                </div>

                {/* <!-- single contact info --> */}
                <div className="tt-contact-info">
                    <div className="icon"><i className="flaticon-telephone"></i></div>
                    <div className="txt">
                        <h6 className="title">Phone NO</h6>
                        <p className="descr mb-0">
                            <a href="tel:+88012345698700">+88 0123 456 987 00</a>
                            <a href="tel:+315690014200010">+31 569 001 4200 010</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="tt-contact-form-container">
                <h4 className="tt-contact-form-container__title">Get in Touch</h4>
                <p className="tt-contact-form-container__descr">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                <form action="#" className="tt-contact-form">
                    <div className="grid">
                        {/* <!-- name --> */}
                        <input type="text" name="name" id="name" placeholder="Enter Name"/>
                        {/* <!-- email --> */}
                        <input type="email" name="email" id="email" placeholder="Enter Email Address"/>
                        {/* <!-- subject --> */}
                        <input type="text" name="subject" id="subject" placeholder="Write Subject"/>
                        {/* <!-- website link --> */}
                        <input type="text" name="website" id="website" placeholder="Enter Your Website Link"/>
                        {/* <!-- message --> */}
                        <textarea name="message" id="message" placeholder="Write Message..."></textarea>
                    </div>
                    {/* <!-- submit btn --> */}
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
  )
}

export default Contact