import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

const Queries = () => {
  const [queries, setQueries] = useState();
  const [error, setError] = useState("");
  const [queryToDelete, setQueryToDelete] = useState();
  const alert = useAlert();

  const deleteQuery = async () => {
    document.querySelector(".close").click();
    document.querySelector(`[data-id='${queryToDelete}']`).remove();

    try {
      const { data } = await axios({
        method: "delete",
        url: `/api/v1/products/query/${queryToDelete}`,
        data: {
          id: queryToDelete,
        },
      });
      alert.success("Query Deleted");
    } catch (error) {
      console.log(error);
      alert.error(error);
    }
  };

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: "/api/v1/products/queries",
        });
        setQueries(data.queries);
      } catch (error) {
        setError(error.response.data.err);
      }
    };

    fetchQueries();
  }, []);

  useEffect(() => {
    if (error) {
      alert.error(error);
      setError("");
      setQueries([]);
    }
  }, [error, alert]);

  return (
    <div style={{ width: "100%" }}>
      {!queries ? (
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      ) : (
        <table className='table table-bordered shadow ml-3'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>Product</th>
              <th scope='col'>Name</th>
        <th scope='col'>Phone</th>
              <th scope='col'>Query</th>
              
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((query, i) => (
              <tr data-id={query._id} key={query._id}>
                <th scope='row'>{query.product}</th>
                <td>{query.name}</td>
                
                <td>{query.number}</td>
<td>{query.query}</td>
                <td>
                  {" "}
                  <button
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                    className='nav-link text-danger'
                    onClick={() => setQueryToDelete(query._id)}
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
                            Delete query
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
                          Are you sure you want to delete this query?
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
                            onClick={() => deleteQuery()}
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

export default Queries;
