import React, { createContext,useState } from 'react';
import axios from 'axios';

export const ContactsContext = createContext(null);

export const ContactsContextProvider = (props) => {

  const [jsonData, setJsonData] = useState([]);

  const fetchContactDetails = () => {
    axios
    .get("http://127.0.0.1:8000/api/contacts/")
    .then(res => setJsonData( res.data.sort((a,b) => a.id - b.id) ))
    .catch(err => console.log(err))
  }

  const contextObject = { jsonData , fetchContactDetails }
  return (
    <ContactsContext.Provider value = {contextObject} >
      {props.children}
    </ContactsContext.Provider>
  )
}
