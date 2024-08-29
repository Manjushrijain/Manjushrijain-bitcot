import React from 'react';
import viewicon from '../assets/view.png';
import editicon from '../assets/edit.jpg';
import deleteicon from '../assets/Delete.jpg';
import manicon from '../assets/man.jpg';
import './App.css';



const ContactsView = ({ contacts, onEdit, onView, onDelete }) => {
  return (
    <div>
    
      <ul className="contacts-list">

        {contacts.map((contact,index)=> (
          <li key={contact.id}>
           
            {index+1}. <img src={manicon} alt="man" className="man-icon" />{contact.name}  ({contact.mobile})

            <button className="view-button"onClick={() => onView(contact)}><img src={viewicon} alt ='view' ></img></button>
            <button  className="edit-button"onClick={() => onEdit(contact)}><img src={editicon} alt='edit'></img></button>
            <button className="delete-button" onClick={() => onDelete(contact.id)}><img src={deleteicon} alt='delete' ></img></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsView;
