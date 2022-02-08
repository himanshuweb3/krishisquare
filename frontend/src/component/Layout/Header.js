import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = ({ user, setUser }) => {
  const [loggedUser, setLoggedUser] = useState(user);

  useEffect(() => {
    setLoggedUser(user);
  }, [user]);

  const openNav = () => {
    document.querySelector(".mobile-nav__wrapper").classList.add("expanded");
  };

  const logout = async () => {
    try {
      await axios.get("/api/v1/users/logout");
      setUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className='main-header main-header--one clearfix'>
        <div className='main-header--one__wrapper'>
          <div className='main-header--one__bottom clearfix'>
            <div className='auto-container'>
              <div className='main-header--one__bottom-inner'>
                <div className='logo'>
                  <Link to='/home'>
                    <img
                      className='dark-logo'
                      src='assets/images/resources/logo-1.png'
                      alt=''
                    />
                    <img
                      className='light-logo'
                      src='assets/images/resources/logo-2.png'
                      alt=''
                    />
                  </Link>
                </div>

                <nav className='main-menu main-menu--1'>
                  <div className='main-menu__inner'>
                    <a href='#' className='mobile-nav__toggler'>
                      <i onClick={openNav} className='fa fa-bars'></i>
                    </a>

                    <div className='stricky-one-logo'>
                      <div className='logo'>
                        <Link to='/'>
                          <img
                            className='dark-logo'
                            src='assets/images/resources/logo-1.png'
                            alt=''
                          />
                          <img
                            className='light-logo'
                            src='assets/images/resources/logo-2.png'
                            alt=''
                          />
                        </Link>
                      </div>
                    </div>

                    <div className='main-header--one__bottom-left'>
                      <ul className='main-menu__list'>
                        <li className='dropdown megamenu'>
                          <Link to='/home'>Home</Link>
                        </li>
                        <li>
                          <Link to='/about'>About</Link>
                        </li>
                        <li className='nav-item dropdown'>
                          <a
                            className='nav-link dropdown-toggle'
                            id='navbarDropdown'
                            role='button'
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            Marketplace
                          </a>
                          <div
                            className='dropdown-menu'
                            aria-labelledby='navbarDropdown'
                          >
                            <Link className='dropdown-item' to='/signup'>
                              Registration
                            </Link>
                            <Link className='dropdown-item' to='/products'>
                              Products
                            </Link>
                          </div>
                        </li>
                        <li>
                          <Link to='/insights'>Insights</Link>
                        </li>
                        <li>
                          <Link to='/contact'>Contact</Link>
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
                              <Link to='/login'>Login/Register</Link>
                            </li>
                           
                          </>
                        )}
                        {loggedUser && loggedUser.role === "admin" ? (
                          <li className='dropdown'>
                            <Link to='/admin'>Admin</Link>
                          </li>
                        ) : (
                          ""
                        )}
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='stricky-header stricked-menu main-menu'>
        <div className='sticky-header__content'></div>
      </div>
    </>
  );
};

export default Header;
