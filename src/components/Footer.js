import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/img/logo-white-2.svg";

function Footer() {
  return (
    <footer className="tt-footer">
      <div className="tt-footer-container">
        <div className="tt-footer-top">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="tt-footer-top__links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/pricing-plan">Pricing Plan</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        <div className="tt-footer-bottom">
          <div className="row row-cols-xl-3 align-items-end">
            <div className="col-xl col-md-6 col-12 order-2 order-xl-1">
              <p className="tt-footer-bottom-side tt-footer-bottom-copyright mb-0">
                Copyright ©2025 by Ticstube
              </p>
            </div>

            <div className="col-xl order-1 order-xl-2">
              <div className="tt-footer-socials">
                <a href="#"><i className="flaticon-facebook"></i></a>
                <a href="#"><i className="flaticon-twitter"></i></a>
                <a href="#"><i className="flaticon-social-media"></i></a>
                <a href="#"><i className="flaticon-youtube"></i></a>
              </div>
            </div>

            <div className="col-xl col-md-6 col-12 order-3">
              <div className="tt-footer-bottom-side tt-footer-bottom-links">
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
                <a href="#">License</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
