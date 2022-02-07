import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

const UpdateProduct = () => {
  const alert = useAlert();
  const [name, setName] = useState();
  const [ID, setID] = useState("");
  const [avatar, setAvatar] = useState("");
  const [result, setResult] = useState(false);
  const [error, setError] = useState("");

  const updateProd = async (e) => {
    e.preventDefault();

    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const myForm = new FormData();

      if (avatar) {
        myForm.set("photo", avatar);
      }
      if (name) {
        myForm.set("name", name);
      }

      await axios.post(`/api/v1/products/update/${ID}`, myForm, config);

      setResult(true);
    } catch (error) {
      setError(error.response.data.err);
    }
  };

  useEffect(() => {
    if (result) {
      alert.success("Product Updated");
    }
    if (error) {
      alert.error(error);
      setError("");
    }
  }, [result, alert, error]);

  return (
    <div style={{ width: "50%" }}>
      <h1 className='heading-primary text-center mb-4'>Update A Product</h1>
      <form onSubmit={updateProd}>
        <div className='form-group mb-3'>
          <label htmlFor='exampleInputEmail1'>Product ID</label>
          <input
            required
            type='text'
            className='form-control'
            onChange={(e) => setID(e.target.value)}
            id='product-name'
            aria-describedby='emailHelp'
            placeholder='Enter Product ID'
          />
        </div>
        <div className='form-group mb-3'>
          <label htmlFor='exampleInputEmail1'>Product Name</label>
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
          <label htmlFor='exampleFormControlFile1'>Choose Product Image</label>
          <input
            style={{ display: "block" }}
            type='file'
            className='form-control-file'
            id='exampleFormControlFile1'
            accept='image/*'
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
