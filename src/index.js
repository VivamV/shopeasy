import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer,{ initialState } from './reducer';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
const root = ReactDOM.createRoot(document.getElementById('root'));
Kommunicate.init("3e5495c9effe767fe65d78f0b353de6ed", )
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
      </StateProvider>
  
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
