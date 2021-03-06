import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Products from "./Products";

const Home = ({ user }) => {
  const location = useLocation();
  const [loggedUser, setLoggedUser] = useState(user);
  useEffect(() => {
    setLoggedUser(user);
  }, [user]);

  useEffect(() => {
    if (location.pathname === "/home") {
      document.querySelector(".main-slider-tagline").style.opacity = 1;
      document.querySelector(".main-slider__title").style.opacity = 1;
      document.querySelector(".main-slider__text").style.opacity = 1;
      document.querySelector(".main-slider__button-box").style.opacity = 1;
    }
  }, [location]);

  return (
    <>
      {/* <div className='preloader'>
        <img
          className='preloader__image'
          width='60'
          src='assets/images/loader.png'
          alt=''
        />
      </div> */}

      <div className='page-wrapper'>
        {/*Main Slider Start*/}
        <section className='main-slider main-slider-one'>
          <div
            className='swiper-container thm-swiper__slider'
            data-swiper-options='{"slidesPerView": 1, "loop": true, "effect": "fade", "pagination": {
            "el": "#main-slider-pagination",
            "type": "bullets",
            "clickable": true
            },
            "navigation": {
            "nextEl": "#main-slider__swiper-button-next",
            "prevEl": "#main-slider__swiper-button-prev"
            },
            "autoplay": {
            "delay": 7000
            }}'
          >
            <div className='swiper-wrapper'>
              {/*Start Single Swiper Slide*/}
              <div className='swiper-slide'>
                <div
                  className='image-layer'
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/main-slider-v1-1.jpg)",
                  }}
                ></div>
                <div className='image-layer-overlay'></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='main-slider-inner'>
                        <div className='main-slider__content'>
                          <span className='main-slider-tagline'>
                            We're producing natural goods
                          </span>
                          <h2 className='main-slider__title'>
                            Welcome to <br />
                            Agriculture
                            <span>
                              <span className='leaf'>
                                <img
                                  src='assets/images/resources/leaf.png'
                                  alt=''
                                />
                              </span>
                              Farm
                            </span>
                          </h2>
                          <p className='main-slider__text'>
                            There are many of passages of lorem Ipsum, but the
                            majori have
                            <br />
                            suffered alteration in some form.
                          </p>
                        </div>
                        <div className='main-slider__button-box'>
                          <div className='arrow-icon'>
                            <img
                              src='assets/images/icon/main-slider__button-arrow.png'
                              alt=''
                            />
                          </div>
                          <a href='#' className='thm-btn'>
                            Discover more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Swiper Slide*/}

              {/*Start Single Swiper Slide*/}
              {/* <div className='swiper-slide'>
                <div
                  className='image-layer'
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/main-slider-v1-2.jpg)",
                  }}
                ></div>
                <div className='image-layer-overlay'></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='main-slider-inner'>
                        <div className='main-slider__content'>
                          <span className='main-slider-tagline'>
                            We???re producing natural goods
                          </span>
                          <h2 className='main-slider__title'>
                            Welcome to <br />
                            Agriculture
                            <span>
                              <span className='leaf'>
                                <img
                                  src='assets/images/resources/leaf.png'
                                  alt=''
                                />
                              </span>
                              Farm
                            </span>
                          </h2>
                          <p className='main-slider__text'>
                            There are many of passages of lorem Ipsum, but the
                            majori have
                            <br />
                            suffered alteration in some form.
                          </p>
                        </div>
                        <div className='main-slider__button-box'>
                          <div className='arrow-icon'>
                            <img
                              src='assets/images/icon/main-slider__button-arrow.png'
                              alt=''
                            />
                          </div>
                          <a href='#' className='thm-btn'>
                            Discover more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*End Single Swiper Slide*/}

              {/*Start Single Swiper Slide*/}
              {/* <div className='swiper-slide'>
                <div
                  className='image-layer'
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/main-slider-v1-3.jpg)",
                  }}
                ></div>
                <div className='image-layer-overlay'></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='main-slider-inner'>
                        <div className='main-slider__content'>
                          <span className='main-slider-tagline'>
                            We???re producing natural goods
                          </span>
                          <h2 className='main-slider__title'>
                            Welcome to <br />
                            Agriculture
                            <span>
                              <span className='leaf'>
                                <img
                                  src='assets/images/resources/leaf.png'
                                  alt=''
                                />
                              </span>
                              Farm
                            </span>
                          </h2>
                          <p className='main-slider__text'>
                            There are many of passages of lorem Ipsum, but the
                            majori have
                            <br />
                            suffered alteration in some form.
                          </p>
                        </div>
                        <div className='main-slider__button-box'>
                          <div className='arrow-icon'>
                            <img
                              src='assets/images/icon/main-slider__button-arrow.png'
                              alt=''
                            />
                          </div>
                          <a href='#' className='thm-btn'>
                            Discover more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*End Single Swiper Slide*/}
            </div>

            {/* If we need navigation buttons */}
            <div
              className='swiper-pagination'
              id='main-slider-pagination'
            ></div>

            <div className='main-slider__nav'>
              <div
                className='swiper-button-prev'
                id='main-slider__swiper-button-next'
              >
                <span className='icon-right-arrow-2'></span>
              </div>
              <div
                className='swiper-button-next'
                id='main-slider__swiper-button-prev'
              >
                <span className='icon-right-arrow-2'></span>
              </div>
            </div>
          </div>
        </section>
        {/*Main Slider End*/}

        {/*About One Start*/}
        <section className='about-one'>
          <div
            className='about-one__bg wow slideInRight'
            data-wow-delay='100ms'
            data-wow-duration='2500ms'
          >
            <img
              className='float-bob-y'
              src='assets/images/backgrounds/about-v1-bg.png'
              alt=''
            />
          </div>
          <div className='container'>
            <div className='row'>
              {/*Start About One Left*/}
              <div className='col-xl-6'>
                <div className='about-one__left'>
                  <div className='about-one__left-img'>
                    <div className='about-one__left-img-inner'>
                      <img src='assets/images/about/about-v1-img1.jpg' alt='' />
                    </div>
                  </div>
                </div>
              </div>
              {/*End About One Left*/}

              {/*Start About One Content*/}
              <div className='col-xl-6'>
                <div className='about-one__content'>
                  <div className='sec-title'>
                    <div className='icon'>
                      <img
                        src='assets/images/resources/sec-title-icon1.png'
                        alt=''
                      />
                    </div>
                    <span className='sec-title__tagline'>Our introduction</span>
                    <h2 className='sec-title__title'>About Krishi Square</h2>
                  </div>

                  <h2 className='about-one__content-title'>
                    We???re Leader in Agriculture Market
                  </h2>
                  <p className='about-one__content-text'>
                    Krishi Square has been conceptualised as a B2B agri tech
                    platform to enable discovery and trust in trade for small
                    and medium sized businesses (SMBs) and Corporates. It aims
                    to bridge the trust deficit and ensure much-needed
                    transparency in the agri business
                  </p>
                </div>
              </div>
              {/*End About One Content*/}
            </div>
          </div>
        </section>
        {/*About One End*/}

        <Products user={loggedUser} />

        {/*Services One Start */}
        <section className='services-one'>
          <div
            className='services-one__bg wow slideInDown'
            data-wow-delay='100ms'
            data-wow-duration='2500ms'
          ></div>
          <div className='container'>
            <div className='sec-title text-center'>
              <div className='icon'>
                <img src='assets/images/resources/sec-title-icon1.png' alt='' />
              </div>
              <span className='sec-title__tagline'>What we???re doing</span>
              <h2 className='sec-title__title'>Why Krishi Square</h2>
            </div>
            <div className='row justify-content-center'>
              {/*Start Single Services One */}
              <div
                className='col-xl-3 col-lg-6 wow fadeInLeft'
                data-wow-delay='0ms'
                data-wow-duration='1000ms'
              >
                <div className='services-one__single'>
                  <div className='services-one__single-img'>
                    <div className='services-one__single-img-inner'>
                      <img
                        src='assets/images/services/services-v1-img1.jpg'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='services-one__single-content text-center'>
                    <div className='services-one__single-img-icon'>
                      <span className='icon-agriculture'></span>
                    </div>
                    <h3>
                      <a href='services-details.html'>
                        Multi commodity
                        <br />
                        platform
                      </a>
                    </h3>
                    <p>A one stop solution for all agri products</p>
                    <a href='services-details.html' className='read-more-btn'>
                      <span className='icon-right-arrow-2'></span>
                    </a>
                  </div>
                </div>
              </div>
              {/*End Single Services One */}

              {/*Start Single Services One */}
              <div
                className='col-xl-3 col-lg-6 wow fadeInLeft'
                data-wow-delay='100ms'
                data-wow-duration='1000ms'
              >
                <div className='services-one__single'>
                  <div className='services-one__single-img'>
                    <div className='services-one__single-img-inner'>
                      <img
                        src='assets/images/services/services-v1-img2.jpg'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='services-one__single-content text-center'>
                    <div className='services-one__single-img-icon'>
                      <span className='icon-harvest'></span>
                    </div>
                    <h3>
                      <a href='services-details.html'>
                        Best <br />
                        Pricing
                      </a>
                    </h3>
                    <p>Sourcing excellence to negate price dynamics</p>
                    <a href='services-details.html' className='read-more-btn'>
                      <span className='icon-right-arrow-2'></span>
                    </a>
                  </div>
                </div>
              </div>
              {/*End Single Services One */}

              {/*Start Single Services One */}
              <div
                className='col-xl-3 col-lg-6 wow fadeInRight'
                data-wow-delay='0ms'
                data-wow-duration='1000ms'
              >
                <div className='services-one__single'>
                  <div className='services-one__single-img'>
                    <div className='services-one__single-img-inner'>
                      <img
                        src='assets/images/services/services-v1-img3.jpg'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='services-one__single-content text-center'>
                    <div className='services-one__single-img-icon'>
                      <span className='icon-growth'></span>
                    </div>
                    <h3>
                      <a href='services-details.html'>
                        Protect <br />
                        Payment
                      </a>
                    </h3>
                    <p>Protects both buyer and the seller in a transaction</p>
                    <a href='services-details.html' className='read-more-btn'>
                      <span className='icon-right-arrow-2'></span>
                    </a>
                  </div>
                </div>
              </div>
              {/*End Single Services One */}
            </div>
          </div>
        </section>
        {/*Services One End */}
      </div>
    </>
  );
};

export default Home;
