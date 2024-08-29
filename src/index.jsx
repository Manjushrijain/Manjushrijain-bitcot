import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import App from './App'; // Import your main App component
import './style.css'; // Import global CSS if needed

// Create a root to render the React app
const root = ReactDOM.createRoot(document.getElementById('app'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
