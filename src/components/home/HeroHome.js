import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// استيراد الموديولات من المسار الصحيح
import { Navigation, Autoplay } from "swiper/modules";

// استيراد CSS
import "swiper/css";
import "swiper/css/navigation";

import SliderImg1 from "../../assets/img/banner-2-img-1.jpg";
import SliderImg2 from "../../assets/img/banner-2-img-2.jpg";

function HeroHome() {
  return (
    <section className="tt-2-banner">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className="tt-2-banner-slider"
      >
        <SwiperSlide>
          <div className="tt-2-banner-slide-container">
            <div className="row row-cols-md-2 row-cols-1 align-items-center g-5">
              <div className="col">
                <h1 className="tt-2-banner-title">Create Captivating Videos Content</h1>
                <p className="tt-2-banner-descr">
                  The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco.
                </p>
                <div className="tt-2-banner-btns">
                  <a href="#" className="tt-2-btn">Watch Video <i className="flaticon-play-button"></i></a>
                </div>
              </div>
              <div className="col">
                <div className="tt-2-banner-imgs">
                  <img src={SliderImg1} alt="Image" className="img-1" />
                  <img src={SliderImg2} alt="Image" className="img-2" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="tt-2-banner-slide-container">
            <div className="row row-cols-md-2 row-cols-1 align-items-center g-5">
              <div className="col">
                <h1 className="tt-2-banner-title">Create Captivating Videos Content</h1>
                <p className="tt-2-banner-descr">
                  Another slide example with same content or different text/images.
                </p>
                <div className="tt-2-banner-btns">
                  <a href="#" className="tt-2-btn">Watch Video <i className="flaticon-play-button"></i></a>
                </div>
              </div>
              <div className="col">
                <div className="tt-2-banner-imgs">
                  <img src={SliderImg1} alt="Image" className="img-1" />
                  <img src={SliderImg2} alt="Image" className="img-2" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default HeroHome;
