import React from 'react';

const ContactDetails = ({ contact, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Contact Details</h2>
        <div className="contact-details-box">
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Mobile:</strong> {contact.mobile}</p>
          <p><strong>Email:</strong> {contact.email}</p>
        </div>
       
      </div>
    </div>
  );
};

export default ContactDetails;
