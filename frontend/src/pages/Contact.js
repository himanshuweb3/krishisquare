import React from "react";

const Contact = () => {
  return (
    <>
      {/*Page Header Start */}
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
              <li>Contact</li>
            </ul>
            <h2>Contact Us</h2>
          </div>
        </div>
      </section>
      {/*Page Header End */}

      {/*Start Contact Page */}
      <section className='contact-page'>
        <div className='container'>
          <div className='row'>
            {/*Start Contact Page Left */}
            <div className='col-xl-4 col-lg-4'>
              <div className='contact-page__left'>
                <div className='sec-title'>
                  <div className='icon'>
                    <img
                      src='assets/images/resources/sec-title-icon1.png'
                      alt=''
                    />
                  </div>
                  <span className='sec-title__tagline'>Contact now</span>
                  <h2 className='sec-title__title'>
                    Get in Touch <br />
                    with Us
                  </h2>
                </div>
                <p className='contact-page__left-text'>
                  We are committed to providing our customers with exceptional
                  service while offering our employees the best training.
                </p>
              </div>
            </div>
            {/*End Contact Page Right */}

            {/*Start Contact Page Right */}
            <div className='col-xl-8 col-lg-8'>
              <div className='contact-page__right'>
                <form
                  action='assets/inc/sendemail.php'
                  className='comment-one__form contact-form-validated'
                  novalidate='novalidate'
                >
                  <div className='row'>
                    <div className='col-xl-6 col-lg-6'>
                      <div className='comment-form__input-box'>
                        <input
                          type='text'
                          placeholder='Your name'
                          name='name'
                        />
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-6'>
                      <div className='comment-form__input-box'>
                        <input
                          type='email'
                          placeholder='Email address'
                          name='email'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-xl-6 col-lg-6'>
                      <div className='comment-form__input-box'>
                        <input
                          type='text'
                          placeholder='Phone number'
                          name='phone'
                        />
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-6'>
                      <div className='comment-form__input-box'>
                        <input
                          type='email'
                          placeholder='Subject'
                          name='Subject'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-xl-12 col-lg-12'>
                      <div className='comment-form__input-box'>
                        <textarea
                          name='message'
                          placeholder='Write message'
                        ></textarea>
                      </div>
                      <button
                        type='submit'
                        className='thm-btn comment-form__btn'
                      >
                        Send a message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/*End Contact Page Right */}
          </div>
        </div>
      </section>
      {/*End Contact Page */}
    </>
  );
};

export default Contact;
