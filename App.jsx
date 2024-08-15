import React, { useState } from 'react';
import ContactsView from './components/ContactView.jsx';
import AddContact from './components/AddContactForm.jsx';
import EditContact from './components/EditContactForm.jsx';
import ViewContactDetails from './components/ContactDetailView.jsx';
import SearchContact from './components/SearchContacts.jsx';
import addicon from '../src/assets/add.jpg';

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Aaron", mobile: "5785664545", email: "aaron@gmail.com" },
    { id: 2, name: "Buincy Hanson", mobile: "5785664545", email: "hanson@gmail.com" }
  ]);

  const [currentContact, setCurrentContact] = useState(null);
  const [editingContact, setEditingContact] = useState(null);
  const [viewingContact, setViewingContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddContact, setShowAddContact] = useState(false);
  const [showEditContact, setShowEditContact] = useState(false);
  const [showViewContactDetails, setShowViewContactDetails] = useState(false);

  const handleAddContact = (contact) => {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
    setShowAddContact(false);
  };

  const handleEditContact = (contact) => {
    setContacts(contacts.map(c => c.id === contact.id ? contact : c));
    setShowEditContact(false);
    setEditingContact(null);
  };

  const handleViewContactDetails = (contact) => {
    setViewingContact(contact);
    setShowViewContactDetails(true);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.mobile.includes(searchQuery)
  );

  return (
    <div>
      <header>
        <h1>All Contacts<button onClick={() => setShowAddContact(true)}><img src={addicon} alt ='Add' ></img></button></h1>
        <SearchContact
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
     
      </header>

      <ContactsView
        contacts={filteredContacts}
        onEdit={contact => {
          setEditingContact(contact);
          setShowEditContact(true);
        }}
        onView={handleViewContactDetails}
        onDelete={(id) => setContacts(contacts.filter(contact => contact.id !== id))}
      />

      {showAddContact && (
        <AddContact
          onClose={() => setShowAddContact(false)}
          onAdd={handleAddContact}
        />
      )}

      {showEditContact && editingContact && (
        <EditContact
          contact={editingContact}
          onClose={() => setShowEditContact(false)}
          onEdit={handleEditContact}
        />
      )}

      {showViewContactDetails && viewingContact && (
        <ViewContactDetails
          contact={viewingContact}
          onClose={() => setShowViewContactDetails(false)}
        />
      )}
    </div>
  );
}

export default App;
