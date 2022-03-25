import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import {GrLogin} from "react-icons/gr";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

export default function LoginForm() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const handleFormChange = (e) => {
    const name = e.target.name;
      setData({...data, [name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/api/signin"
    axios.post(url, data).then((response) => {
      const data = response.data;
      navigate('homepage', {state: data, message: "injected data"});
    }, (err) => {
      console.log(err);
    }); 
    
  }; 

return (
    <form onSubmit={handleSubmit}>
    <Grid container direction="column">
    <TextField
    margin="normal"
    required
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
    autoFocus
    value={data.email}
    onChange={handleFormChange}
  />

  <TextField
    margin="normal"
    required
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
    value={data.password}
    onChange={handleFormChange}
  />

  <Button
    type="submit"
    variant="contained"
  >
  <GrLogin />
  <Typography>
  &nbsp;
  Sign in
  </Typography>
  </Button>
  </Grid>
  </form>
);
};