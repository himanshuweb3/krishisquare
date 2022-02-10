import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const alert = useAlert();

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "/api/v1/users/login",
        data: { email, password },
      });
      setLoggedIn(true);
      setUser(data.user);
    } catch (error) {
      console.log(error);
      setError(error.response.data.err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (error) {
      alert.error(error);
      setError("");
    }
    if (loggedIn) {
      alert.success("Logged In");
      history.push("/");
    }
  }, [alert, error, loggedIn, history]);

  return (
    <div
      style={{ minHeight: "60vh" }}
      className='container d-flex flex-column align-items-center justify-content-center'
    >
      <h1 className='heading-primary mb-4'>Login</h1>
      <div className='col-xl-8 col-lg-8 w-75'>
        <div className='contact-page__right'>
          <form
            onSubmit={loginSubmit}
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
                <div className='comment-form__input-box'>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='Password'
                    name='password'
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
                  Login
                </button>
              </div>
            </div>
          </form>
<div className='notreg'>Not Registered ? <a href="signup">click here</a> for *Registration*</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
