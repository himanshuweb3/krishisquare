import React from "react";

const Contact = () => {
  return (
    <>
      {/*Page Header Start */}
      <section
        className='page-header clearfix'
        style={{
          backgroundImage: "url(https://escrowindia.globalgroominghealthcare.com/assets/images/about/03.png)",
        }}
      >
        <div className='container'>
          <div className='page-header__inner text-center clearfix'>
           
            <h2>Contact Us</h2>
          </div>
        </div>
      </section>
      {/*Page Header End */}

      {/*Start Contact Page */}
      <section className='contact-page'>
        <div className='container'>
          
          <div className='row text-center'>
            <h3>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</h3>

            </div>
            
            <div className='row contactdet'>
              
              <div className='col-xl-4 col-lg-4'>
              <div class="icon">
                  <span class="icon-map"></span>
              </div>
              <div class="title">
                  <p>Krishna Kunj, Senapati Bapat Marg, Mahalaxmi Sindhi Colony, Matunga West, Mumbai, Maharashtra 400016</p>
              </div>
              </div>
              
            <div className='col-xl-4 col-lg-4'>
               <div class="icon">
                  <span class="icon-phone-call-2"></span>
              </div>
              <div class="title">
                  <p>+91-9619137986</p>
              </div>
              </div>
            
            <div className='col-xl-4 col-lg-4'>
              <div class="icon">
                  <span class="icon-envelope"></span>
              </div>
              <div class="title">
                  <p>info@krishisquare.com</p>
              </div>
              </div>
            
              </div>

          <div className='row'>
            {/*Start Contact Page Left */}
            <div className='col-xl-6 col-lg-6'>
              <div className='contact-page__left'>
              <iframe
                src="https://www.google.com/maps/place/144,+Senapati+Bapat+Marg,+Mahalaxmi+Sindhi+Colony,+Matunga+West,+Mumbai,+Maharashtra+400016/@19.0285241,72.8441096,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7ced6c5e64c0f:0xf9d8cb93831fe9dd!8m2!3d19.028519!4d72.8462983"
                class="contact-page-google-map__one" allowfullscreen></iframe>
            </div>
            {/*End Contact Page Right */}

            {/*Start Contact Page Right */}
            <div className='col-xl-6 col-lg-6'>
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
</div>
      </section>
      {/*End Contact Page */}
    </>
  );
};

export default Contact;
