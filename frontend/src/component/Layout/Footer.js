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
                      className='col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp'
                      data-wow-delay='0.1s'
                    >
                      <div className='footer-widget__column footer-widget__about'>
                        <div className='footer-widget__about-logo'>
                          <a href='index-main.html'>
                            <img
                              src='assets/images/resources/footer-logo.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <p className='footer-widget__about-text'>
                          Lorem ipsum dolor sit amet consect etur adi pisicing
                          elit sed.
                        </p>
                        <div className='footer-widget__about-contact-box'>
                          <p className='phone'>
                            <a href='tel:123456789'>
                              <i className='fas fa-phone-square-alt'></i>+92 666
                              888 0000
                            </a>
                          </p>
                          <p>
                            <a href='mailto:needhelp@company.com'>
                              <i className='fa fa-envelope'></i>
                              needhelp@company.com
                            </a>
                          </p>
                          <p className='text'>
                            <i className='fas fa-map-marker-alt'></i>666 road,
                            broklyn street new york
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*End Footer Widget Column*/}

                    {/*Start Footer Widget Column*/}
                    <div
                      className='col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp'
                      data-wow-delay='0.5s'
                    >
                      <div className='footer-widget__column footer-widget__explore'>
                        <h2 className='footer-widget__title'>Explore</h2>
                        <ul className='footer-widget__explore-list'>
                          <li className='footer-widget__explore-list-item'>
                            <a href='projects.html'>New Projects</a>
                          </li>
                          <li className='footer-widget__explore-list-item'>
                            <a href='services.html'>Our Services</a>
                          </li>
                          <li className='footer-widget__explore-list-item'>
                            <a href='about.html'>About Us</a>
                          </li>
                          <li className='footer-widget__explore-list-item'>
                            <a href='#'>Get in Touch</a>
                          </li>
                          <li className='footer-widget__explore-list-item'>
                            <a href='#'>Volunteers</a>
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
      </footer>
      <div className='mobile-nav__wrapper'>
        <div className='mobile-nav__overlay mobile-nav__toggler'></div>
        {/* /.mobile-nav__overlay */}
        <div className='mobile-nav__content'>
          <span className='mobile-nav__close mobile-nav__toggler'>
            <i onClick={closeNav} className='fa fa-times'></i>
          </span>

          <div className='logo-box'>
            <a href='index-main.html' aria-label='logo image'>
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
                <Link onClick={closeNav} to='/home'>
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
                <Link onClick={closeNav} to='/products'>
                  Products
                </Link>
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
