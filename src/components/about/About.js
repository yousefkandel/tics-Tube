import React from 'react'
import Image1 from "../../assets/img/inner-about-img.jpg"; // تأكد أن المسار صحيح
import Image2 from "../../assets/img/about-stat-icon-1.svg"; // تأكد أن المسار صحيح
import Image3 from "../../assets/img/about-stat-icon-2.svg"; // تأكد أن المسار صحيح
import Image4 from "../../assets/img/about-stat-icon-3.svg"; // تأكد أن المسار صحيح
import Image5 from "../../assets/img/about-stat-icon-4.svg"; // تأكد أن المسار صحيح
import Image6 from "../../assets/img/about-stat-icon-5.svg"; // تأكد أن المسار صحيح

function About() {
  return (
    <section className="tt-inner-about tt-section-spacing">
            <div className="tt-playlist-container">
                <div className="tt-inner-about-img">
                    <img src={Image1} alt="Image"/>
                </div>
                <h2 className="tt-inner-about-title">about ticstube</h2>
                <p className="tt-inner-about-descr">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>

                {/* <!-- stats --> */}
                <div className="tt-inner-about-stats">
                    <div className="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 row-cols-xxs-1 g-4 justify-content-center">
                        {/* <!-- single stat --> */}
                        <div className="col">
                            <div className="tt-inner-about-stat">
                                <img src={Image2} alt="icon"/>
                                <h3 className="tt-inner-about-stat-number">25,43,691</h3>
                                <span className="tt-inner-about-stat-title">Total Movies</span>
                            </div>
                        </div>
                        {/* <!-- single stat --> */}
                        <div className="col">
                            <div className="tt-inner-about-stat">
                                <img src={Image3} alt="icon"/>
                                <h3 className="tt-inner-about-stat-number">69,43,021</h3>
                                <span className="tt-inner-about-stat-title">Total TV Shows</span>
                            </div>
                        </div>
                        {/* <!-- single stat --> */}
                        <div className="col">
                            <div className="tt-inner-about-stat">
                                <img src={Image4} alt="icon"/>
                                <h3 className="tt-inner-about-stat-number">10,30,001</h3>
                                <span className="tt-inner-about-stat-title">Total Comedy Show</span>
                            </div>
                        </div>
                        {/* <!-- single stat --> */}
                        <div className="col">
                            <div className="tt-inner-about-stat">
                                <img src={Image5} alt="icon"/>
                                <h3 className="tt-inner-about-stat-number">05,03,321</h3>
                                <span className="tt-inner-about-stat-title">Total Podcast</span>
                            </div>
                        </div>
                        {/* <!-- single stat --> */}
                        <div className="col">
                            <div className="tt-inner-about-stat">
                                <img src={Image6} alt="icon"/>
                                <h3 className="tt-inner-about-stat-number">99,59,999</h3>
                                <span className="tt-inner-about-stat-title">Total Short Movies</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
  )
}

export default About