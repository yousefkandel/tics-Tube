import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-white-2.svg"; // تأكد أن المسار صحيح

function Nav() {
  return (
    <header className="tt-2-header tt-inner-header to-be-sticky">
      <div className="tt-2-header-container">
        <div className="tt-2-header-content">
          <div className="logo-container">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <div className="tt-2-header-right">
            <div className="tt-2-header-nav-wrapper">
              <div className="to-go-to-sidebar-in-mobile">
                <div className="tt-2-header-nav">
                  <div className="has-submenu">
                    <Link to={'/'}>HOME</Link>
                
                  </div>

                  <div className="has-submenu">
                    <Link to={'/movie'}>MOVIES</Link>
                 
                  </div>
                  <div className="has-submenu">
                     <Link to={'/About'}>About</Link>

                 
                  </div>
                  <div className="has-submenu">
                     <Link to={'/Price'}>Price</Link>

                 
                  </div>

               
              
                </div>
              </div>
            </div>

          
            <Link to="/Contact" className="tt-2-btn d-xxs-none">
              CONTACT US
            </Link>
           
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
