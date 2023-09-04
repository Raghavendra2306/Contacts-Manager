import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import user from '../images/user.png'

export const ContactsCard = (props) => {
  const navigate = useNavigate();
  const contact = props.contact;
  const index = props.index;

  console.log(contact.index);

  const handleDelete = (e) => {
    e.preventDefault();

    axios.delete(`http://127.0.0.1:8000/api/addcontacts/${contact.id}/`)
    .then((response) => {
      console.log('Data received from backend:', response.data);
      handleReload();
    })
    .catch((error) =>{
      console.log('Error sending data:',error);
    });
  }

  const handleReload = () => {
    window.location.reload();
  }
  return (
    <div className='col-md-3 m-5'>
        <div className='card card-style' key={contact.id}>
           <div className='card-header'>
              <h3>{contact.name}</h3> 
            </div>
            <div className='card-body'>
              <div className = "user-img" style={{backgroundImage:`url(${user})`}}></div>
              <p className='mt-4'>{contact.email}</p>
              <p>{contact.phone_no}</p>
            </div>
            <div className='card-footer'>
              <button className = 'btn btn-danger float-end m-1' onClick={handleDelete}><i class="fa fa-trash" aria-hidden="true"></i>Delete</button>
              <button className = 'btn btn-info float-end m-1' onClick={() => {navigate("/editcontacts/" + index)}} ><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Edit</button>
            </div>
        </div>
  </div>
  )
}
