import React from "react";

const About = () => {
  return (
    <>
      {/* {/*Page Header Start*/}
      <section
        className='page-header clearfix'
        style={{
          backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)",
        }}
      >
        <div className='container'>
          <div className='page-header__inner text-center clearfix'>
            <ul className='thm-breadcrumb'>
              <li>
                <a href='index-main.html'>Home</a>
              </li>
              <li>About</li>
            </ul>
            <h2>About Us</h2>
          </div>
        </div>
      </section>
      {/* Page Header End*/}
      {/*About Three Start*/}
      <section className='about-three'>
        <div className='about-three__shape'></div>
        {/* /.about-three__shape */}
        <div className='container'>
          <div className='row'>
            {/*Start About Three Content Box*/}
            <div className='col-xl-6 col-lg-7'>
              <div className='about-three__content-box'>
                <div className='sec-title'>
                  <div className='icon'>
                    <img
                      src='assets/images/resources/sec-title-icon1.png'
                      alt=''
                    />
                  </div>
                  <span className='sec-title__tagline'>
                    get to know about us
                  </span>
                  <h2 className='sec-title__title'>
                    We Sell High-Quality <br />
                    Organic Products
                  </h2>
                </div>
                <div className='about-three__content-box-inner'>
                  <h2>We're Leader in Agriculture Market</h2>
                  <p>
                    There are many variations of passages of available but the
                    majority have suffered alteration in some form.
                  </p>

                  <div className='about-three__products-list'>
                    <ul>
                      <li>
                        <div className='icon'>
                          <span className='icon-investment'></span>
                        </div>
                        <h3>
                          <a href='#'>Natural Products</a>
                        </h3>
                        <p>
                          Duis aute irure dolor simply free in voluptate velit.
                        </p>
                      </li>

                      <li>
                        <div className='icon'>
                          <span className='icon-harvest'></span>
                        </div>
                        <h3>
                          <a href='#'>Healthy Food</a>
                        </h3>
                        <p>
                          Duis aute irure dolor simply free in voluptate velit.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='about-three__content-box-btn'>
                  <a href='#' className='thm-btn'>
                    Discover more
                  </a>
                </div>
                <div className='about-three__arrow float-bob-y'></div>
                {/* /.about-three__arrow */}
              </div>
            </div>
            {/*End About Three Content Box*/}

            {/*Start About Three Img Box*/}
            <div className='col-xl-6 col-lg-5'>
              <div className='about-three__img-box'>
                <img
                  src='assets/images/resources/about-3-icon-1-1.png'
                  className='about-three__img-icon'
                  alt=''
                />
                <div className='about-three__img-box-img'>
                  <div className='about-three__img-box-img-inner'>
                    <img src='assets/images/about/about-v3-img1.jpg' alt='' />
                  </div>
                </div>
              </div>
            </div>
            {/*End About Three Img Box*/}
          </div>
        </div>
      </section>
      {/*About Three End*/}
      {/*Meet Farmers One Start*/}
      <section className='meet-farmers-one meet-farmers-one--about'>
        <div className='container'>
          <div className='sec-title text-center'>
            <div className='icon'>
              <img src='assets/images/resources/sec-title-icon1.png' alt='' />
            </div>
            <span className='sec-title__tagline'>professional people</span>
            <h2 className='sec-title__title'>Meet the Farmers</h2>
          </div>
          <div className='row'>
            {/*Start Single Meet Farmers One*/}
            <div
              className='col-xl-3 col-lg-6  wow fadeInLeft'
              data-wow-delay='0ms'
              data-wow-duration='1000ms'
            >
              <div className='meet-farmers-one__single'>
                <div className='meet-farmers-one__single-img'>
                  <img
                    src='assets/images/resources/meet-farmers-v1-img1.jpg'
                    alt=''
                  />
                </div>
                <div className='meet-farmers-one__single-title text-center'>
                  <p>Farmer</p>
                  <h2>
                    <a href='farmers.html'>Kevin Martin</a>
                  </h2>
                  <div className='social-link'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fab fa-twitter'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-facebook'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-pinterest-p'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Meet Farmers One*/}

            {/*Start Single Meet Farmers One*/}
            <div
              className='col-xl-3 col-lg-6  wow fadeInLeft'
              data-wow-delay='100ms'
              data-wow-duration='1000ms'
            >
              <div className='meet-farmers-one__single'>
                <div className='meet-farmers-one__single-img'>
                  <img
                    src='assets/images/resources/meet-farmers-v1-img2.jpg'
                    alt=''
                  />
                </div>
                <div className='meet-farmers-one__single-title text-center'>
                  <p>Farmer</p>
                  <h2>
                    <a href='farmers.html'>Christine Eve</a>
                  </h2>
                  <div className='social-link'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fab fa-twitter'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-facebook'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-pinterest-p'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Meet Farmers One*/}

            {/*Start Single Meet Farmers One*/}
            <div
              className='col-xl-3 col-lg-6  wow fadeInRight'
              data-wow-delay='0ms'
              data-wow-duration='1000ms'
            >
              <div className='meet-farmers-one__single'>
                <div className='meet-farmers-one__single-img'>
                  <img
                    src='assets/images/resources/meet-farmers-v1-img3.jpg'
                    alt=''
                  />
                </div>
                <div className='meet-farmers-one__single-title text-center'>
                  <p>Farmer</p>
                  <h2>
                    <a href='farmers.html'>Mike Hardson</a>
                  </h2>
                  <div className='social-link'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fab fa-twitter'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-facebook'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-pinterest-p'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Meet Farmers One*/}

            {/*Start Single Meet Farmers One*/}
            <div
              className='col-xl-3 col-lg-6  wow fadeInRight'
              data-wow-delay='100ms'
              data-wow-duration='1000ms'
            >
              <div className='meet-farmers-one__single'>
                <div className='meet-farmers-one__single-img'>
                  <img
                    src='assets/images/resources/meet-farmers-v1-img4.jpg'
                    alt=''
                  />
                </div>
                <div className='meet-farmers-one__single-title text-center'>
                  <p>Farmer</p>
                  <h2>
                    <a href='farmers.html'>Jessica Brown</a>
                  </h2>
                  <div className='social-link'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fab fa-twitter'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-facebook'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-pinterest-p'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Meet Farmers One*/}
          </div>
        </div>
      </section>
      {/*Meet Farmers One End*/}
      {/*Cta One Start*/}
      <section
        className='cta-one'
        style={{
          backgroundImage: "url(assets/images/backgrounds/cta-v1-bg.jpg)",
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='cta-one__wrapper'>
                <div className='cta-one__left'>
                  <div className='cta-one__left-icon'>
                    <span className='icon-farm'></span>
                  </div>
                  <div className='cta-one__left-title'>
                    <h2>We’re Leader in Agriculture Market</h2>
                  </div>
                </div>
                <div className='cta-one__right'>
                  <div className='cta-one__right-btn'>
                    <a href='#' className='thm-btn'>
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Cta One End*/}
    </>
  );
};

export default About;
