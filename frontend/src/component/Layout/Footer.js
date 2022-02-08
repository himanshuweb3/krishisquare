import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Footer = ({ user, setUser }) => {
  const [loggedUser, setLoggedUser] = useState(user);

  useEffect(() => {
    setLoggedUser(user);
  }, [user]);

  const logout = async () => {
    closeNav();
    try {
      await axios.get("/api/v1/users/logout");
      setUser();
    } catch (error) {
      console.log(error);
    }
  };

  const closeNav = () => {
    document.querySelector(".mobile-nav__wrapper").classList.remove("expanded");
  };
  return (
    <>
      <footer className='footer-one'>
        <div className='footer-one__top'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='footer-one__top-wrapper'>
                  <div className='footer-one__bg'>
                    <img
                      src='assets/images/backgrounds/footer-one-bg.png'
                      alt=''
                    />
                  </div>
                  <div className='row'>
                    {/*Start Footer Widget Column*/}
                    <div
                      className='col-xl-4 col-lg-6 col-md-6'
                    >
                      <div className='footer-widget__column footer-widget__about'>
                        <div className='footer-widget__about-logo'>
                          <a href='/'>
                            <img
                              src='https://escrowindia.globalgroominghealthcare.com/assets/images/logo/logo1.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <p className='footer-widget__about-text'>
                          Krishi Square is B2B agri tech platform to enable discovery and trust in trade for small and medium size businesses(SMBs) and Corporates.
                        </p>
                       
                      </div>
                    </div>
                    {/*End Footer Widget Column*/}

                   <div className='col-xl-3 col-lg-6 col-md-6' >
                     
                     <div className='footer-widget__column footer-widget__explore'>
                       <h2 className='footer-widget__title'>Get In Touch</h2>
                          <p className='footer-widget__about-text'>
                            <a href='tel:+91-9619137986'>
                              <i className='fas fa-phone-square-alt'></i>+91-9619137986
                            </a>
                          </p>
                          <p className='footer-widget__about-text'>
                            <a href='mailto:info@krishisquare.com'>
                              <i className='fa fa-envelope'></i>info@krishisquare.com
                            </a>
                          </p>
                          <p className='footer-widget__about-text'>
                            <i className='fas fa-map-marker-alt'></i>144 Senapati Bapat Road, Matunga West Mumbai - 400 016
                          </p>
                        </div>
                     
                     </div>

                    {/*Start Footer Widget Column*/}
                    <div
                      className='col-xl-3 col-lg-6 col-md-6 '
                    >
                      <div className='footer-widget__column footer-widget__explore'>

                        <h2 className='footer-widget__title'>Explore</h2>

                        <ul className='footer-widget__explore-list'>
                          <li className='footer-widget__explore-list-item'>
                            <a href='about'>About us</a>
                          </li>
                          <li className='footer-widget__explore-list-item'>
                            <a href='products'>Marketplace</a>
                          </li>
                          <li className='footer-widget__explore-list-item'>
                            <a href='#'>Escrow</a>
                          </li>
                          <li className='footer-widget__explore-list-item'>
                            <a href='insights'>Insights</a>
                          </li>
                          <li className='footer-widget__explore-list-item'>
                            <a href='contact'>Contact us</a>
                          </li>
<li className='footer-widget__explore-list-item'>
                            <a href='#'>Terms & Conditions</a>
                          </li>
<li className='footer-widget__explore-list-item'>
                            <a href='#'>Privacy Policy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*End Footer Widget Column*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


            <div class="footer-one__bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="footer-one__bottom-inner">
                                <div class="footer-one__bottom-text">
                                    <p>&copy; Copyright 2022 Krishi Square Private Limited. All Rights Reserved. </p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
      </footer>
      <div className='mobile-nav__wrapper'>
        <div className='mobile-nav__overlay mobile-nav__toggler'></div>
        {/* /.mobile-nav__overlay */}
        <div className='mobile-nav__content'>
          <span className='mobile-nav__close mobile-nav__toggler'>
            <i onClick={closeNav} className='fa fa-times'></i>
          </span>

          <div className='logo-box'>
            <a href='/' aria-label='logo image'>
              <img
                src='assets/images/resources/mobilemenu_logo.png'
                width='155'
                alt=''
              />
            </a>
          </div>
          {/* /.logo-box */}
          <div className='mobile-nav__container'>
            <ul className='main-menu__list'>
              <li className='dropdown'>
                <Link onClick={closeNav} to='/'>
                  Home
                </Link>
              </li>
              <li className='dropdown'>
                <Link onClick={closeNav} to='/about'>
                  About
                </Link>
              </li>
              <li className='dropdown'>
                <Link onClick={closeNav} to='/contact'>
                  Contact
                </Link>
              </li>
              <li className='dropdown'>
                <Link onClick={closeNav} to='/'>
                  Marketplace
                </Link>
               <ul>
                   <li>
                <Link onClick={closeNav} to='/products'>
                  Products
                </Link>
              </li>
                  <li>
                    <Link onClick={closeNav} to='/signup'>
                      Sign Up
                    </Link>
                  </li>
                  </ul>
              </li>

              {loggedUser ? (
                <li className='dropdown'>
                  <Link onClick={logout} to='/home'>
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li className='dropdown'>
                    <Link onClick={closeNav} to='/login'>
                      Login
                    </Link>
                  </li>
                  <li className='dropdown'>
                    <Link onClick={closeNav} to='/signup'>
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
              {loggedUser && loggedUser.role === "admin" ? (
                <li className='dropdown'>
                  <Link onClick={closeNav} to='/admin'>
                    Admin
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          {/* /.mobile-nav__container */}

          {/* /.mobile-nav__contact */}

          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      {/* /.mobile-nav__wrapper */}

      <div className='search-popup'>
        <div className='search-popup__overlay search-toggler'></div>
        {/* /.search-popup__overlay */}
        <div className='search-popup__content'>
          <form action='#'>
            <label htmlFor='search' className='sr-only'>
              search here
            </label>
            {/* /.sr-only */}
            <input type='text' id='search' placeholder='Search Here...' />
            <button
              type='submit'
              aria-label='search submit'
              className='thm-btn2'
            >
              <i className='fa fa-search' aria-hidden='true'></i>
            </button>
          </form>
        </div>
        {/* /.search-popup__content */}
      </div>
      {/* /.search-popup */}

      <a href='#' data-target='html' className='scroll-to-target scroll-to-top'>
        <i className='icon-right-arrow-2'></i>
      </a>
    </>
  );
};

export default Footer;
