import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import {BsPeople} from "react-icons/bs";
import Divider from '@mui/material/Divider';
import RegistrationDialog from "../components/RegistrationDialog";
import LoginForm from "../components/LoginForm";
import {GoogleAuth, FacebookAuth} from "../components/ThirdPartyAuth";
import {BsFacebook, BsGoogle} from "react-icons/bs";
import Snackbar from '@mui/material/Snackbar';


function LoginPage() {

const [openButton, setOpenButton] = useState(false);
const [registernotify, setRegisternotify] = useState(false);

const handleButton = () => {
  setOpenButton(!openButton);
};

const handleRegistered = () => {
  setRegisternotify(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') return;
    setRegisternotify(false);
};

 return (
   <Box mx={15}>
        <Snackbar
        open={registernotify}
        autoHideDuration={2000}
        message="Succesful Registration"
        onClose={handleClose}
      />
     { openButton && (<RegistrationDialog sRegister={handleRegistered} open={openButton} onClose={handleButton} />)}
    <Container>
                <Box
            sx={{
              marginTop: 10,
            }} />
      <Grid container direction="row" justifyContent="space-around">
            <Grid item>
              <Link to="/" underline="none" color="primary" style={{color: "white", textDecoration: 'none' }}>
              <BsPeople size={200} />
              <Typography variant="subtitle1"> 
            Connect with friends.
            </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Grid direction="column" justifyContent="space-around">
              <Grid item>
              <LoginForm />
                </Grid>
                <Grid item>
              <Button onClick={handleRegistered}>
                Forgot Password?
              </Button>
              </Grid>
              <Grid item>
              <Button sx={{ mb: 2 }} onClick={handleButton}>
              Create a new account
              </Button>
              </Grid>
              <Divider variant="middle">OR</Divider>
              <Grid item>
              <FacebookAuth app={"Facebook"} logo={BsFacebook}/>
              </Grid>
              <Grid item>
              <GoogleAuth app={"Google"} logo={BsGoogle}/>
              </Grid>
              </Grid>
              </Grid>
             
  
      </Grid>
      </Container>
      </Box>
 );
}

export default LoginPage;
