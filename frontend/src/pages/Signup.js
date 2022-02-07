import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [identity, setIdentity] = useState("");
  const [mobile, setMobile] = useState("");
  const [town, setTown] = useState("");
  const [GST, setGST] = useState("");
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const alert = useAlert();

  const signUpSubmit = async (e) => {
    e.preventDefault();
    try {
      //   const config = { headers: { "Content-Type:": "application/json" } };
      const { data } = await axios({
        method: "post",
        url: "/api/v1/users/signup",
        data: {
          name,
          email,
          password,
          identity,
          mobile,
          town,
          GST,
          address,
          pin,
        },
      });
      setSignedUp(true);
      setUser(data.user);
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
    if (signedUp) {
      alert.success("Signed Up");
      history.push("/home");
    }
  }, [alert, error, history, signedUp]);

  return (
    <div
      style={{ minHeight: "60vh" }}
      className='container d-flex flex-column align-items-center justify-content-center'
    >
      <h1 className='heading-primary mb-4'>Sign Up</h1>
      <div className='col-xl-8 col-lg-8  w-75'>
        <div className='contact-page__right'>
          <form
            onSubmit={signUpSubmit}
            className='comment-one__form contact-form-validated'
          >
            <div className='d-flex mb-4  justify-content-between flex-wrap'>
              <span>Identify Yourself:</span>
              <div className='form-check d-flex justify-content-center align-items-center'>
                <input
                  onClick={() => setIdentity("Farmer")}
                  className='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='farmer'
                />
                <label className='form-check-label  mr-4' htmlFor='farmer'>
                  Farmer
                </label>
              </div>
              <div className='form-check d-flex align-items-center'>
                <input
                  onClick={() => setIdentity("Farmer Produce Org")}
                  className='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='farmerProduce'
                />
                <label className='form-check-label' htmlFor='farmerProduce'>
                  Farmer Produce Org
                </label>
              </div>
              <div className='form-check d-flex align-items-center'>
                <input
                  onClick={() => setIdentity("AgriPreneur")}
                  className='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='AgriPreneur'
                />
                <label className='form-check-label' htmlFor='AgriPreneur'>
                  AgriPreneur
                </label>
              </div>
              <div className='form-check d-flex align-items-center'>
                <input
                  onClick={() => setIdentity("Trader")}
                  className='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='trader'
                />
                <label className='form-check-label' htmlFor='trader'>
                  Trader
                </label>
              </div>
              <div className='form-check d-flex align-items-center'>
                <input
                  onClick={() => setIdentity("Company")}
                  className='form-check-input'
                  type='radio'
                  name='flexRadioDefault'
                  id='company'
                />
                <label className='form-check-label' htmlFor='company'>
                  Company
                </label>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-12 col-lg-12'>
                <div className='comment-form__input-box'>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    placeholder='Full name / Firm name'
                    name='name'
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-12 col-lg-12'>
                <div className='comment-form__input-box'>
                  <input
                    onChange={(e) => setMobile(e.target.value)}
                    type='number'
                    placeholder='Mobile Number'
                    name='number'
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-12 col-lg-12'>
                <div className='comment-form__input-box'>
                  <input
                    onChange={(e) => setTown(e.target.value)}
                    type='text'
                    placeholder='Town / City Name'
                    name='town'
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-12 col-lg-12'>
                <div className='comment-form__input-box'>
                  <input
                    onChange={(e) => setGST(e.target.value)}
                    type='text'
                    placeholder='GST NO'
                    name='gst'
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-12 col-lg-12'>
                <div className='comment-form__input-box'>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    type='text'
                    placeholder='Address'
                    name='address'
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-12 col-lg-12'>
                <div className='comment-form__input-box'>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    placeholder='Email address'
                    name='email'
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-12 col-lg-12'>
                <div className='comment-form__input-box'>
                  <input
                    onChange={(e) => setPin(e.target.value)}
                    type='number'
                    placeholder='Pin Code'
                    name='pin'
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-12 col-lg-12'>
                <div className='comment-form__input-box'>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='Create Password'
                    name='password'
                  />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-12 col-lg-12'>
                <button
                  type='submit'
                  className='thm-btn comment-form__btn mb-5'
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
