import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useHistory, useLocation } from "react-router-dom";

const ResetPassword = () => {
  const history = useHistory();
  const alert = useAlert();
  const location = useLocation();

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const resetSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "put",
        url: `/api/v1/users/password/reset/${token}`,
        data: { password, confirmPassword: passwordConfirm },
      });
      setStatus("Password Reset Successful!");
    } catch (error) {
      console.log(error);
      setError(error.response.data.err);
    }
  };

  useEffect(() => {
    setToken(location.pathname.split("/reset/")[1]);
  }, [location]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      setError("");
    }
    if (status) {
      alert.success(status);
      history.push("/login");
    }
  }, [alert, error, status, history]);

  return (
    <div
      style={{ minHeight: "60vh" }}
      className='container d-flex flex-column align-items-center justify-content-center'
    >
      <h1 className='heading-primary mb-4'>Reset Password</h1>
      <div className='col-xl-8 col-lg-8 w-75'>
        <div className='contact-page__right'>
          <form
            onSubmit={resetSubmit}
            className='comment-one__form contact-form-validated'
          >
            <div className='row'>
              <div className='col-xl-8 col-lg-12'>
                <div className='comment-form__input-box'>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='Set Password'
                    name='email'
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-8 col-lg-12'>
                <div className='comment-form__input-box'>
                  <input
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    type='password'
                    placeholder='Confirm Password'
                    name='confirm password'
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
                  Change Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
