import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContactsContext } from '../Context/Contacts-Context';
import axios from 'axios';

export const EditContacts = () => {
  const { jsonData } = useContext(ContactsContext);
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [contact , setContact ] = useState(jsonData[id])
  
  const handleChange = (e) => {
    const {name, value } = e.target;
    setContact({ ...contact, [name]:value })
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.put(`http://127.0.0.1:8000/api/addcontacts/${contact.id}/`,contact)
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
      <h2 className="text-center">Edit Contacts</h2>
      <div className='form-group'>
      <label for='name'>Name:</label>
          <input 
          type='text'
          name='name'
          className="form-control"
          value={contact.name || ""}
          onChange={handleChange}
          placeholder='Enter your name' />
        </div>

        <div className='form-group'>
        <label for='email'>Email Address:</label>
          <input 
          type='email'
          name='email'
          className="form-control"
          value={contact.email || ""}
          onChange={handleChange}
          placeholder='Enter your email' />
        </div>

        <div className='form-group'>
        <label for='phone_no'>Phone No:</label>
          <input 
          type='tel'
          name='phone_no'
          className="form-control"
          value={contact.phone_no || ""}
          onChange={handleChange}
          placeholder='Enter your phone'
          pattern="[0-9]{10}" />
        </div>

        <button className='btn btn-primary form-button' type='submit'>Submit</button>
      </form>
    </div>
  )
}
