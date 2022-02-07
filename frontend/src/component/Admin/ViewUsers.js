import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

const ViewUsers = () => {
  const [users, setUsers] = useState();
  const [userToDelete, setUserToDelete] = useState();
  const alert = useAlert();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: "/api/v1/users/admin",
        });
        setUsers(data.users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const deleteUser = async () => {
    document.querySelector(".close").click();
    document.querySelector(`[data-id='${userToDelete}']`).remove();
    try {
      const { data } = await axios({
        method: "delete",
        url: `/api/v1/users/${userToDelete}`,
      });
      alert.success("User Deleted");
    } catch (error) {
      console.log(error);
      alert.error(error);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {!users ? (
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      ) : (
        <table className='table table-bordered shadow ml-3'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Role</th>
              <th scope='col'>Identity</th>
              <th scope='col'>Mobile</th>
              <th scope='col'>Town / City</th>
              <th scope='col'>Address</th>
              <th scope='col'>Pin Code</th>
              <th scope='col'>GST No.</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr data-id={user._id} key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.identity}</td>
                <td>{user.mobile}</td>
                <td>{user.town}</td>
                <td>{user.address}</td>
                <td>{user.pin}</td>
                <td>{user.GST}</td>
                <td>
                  {" "}
                  <button
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                    className='nav-link text-danger'
                    onClick={() => setUserToDelete(user._id)}
                  >
                    Delete
                  </button>
                  <div
                    className='modal fade'
                    id='exampleModal'
                    tabindex='-1'
                    role='dialog'
                    aria-labelledby='exampleModalLabel'
                    aria-hidden='true'
                  >
                    <div className='modal-dialog' role='document'>
                      <div className='modal-content'>
                        <div className='modal-header'>
                          <h5 className='modal-title' id='exampleModalLabel'>
                            Delete user
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
                          Are you sure you want to delete this user?
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
                            onClick={() => deleteUser(user._id)}
                            type='button'
                            className='btn btn-primary'
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewUsers;
