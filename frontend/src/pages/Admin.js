import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ViewProducts from "../component/Admin/ViewProducts";
import ViewUsers from "../component/Admin/ViewUsers";
import CreateProduct from "../component/Admin/CreateProduct";
import Dashboard from "../component/Admin/Dashboard";
import Queries from "../component/Admin/Queries.js";
import EscrowQueries from "../component/Admin/EscrowQueries.js";
import axios from "axios";

const Admin = ({ user, setUser }) => {
  const history = useHistory();

  useEffect(() => {
    if (user && user.role !== "admin") {
      history.push("/home");
    }
  }, [user, history]);

  const logout = async () => {
    try {
      await axios.get("/api/v1/users/logout");
      setUser();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [component, setComponent] = useState("dashboard");
  return (
    <div
      id='admin-container'
      style={{ minHeight: "50vh" }}
      className='d-flex flex-wrap'
    >
      <div className='flex-shrink-0 p-3 adminside'>
        <a
          href='/'
          className='d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom'
        >
          {/* <svg className='bi me-2' width='30' height='24'>
            <use xlink:href='#bootstrap' />
          </svg> */}

          <h3 className='fw-semibold'> Welcome Admin </h3>
        </a>
        <ul className='list-unstyled ps-0'>
          <li className='dashb' onClick={() => setComponent("dashboard")}>
            <a href='#' className='link-dark rounded'>
              Dashboard
            </a>
          </li>

          <li className='mb-1'>
            <button
              className='btn btn-toggle align-items-center rounded collapsed'
              data-bs-toggle='collapse'
              data-bs-target='#home-collapse'
              aria-expanded='true'
            >
              Products
            </button>
            <div className='collapse show' id='home-collapse'>
              <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
                <li onClick={() => setComponent("products")}>
                  <a href='#' className='link-dark rounded'>
                    View
                  </a>
                </li>
                <li onClick={() => setComponent("create")}>
                  <a href='#' className='link-dark rounded'>
                    Create
                  </a>
                </li>
                {/* <li onClick={() => setComponent("update")}>
                  <a href='#' className='link-dark rounded'>
                    Update
                  </a>
                </li> */}
              </ul>
            </div>
          </li>
          <li className='mb-1'>
            <button
              className='btn btn-toggle align-items-center rounded collapsed'
              data-bs-toggle='collapse'
              data-bs-target='#dashboard-collapse'
              aria-expanded='true'
            >
              Users
            </button>
            <div className='collapse' id='dashboard-collapse'>
              <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
                <li onClick={() => setComponent("users")}>
                  <a href='#' className='link-dark rounded'>
                    View
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className='mb-1'>
            <button
              className='btn btn-toggle align-items-center rounded collapsed'
              data-bs-toggle='collapse'
              data-bs-target='#queries-collapse'
              aria-expanded='true'
            >
              Queries
            </button>
            <div className='collapse' id='queries-collapse'>
              <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
                <li onClick={() => setComponent("queries")}>
                  <a href='#' className='link-dark rounded'>
                    View
                  </a>
                </li>
                <li onClick={() => setComponent("escrow")}>
                  <a href='#' className='link-dark rounded'>
                    Escrow Queries
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className='border-top my-3'></li>
          <li className='mb-1'>
            <button
              className='btn btn-toggle align-items-center rounded collapsed'
              data-bs-toggle='collapse'
              data-bs-target='#account-collapse'
              aria-expanded='false'
            >
              Account
            </button>
            <div className='collapse' id='account-collapse'>
              <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div
        style={{ width: "80%" }}
        className='d-flex align-items-center flex-column '
      >
        <img className='admlogo' src='assets/images/resources/logo-1.png' />
        <br />
        {component === "dashboard" && <Dashboard setComponent={setComponent} />}
        {component === "products" && <ViewProducts />}
        {component === "create" && <CreateProduct />}
        {component === "users" && <ViewUsers />}
        {component === "queries" && <Queries />}
        {component === "escrow" && <EscrowQueries />}
      </div>
    </div>
  );
};

export default Admin;
