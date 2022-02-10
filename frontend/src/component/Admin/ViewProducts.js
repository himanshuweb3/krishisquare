import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

const ViewProducts = () => {
  const [products, setProducts] = useState();
  const [prodToDelete, setProdToDelete] = useState();

  const [name, setName] = useState();
  const [avatar, setAvatar] = useState("");

  const alert = useAlert();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: "/api/v1/products",
        });
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const deleteProduct = async () => {
    document.querySelector(".close").click();
    document.querySelector(`[data-id='${prodToDelete}']`).remove();

    try {
      const { data } = await axios({
        method: "delete",
        url: "/api/v1/products",
        data: {
          id: prodToDelete,
        },
      });
      alert.success("Product Deleted");
    } catch (error) {
      console.log(error);
      alert.error(error);
    }
  };

  const updateProduct = async () => {
    document.querySelector(".close.update").click();
    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const myForm = new FormData();

      if (avatar) {
        myForm.set("photo", avatar);
      }
      if (name) {
        myForm.set("name", name);
      }
      await axios.post(
        `/api/v1/products/update/${prodToDelete}`,
        myForm,
        config
      );
      alert.success("Product Updated");
    } catch (error) {
      console.log(error);
      alert.error(error);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {!products ? (
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      ) : (
        <table className='table table-bordered shadow ml-3'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>Product Name</th>
              <th scope='col'>Product Image</th>
              
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr data-id={product._id} key={product._id}>
                <th scope='row'>{product.name}</th>
                <td>
                  <img src={`${product.photo.url}`} alt='' />{" "}
                </td>
                
                <td>
                  {" "}
                  <button
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                    className='nav-link text-danger'
                    onClick={() => setProdToDelete(product._id)}
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
                            Delete product
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
                          Are you sure you want to delete this product?
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
                            onClick={() => deleteProduct()}
                            type='button'
                            className='btn btn-primary'
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    data-bs-toggle='modal'
                    data-bs-target='#updateModal'
                    className='nav-link text-info'
                    onClick={() => setProdToDelete(product._id)}
                  >
                    Edit
                  </button>
                  <div
                    className='modal fade'
                    id='updateModal'
                    tabindex='-1'
                    role='dialog'
                    aria-labelledby='exampleModalLabel'
                    aria-hidden='true'
                  >
                    <div className='modal-dialog' role='document'>
                      <div className='modal-content'>
                        <div className='modal-header'>
                          <h5 className='modal-title' id='exampleModalLabel'>
                            Update product
                          </h5>
                          <button
                            type='button'
                            className='close update'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                          >
                            <span aria-hidden='true'>&times;</span>
                          </button>
                        </div>
                        <div className='modal-body'>
                          <form>
                            <div className='form-group mb-3'>
                              <label htmlFor='exampleInputEmail1'>
                                Product Name
                              </label>
                              <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setName(e.target.value)}
                                id='product-name'
                                aria-describedby='emailHelp'
                                placeholder='Enter Product Name'
                              />
                            </div>
                            <div className='form-group mb-4'>
                              <label htmlFor='exampleFormControlFile1'>
                                Choose Product Image
                              </label>
                              <input
                                style={{ display: "block" }}
                                type='file'
                                className='form-control-file'
                                id='exampleFormControlFile1'
                                accept='image/*'
                                onChange={(e) => setAvatar(e.target.files[0])}
                              />
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
                            onClick={() => updateProduct()}
                            type='button'
                            className='btn btn-primary'
                          >
                            Update
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

export default ViewProducts;
