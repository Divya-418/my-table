import React, { useState } from "react";
import {nanoid} from 'nanoid';
import './App.css';
import data from "./data.json"
import ReadOnlyRow from "./components/ReadOnlyRow";
import WritableRow from "./components/WritableRow";

const App = () => {
  const [contacts, setContacts]=useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  });

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  });
  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event)=>{
    event.preventDefault();

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName]=fieldValue;

    setAddFormData(newFormData);
  }

  const handleEditFormChange = (event)=>{
    event.preventDefault();
   

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName]=fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event)=>{
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    };

    const newContacts = [...contacts, newContact]
    setContacts(newContacts);
    // Reset Fun
    event.target.reset();
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email
    };


    const newContacts = [...contacts]

    const index = contacts.findIndex((eachContact)=>eachContact.id === editContactId);

    newContacts[index]=editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, eachContact)=>{
    event.preventDefault();
    setEditContactId(eachContact.id);

    const formValues = {
      fullName: eachContact.fullName,
      address: eachContact.address,
      phoneNumber: eachContact.phoneNumber,
      email: eachContact.email,
    }

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index=contacts.findIndex((eachContact)=>eachContact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return <div className="app-container">

<h2>Add a Contact</h2>
    <form id="input-form" onSubmit={handleAddFormSubmit}>
        <div id="form-container">
        <label for="name">Name: </label>
        <input type="text" id="name" name="fullName" placeholder="Enter a name.." onChange={handleAddFormChange} required/>
      
        
        <label for="address">Address: </label>
        <input type="text" id="address" name="address" placeholder="Enter an address.." onChange={handleAddFormChange} required/>

        <label for="phone">Phone: </label>
        <input type="text" id="phone" name="phoneNumber" placeholder="Enter a phone number.." onChange={handleAddFormChange} required/>

        <label for="eamil">Email: </label>
        <input type="email" id="email" name="email" placeholder="Enter an email.." onChange={handleAddFormChange} required/>
        
        <div>
        <button type="submit">Add</button>
        </div>
        </div>
    </form>

    <hr/>

    <h1>Contacts Table</h1>
    <form onSubmit={handleEditFormSubmit}>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Operations</th> 
        </tr>
      </thead>
      <tbody>
        {contacts.map((eachContact)=>(
          <>
           {editContactId === eachContact.id ? <WritableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/> : <ReadOnlyRow eachContact={eachContact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>}
          </>
        ))} 
      </tbody>
    </table>
    </form> 
 </div>
}

export default App;
