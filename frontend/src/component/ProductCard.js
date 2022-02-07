import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import axios from "axios";

const ProductCard = ({ img, text, user }) => {
  const history = useHistory();
  const btn = useRef();
  const alert = useAlert();

  const showModal = (e) => {
    e.preventDefault();
    if (!loggedUser) {
      history.push("/login");
    } else {
      btn.current.setAttribute("data-bs-toggle", "modal");
      btn.current.setAttribute("data-bs-target", "#exampleModalCenter");
      btn.current.click();
    }
  };

  const [loggedUser, setLoggedUser] = useState();
  const [name, setName] = useState();
  const [query, setQuery] = useState();
  const [number, setNumber] = useState();
  const [querySubmitted, setQuerySubmitted] = useState(false);

  const submitQuery = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "/api/v1/products/query",
        data: { name, query, number, product: text },
      });
      setQuerySubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      setLoggedUser(user);
    }
    if (querySubmitted) {
      alert.success("Query Submitted");
      setQuerySubmitted(false);
    }
  }, [user, querySubmitted, alert]);

  return (
    <>
      <div
        data-product={text}
        className='shadow card m-4'
        style={{ width: "18rem" }}
      >
        <img className='card-img-top' src={img} alt='Card cap' />
        <div className='card-footer  text-center border-info'>
          <p className='card-text'>{text}</p>
          <button
            onClick={showModal}
            type='button'
            className='btn btn-primary mt-2'
            ref={btn}
          >
            Request for quote
          </button>
        </div>

        <div
          className='modal fade'
          id='exampleModalCenter'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='exampleModalCenterTitle'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLongTitle'>
                  Buy & Sell your commodity Get The Best Price!
                </h5>
                <button
                  type='button'
                  className='close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <form>
                  <div className='form-group row mb-3'>
                    <label htmlFor='name' className='col-sm-2 col-form-label'>
                      Name
                    </label>
                    <div className='col-sm-10'>
                      <input
                        type='text'
                        className='form-control'
                        id='name'
                        placeholder='Your Name'
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='form-group row mb-3'>
                    <label
                      htmlFor='inputPassword'
                      className='col-sm-2 col-form-label'
                    >
                      Query
                    </label>
                    <div className='col-sm-10'>
                      <input
                        type='text'
                        className='form-control'
                        id='inputPassword'
                        placeholder='Your Query'
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='form-group row mb-3'>
                    <label htmlFor='mobile' className='col-sm-2 col-form-label'>
                      Phone
                    </label>
                    <div className='col-sm-10'>
                      <input
                        type='number'
                        className='form-control'
                        id='mobile'
                        placeholder='Your Mobile Number'
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button
                  onClick={submitQuery}
                  type='button'
                  className='btn btn-primary'
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
