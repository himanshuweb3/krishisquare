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
           
          >
            <div className='swiper-wrapper'>
              {/*Start Single Swiper Slide*/}
              <div className='swiper-slide'>
                <div
                  className='image-layer'
                  style={{
                    backgroundImage:
                      "url(https://escrowindia.globalgroominghealthcare.com/assets/homepage.png)",
                  }}
                ></div>
                <div className='image-layer-overlay'></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='main-slider-inner'>
                        <div className='main-slider__content'>                        
                         
                          <p className='main-slider__text'>
                            Building a trusted trade platform for <br />
B2B Agri Transaction
                          </p>
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
                            We’re producing natural goods
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
                            We’re producing natural goods
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
            

          
          </div>
        </section>
        {/*Main Slider End*/}

        {/*About One Start*/}
        <section className='about-one'>
          
          <div className='container'>
            <div className='row'>
              {/*Start About One Left*/}
              <div className='col-xl-6'>
                <div className='about-one__left'>
                  <div className='about-one__left-img'>
                    <div className='about-one__left-img-inner'>
                      <img src='https://escrowindia.globalgroominghealthcare.com/assets/images/history/02.jpg' alt='' />
                    </div>
                  </div>
                </div>
              </div>
              {/*End About One Left*/}

              {/*Start About One Content*/}
              <div className='col-xl-6'>
                <div className='about-one__content'>
                  <div className='sec-title'>                  
                    
                    <h2 className='sec-title__title'>About Krishi Square</h2>
                  </div>

                 
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
<section className="productshome">
        <Products user={loggedUser} />
</section>
        {/*Services One Start */}
        <section className='services-one'>
          
          <div className='container'>
            <div className='sec-title text-center'>
             
              <h2 className='sec-title__title'>Why Krishi Square</h2>
            </div>
            <div className='row justify-content-center'>
              {/*Start Single Services One */}
              <div
                className='col-xl-3 col-lg-6'
              >
                <div className='services-one__single'>
                  <div className='services-one__single-img'>
                    <div className='services-one__single-img-inner'>
                      <img
                        src='https://diqzjbzmrib1o.cloudfront.net/production/agri/images/multi_commodity_platform.png'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='services-one__single-content text-center'>
                   
                    <h3>
                      <a href='#'>
                        Multi commodity
                        <br />
                        platform
                      </a>
                    </h3>
                    <p>A one stop solution for all agri products</p>
                   
                  </div>
                </div>
              </div>
              {/*End Single Services One */}

              {/*Start Single Services One */}
              <div
                className='col-xl-3 col-lg-6 '
              >
                <div className='services-one__single'>
                  <div className='services-one__single-img'>
                    <div className='services-one__single-img-inner'>
                      <img
                        src='https://diqzjbzmrib1o.cloudfront.net/production/agri/images/best_pricing.png'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='services-one__single-content text-center'>
                   
                    <h3>
                      <a href='#'>
                        Best <br />
                        Pricing
                      </a>
                    </h3>
                    <p>Sourcing excellence to negate price dynamics</p>
                 
                  </div>
                </div>
              </div>
              {/*End Single Services One */}

              {/*Start Single Services One */}
              <div
                className='col-xl-3 col-lg-6'
              >
                <div className='services-one__single'>
                  <div className='services-one__single-img'>
                    <div className='services-one__single-img-inner'>
                      <img
                        src='https://diqzjbzmrib1o.cloudfront.net/production/agri/images/flexible_payment.png'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='services-one__single-content text-center'>
                    
                    <h3>
                      <a href='#'>
                        Protect <br />
                        payment
                      </a>
                    </h3>
                    <p>Protects both buyer and the seller in a transaction</p>
                    
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
