import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import dotenv from 'dotenv';
// dotenv.config();

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
console.log(CLIENT_ID);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId={CLIENT_ID}>
        <App />
    </GoogleOAuthProvider>
);