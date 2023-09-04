import React,{ useContext, useEffect } from 'react';
import { ContactsCard } from './ContactsCard';
import { ContactsContext } from '../Context/Contacts-Context';
import { Link } from 'react-router-dom';

export const ContactList = () => {
  const { jsonData , fetchContactDetails } = useContext(ContactsContext)

  useEffect(() => {
    fetchContactDetails();
  },[])

 return (
  <div>
    <Link to='/addcontacts' ><button className='btn btn-success mt-3 me-2 float-end'><i class="fa fa-plus" aria-hidden="true"></i>Add Contacts</button></Link>
    <div className='row'>
        {jsonData.map((contact , idx) => {
            return <ContactsCard index={idx} contact={contact} />
        })}
    </div>
  </div>
  )
}
