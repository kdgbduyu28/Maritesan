import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {render} from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Profile from "./pages/ProfilePage";
import { ThemeProvider } from '@mui/material/styles';


render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
