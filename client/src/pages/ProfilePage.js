import AppBar from "../components/AppBar";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useLocation} from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";

export default function Profile() {

  const { state } = useLocation();
  const [ stateval, setStateval ] = useState(state);

  const [ data, setData ] = useState({
    name: state.data.name,
    email: state.data.email,
    password: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(stateval);
    const url = "http://localhost:4000/api/updateprofile"
    axios.post(url, {data: data, email: state.data.email}).then((response) => {
      const data = response.data;
      console.log(data.name);
      setStateval({
        ...stateval, data
      });
      console.log(stateval);
    }, (err) => {
      console.log(err);
    }); 
    

  }
  const handleFormChange = (e) => {
    const name = e.target.name;
    setData({
      ...data, [name]: e.target.value
    });
  };
   return (
       <>

       <AppBar />
       <form onSubmit={handleSubmit}>
       <Container>
    
       <Box sx={{height: 50}}/>

       <Grid container direction="row" justifyContent="flex-start" spacing={20}>
  <Grid item>
  <Avatar alt="" src={require("../static/images/avatar1.png")} sx={{ width: 150, height: 150 }} />
  </Grid>
  <Grid item>
  <Typography variant="h4" component="h4" color="gray">
  Hello, {stateval.data.name}
</Typography>
<Typography variant="h4" component="h4" color="gray">
  {stateval.data.email}
</Typography>
<Typography variant="h5" component="h5" color="white">
  Fill out the requested changes
</Typography>
  </Grid>
  </Grid>
    
  <Box sx={{height: 100}}/>
  <Grid container direction="row" justifyContent="center" spacing={20}>
  <Grid item>
  <TextField id="demo-helper-text-misaligned-no-helper" label="Name" variant="standard" name="name" value={data.name} onChange={handleFormChange} />
  </Grid>
  </Grid>
  <Box sx={{height: 100}}/>
  <Grid container direction="row" justifyContent="center" spacing={20}>
  <Grid item>
  <TextField id="standard-basic" label="Email Address" variant="standard" name="email" value={data.email} onChange={handleFormChange} />
  </Grid>
  <Grid item>
  <TextField id="standard-basic" label="Password" variant="standard" name="password" value={data.password} onChange={handleFormChange} />
  </Grid>
  </Grid>
  <Box sx={{height: 100}}/>
  <Grid container direction="row" justifyContent="center" spacing={20}>
  <Grid item>
  <Button variant="contained" type="submit">
        submit
      </Button>
  </Grid>

  </Grid>

       </Container> 
       </form>
       </>
   )

}