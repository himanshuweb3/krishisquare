import React from "react";

const About = () => {
  return (
    <>
      {/* {/*Page Header Start*/}
      <section
        className='page-header clearfix'
        style={{
          backgroundImage: "url(https://escrowindia.globalgroominghealthcare.com/assets/images/about/03.png)",
        }}
      >
        <div className='container'>
          <div className='page-header__inner text-center clearfix'>
            
            <h2>About Us</h2>
          </div>
        </div>
      </section>
      {/* Page Header End*/}
      {/*About Three Start*/}
      <section className='about-three'>
      
        {/* /.about-three__shape */}
        <div className='container'>
          <div className='row'>
            {/*Start About Three Content Box*/}
            <div className='col-xl-6 col-lg-7'>
              <div className='about-three__content-box'>
                <div className='sec-title'>
                <h2 className='sec-title__title'>
                    Our Vision
                  </h2>
                </div>
                <div className='about-three__content-box-inner'>
                  <p>
                    Building trust in trade with digital technologies to bring transparency in agri business.
                  </p>
                </div>
                {/* /.about-three__arrow */}
              </div>
            </div>
            {/*End About Three Content Box*/}

            {/*Start About Three Img Box*/}
            <div className='col-xl-6 col-lg-5'>
              <div className='about-three__img-box'>
                <div className='about-three__img-box-img'>
                  <div className='about-three__img-box-img-inner'>
                    <img src='https://escrowindia.globalgroominghealthcare.com/assets/aboutus.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
            {/*End About Three Img Box*/}



 {/*Start About Three Img Box*/}
            <div className='col-xl-6 col-lg-5'>
              <div className='about-three__img-box'>
                <div className='about-three__img-box-img'>
                  <div className='about-three__img-box-img-inner'>
                    <img src='https://escrowindia.globalgroominghealthcare.com/assets/images/about/02.jpg' alt='' />
                  </div>
                </div>
              </div>
            </div>
            {/*End About Three Img Box*/}
<div className='col-xl-6 col-lg-7'>
              <div className='about-three__content-box'>
                <div className='sec-title'>
                <h2 className='sec-title__title'>
                    Our Mission
                  </h2>
                </div>
                <div className='about-three__content-box-inner'>
                  <p>
                    Empower SMB's and corporates to trade through a safe and a simple platform.
                  </p>
                </div>
                {/* /.about-three__arrow */}
              </div>
            </div>
            {/*End About Three Content Box*/}

           



          </div>
        </div>
      </section>
      {/*About Three End*/}
     
      
    </>
  );
};

export default About;
