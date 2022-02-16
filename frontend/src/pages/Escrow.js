import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

const Escrow = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [querySubmitted, setQuerySubmitted] = useState(false);
  const alert = useAlert();

  const submitQuery = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "/api/v1/products/escrow/query",
        data: { name, email, number },
      });
      setQuerySubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (querySubmitted) {
      alert.success("Query Submitted");
      setQuerySubmitted(false);
    }
  }, [querySubmitted, alert]);

  return (
    <>
      {/* {/*Page Header Start*/}
      <section
        className='page-header clearfix'
        style={{
          backgroundImage:
            "url(https://escrowindia.globalgroominghealthcare.com/assets/images/about/03.png)",
        }}
      >
        <div className='container'>
          <div className='page-header__inner text-center clearfix'>
            <h2>Escrow</h2>
          </div>
        </div>
      </section>
      {/* Page Header End*/}

      <div className='container aboutintro'>
        <div className='row'>
          <div className='col-xl-12 col-lg-12 text-center'>
            <h3>How Escrow Works</h3>
          </div>
        </div>
      </div>

      {/*About Three Start*/}
      <section className='about-three'>
        {/* /.about-three__shape */}
        <div className='container'>
          <div className='row'>
            {/*Start About Three Content Box*/}
            <div className='col-xl-12 col-lg-12'>
              <div className='about-three__content-box escrow'>
                <h3>Protect your payments with a fully digital escrow </h3>
                <br />
                <p>
                  Buyer's money is securely held and released to the seller post
                  quality check:
                </p>

                <p>
                  <img src='https://escrowindia.globalgroominghealthcare.com/assets/escrow1.png' />{" "}
                  Got a great deal from a new buyer, but don't trust him with
                  payments ?
                </p>

                <p>
                  <img src='https://escrowindia.globalgroominghealthcare.com/assets/escrow2.png' />{" "}
                  Found a good supplier at right price, but don't trust with the
                  quality ?
                </p>
                <br />
                <h4>
                  <img src='https://escrowindia.globalgroominghealthcare.com/assets/buyer.jpg' />
                  Buyer
                </h4>
                <table>
                  <tr>
                    <td>
                      <img src='https://escrowindia.globalgroominghealthcare.com/assets/images/bg-images/chk.png' />{" "}
                      Protect your transactions against delays and cancellations
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src='https://escrowindia.globalgroominghealthcare.com/assets/images/bg-images/chk.png' />{" "}
                      No more unsecured advance payments
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src='https://escrowindia.globalgroominghealthcare.com/assets/images/bg-images/chk.png' />{" "}
                      Keep your money secure until goods are QC at receipt
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src='https://escrowindia.globalgroominghealthcare.com/assets/images/bg-images/chk.png' />{" "}
                      Access new sellers and markets to grow your business
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src='https://escrowindia.globalgroominghealthcare.com/assets/images/bg-images/chk.png' />{" "}
                      Fully verify seller's identity
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src='https://escrowindia.globalgroominghealthcare.com/assets/images/bg-images/chk.png' />{" "}
                      Get your money back if the goods fail the inspection
                    </td>
                  </tr>
                </table>
                <br />
                <h4>
                  <img src='https://escrowindia.globalgroominghealthcare.com/assets/seller.jpg' />
                  Seller
                </h4>
                <table>
                  <tr>
                    <td>
                      <img src='https://escrowindia.globalgroominghealthcare.com/assets/images/bg-images/chk.png' />{" "}
                      Get paid on time and in full orders
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src='https://escrowindia.globalgroominghealthcare.com/assets/images/bg-images/chk.png' />{" "}
                      No need to ship goods until payment is ensued
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src='https://escrowindia.globalgroominghealthcare.com/assets/images/bg-images/chk.png' />{" "}
                      Sell more by building trust with buyers
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src='https://escrowindia.globalgroominghealthcare.com/assets/images/bg-images/chk.png' />{" "}
                      Secure full payment amount in an escrow before you ship
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src='https://escrowindia.globalgroominghealthcare.com/assets/images/bg-images/chk.png' />{" "}
                      Build your reputation as a reliable seller
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src='https://escrowindia.globalgroominghealthcare.com/assets/images/bg-images/chk.png' />{" "}
                      Work with verified buyers, eliminating post shipment
                      hassles
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            {/*End About Three Content Box*/}
          </div>
        </div>
      </section>
      {/*About Three End*/}

      <div className='container howitworks '>
        <div className='text-center clearfix'>
          <h2>How Escrow Works</h2>
        </div>

        <div className='row justify-content-center'>
          <div className='col-xl-4 col-md-6 col-12'>
            <div className='lab-item'>
              <div className='lab-inner'>
                <div className='lab-thumb'>
                  <img src='assets\images\services\01.png' alt='lab-thumb' />
                </div>
                <div className='lab-content'>
                  <button className='lab-btn btn-sm text-white'>Step 1</button>
                  <br />
                  <br />
                  <a href='/escrow'>
                    <h5>Send Agreement</h5>
                  </a>
                  <p>
                    Provide transaction details and send an agreement with terms
                    and conditions to buyer and seller
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-xl-4 col-md-6 col-12'>
            <div className='lab-item'>
              <div className='lab-inner'>
                <div className='lab-thumb'>
                  <img src='assets\images\services\02.png' alt='lab-thumb' />
                </div>
                <div className='lab-content'>
                  <button className='lab-btn btn-sm text-white'>Step 2</button>
                  <br />
                  <br />
                  <a href='/escrow'>
                    <h5>Accept Terms and Conditions</h5>
                  </a>
                  <p>
                    Buyer and seller to agree on terms and conditions on product
                    quantity, price, quality, shipping information and payment
                    release condition
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-xl-4 col-md-6 col-12'>
            <div className='lab-item'>
              <div className='lab-inner'>
                <div className='lab-thumb'>
                  <img src='assets\images\services\03.png' alt='lab-thumb' />
                </div>
                <div className='lab-content'>
                  <button className='lab-btn btn-sm text-white'>Step 3</button>
                  <br />
                  <br />
                  <a href='/escrow'>
                    <h5>Transfer Payment to Escrow</h5>
                  </a>
                  <p>
                    Buyer to transfer the invoice amount to escrow account,
                    where funds will be parked until the order is fulfilled
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-xl-4 col-md-6 col-12'>
            <div className='lab-item'>
              <div className='lab-inner'>
                <div className='lab-thumb'>
                  <img src='assets\images\services\04.png' alt='lab-thumb' />
                </div>
                <div className='lab-content'>
                  <button className='lab-btn btn-sm text-white'>Step 4</button>
                  <br />
                  <br />
                  <a href='/escrow'>
                    <h5>Provide Document Proof</h5>
                  </a>
                  <p>
                    Seller to provide proof of shipment for goods Inspection
                    period
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-xl-4 col-md-6 col-12'>
            <div className='lab-item'>
              <div className='lab-inner'>
                <div className='lab-thumb'>
                  <img src='assets\images\services\05.png' alt='lab-thumb' />
                </div>
                <div className='lab-content'>
                  <button className='lab-btn btn-sm text-white'>Step 5</button>
                  <br />
                  <br />
                  <a href='/escrow'>
                    <h5>Inspection Period</h5>
                  </a>
                  <p>
                    On receipt of goods, buyer gets a inspection period during
                    which they give a go ahead if the quality is fine else sent
                    back to seller
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-xl-4 col-md-6 col-12'>
            <div className='lab-item'>
              <div className='lab-inner'>
                <div className='lab-thumb'>
                  <img src='assets\images\services\06.png' alt='lab-thumb' />
                </div>
                <div className='lab-content'>
                  <button className='lab-btn btn-sm text-white'>Step 6</button>
                  <br />
                  <br />
                  <a href='/escrow'>
                    <h5>Document verification</h5>
                  </a>
                  <p>
                    Documents to be checked against agreement for payment
                    release if the quality is fine by buyer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-xl-4 col-md-6 col-12'>
            <div className='lab-item'>
              <div className='lab-inner'>
                <div className='lab-thumb'>
                  <img src='assets\images\services\01.png' alt='lab-thumb' />
                </div>
                <div className='lab-content'>
                  <button className='lab-btn btn-sm text-white'>Step 7</button>
                  <br />
                  <br />
                  <a href='/escrow'>
                    <h5>Payment Release</h5>
                  </a>
                  <p>
                    Once documents are verified, payment will be released and
                    seller will receive funds within 48 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <button
          type='button'
          data-bs-toggle='modal'
          data-bs-target='#exampleModalCenter'
          className='btn btn-warning '
        >
          Create Your Escrow Account
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
                Need KYC Documents - Bank Details, PAN Card, Aadhar Card
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
                <div className='form-group row mb-3'>
                  <label
                    htmlFor='inputPassword'
                    className='col-sm-2 col-form-label'
                  >
                    Email
                  </label>
                  <div className='col-sm-10'>
                    <input
                      type='email'
                      className='form-control'
                      id='inputPassword'
                      placeholder='Your Email'
                      onChange={(e) => setEmail(e.target.value)}
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
    </>
  );
};

export default Escrow;
