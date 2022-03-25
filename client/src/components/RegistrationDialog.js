import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';

export default function RegistrationDialog(props) {


  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);
  const handleLoading = (val) => {
    setLoading(val);
  }
  const [regAlert, setRegAlert] = React.useState(false);
  const handleAlert = () => {
    setRegAlert(!regAlert);
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleFormChange = (e) => {
    const name = e.target.name;
      setData({...data, [name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoading(true);
    const url = "http://localhost:4000/api/signup"

    try { 
     axios.post(url, data).then((res) => {
       props.onClose();
       
        navigate('/', {state: res.data, message: "successful registration"});
        props.sRegister();
        handleLoading(false);
      }, () => {
        handleLoading(false);
        handleAlert();
        
      });
    } catch(err) {
      console.log(err);

    }
    };
  

return (

 
    <Dialog open={props.open} onClose={props.onClose}>
       <form onSubmit={handleSubmit}>
        <DialogTitle>Sign Up </DialogTitle>
       
        <DialogContent>
        <Divider />
        
        <TextField
                  margin="normal"
                  required
                  value={data.name}
                  onChange={handleFormChange}
                  id="name"
                  label="Marites Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <Box />
        <TextField
                  margin="normal"
                  required
                  value={data.email}
                  onChange={handleFormChange}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                          <TextField
                          value={data.password}
                          onChange={handleFormChange}
                  margin="normal"
                  required
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              
              <Collapse in={regAlert}>
              <Alert severity="error"
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              handleAlert();
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }>
                  
  <AlertTitle>Error</AlertTitle>
  <strong>Email already exists in the system</strong>
</Alert>
              </Collapse>
                        
        </DialogContent>
        { loading && ( <LinearProgress />)}
        <DialogActions>
 
          <Button onClick={props.onClose}>Cancel</Button>
          <Button type="submit" >Register</Button>
         
        </DialogActions>
        </form>
      </Dialog>
     

);


};