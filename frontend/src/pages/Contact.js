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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7543.620419613668!2d72.846313!3d19.028083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced6d078c7cb%3A0x29775369269ed5c1!2sKrishna%20Kunj%2C%20Senapati%20Bapat%20Marg%2C%20Mahalaxmi%20Sindhi%20Colony%2C%20Matunga%20West%2C%20Mumbai%2C%20Maharashtra%20400016!5e0!3m2!1sen!2sin!4v1644339866594!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
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

      </section>
      {/*End Contact Page */}
    </>
  );
};

export default Contact;
