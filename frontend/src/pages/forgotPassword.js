import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const alert = useAlert();

  const forgotSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "/api/v1/users/password/forgot",
        data: { email },
      });
      setStatus(
        "Email sent successfully! Please check spam folder if you can't find email."
      );
    } catch (error) {
      console.log(error);
      setError(error.response.data.err);
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      setError("");
    }
    if (status) {
      alert.success(status);
    }
  }, [alert, error, status]);

  return (
    <div
      style={{ minHeight: "60vh" }}
      className='container d-flex flex-column align-items-center justify-content-center'
    >
      <h1 className='heading-primary mb-4'>Forgot Password</h1>
      <div className='col-xl-8 col-lg-8 w-75'>
        <div className='contact-page__right'>
          <form
            onSubmit={forgotSubmit}
            className='comment-one__form contact-form-validated'
          >
            <div className='row'>
              <div className='col-xl-8 col-lg-12'>
                <div className='comment-form__input-box'>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    placeholder='Your Email'
                    name='email'
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-8 col-lg-12'>
                <button
                  type='submit'
                  className='thm-btn comment-form__btn mb-5'
                >
                  Verify Email
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
