import React, { useState } from 'react';

const EditContact = ({ contact, onClose, onEdit }) => {
  const [name, setName] = useState(contact.name);
  const [mobile, setMobile] = useState(contact.mobile);
  const [email, setEmail] = useState(contact.email);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && mobile && email) {
      onEdit({ ...contact, name, mobile, email });
      onClose();
    } else {
      alert('All fields are required');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Edit Contact</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Mobile:
            <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <div className="button-group">
            <button type="submit" className="update-button">Update</button>
            <button type="button" onClick={onClose} className="reset-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
