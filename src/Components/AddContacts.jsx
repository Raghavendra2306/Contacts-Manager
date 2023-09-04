import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AddContacts = () => {
  const [formData ,setFormData] = useState({})
  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormData({ ...formData, [name]:value })
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData)

    axios.post("http://127.0.0.1:8000/api/addcontacts/",formData)
    .then((response) => {
      console.log('Data received from backend:', response.data);
      navigate('/')
    })
    .catch((error) =>{
      console.log('Error sending data:',error);
    });    
  };

  return (
    <div className='form-style'>
      <form className="awesome-form" onSubmit={handleSubmit} >
      <h2 className="text-center">Add Contacts</h2>
        <div className='form-group'>
          <label for='name'>Name:</label>
          <input 
          className="form-control"
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name' />
        </div>

        <div className='form-group'> 
        <label for='email'>Email Address:</label>
          <input 
          className="form-control"
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email' />
        </div>

        <div className='form-group'>
        <label for='phone_no'>Phone No:</label>
          <input 
          className="form-control"
          type='tel'
          name='phone_no'
          value={formData.phone_no}
          onChange={handleChange}
          placeholder='Enter your phone'
          pattern="[0-9]{10}" />
        </div>

        <button className='btn btn-primary form-button' type='submit'>Submit</button>
      </form>
    </div>
  )
}
