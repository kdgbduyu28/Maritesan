
import React, { Component } from "react";
import './App.css';
import LoginPage from "./pages/LoginPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Profile from "./pages/ProfilePage";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

class App extends Component {

  render() {

    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
      },
    });

    return (
      <ThemeProvider theme={darkTheme}>
      <GlobalStyles styles={{
        body: {backgroundColor: "black"}
      }} />
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="homepage" element={<HomePage />} />
      <Route path="profile" element={<Profile /> } />
      <Route path="logout" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    );
  }
}


export default App;
