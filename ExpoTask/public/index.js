// // src/index.js

// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import App from '../App';
// // import * as serviceWorker from './serviceWorker'; // Import the service worker

// // ReactDOM.render(<App />, document.getElementById('root'));

// // // Register the service worker
// // serviceWorker.register(); // Call register() to enable the service worker

// // src/index.js

// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
// import App from '../App';
// import * as serviceWorker from './serviceWorker'; // Import the service worker

// // Create a root for the application
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // Render the App component
// root.render(<App />);

// // Register the service worker
// serviceWorker.register(); // Call register() to enable the service worker

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom/client'
import App from '../App'; // Your main App component
import * as serviceWorker from './serviceWorker'; // Import the service worker

// Create a root for the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker
serviceWorker.register(); // Call register() to enable the service worker

