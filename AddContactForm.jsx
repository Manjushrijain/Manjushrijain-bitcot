import React, { useState } from 'react';

const AddContact = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && mobile && email) {
      onAdd({ name, mobile, email });
      onClose();
    } else {
      alert('All fields are required');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Add Contact</h2>
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
          <div className="button-container">
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Cancel</button> </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
