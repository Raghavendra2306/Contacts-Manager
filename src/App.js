import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactList } from './Components/ContactList';
import { AddContacts } from './Components/AddContacts';
import { ContactsContextProvider } from './Context/Contacts-Context';
import { EditContacts } from './Components/EditContacts';
import { Header } from './pages/header';
import { Footer } from './pages/footer';

function App() {
  return (
    <div className="App">
      <ContactsContextProvider>
        <Router>
          < Header />
          <Routes>
            <Route path='/' element={<ContactList/>} />
            <Route path='/addcontacts' element={<AddContacts/>} />
            <Route path='/editcontacts/:id' element={<EditContacts />} />
          </Routes>
          < Footer />
        </Router>
      </ContactsContextProvider>
    </div>
  );
}

export default App;
