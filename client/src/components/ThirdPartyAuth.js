import React from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props' ;
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Email } from "@mui/icons-material";

export function GoogleAuth(props) {
  const navigate = useNavigate();

  const responseSuccessGoogle = (response) => {
    const url = `http://localhost:4000/api/${props.app}`
    axios.post(url, {tokenId: response.tokenId}).then((res) => {
      const data = res.data;
      navigate('homepage', {state: data, message: "success google sign in"});
    }, (err) => {
      console.log(err);
    });
  };

return (

   <GoogleLogin
    clientId="493920888379-lthpsvf91ob0d6gh856075qmvv3b4ksm.apps.googleusercontent.com"
    render={renderProps => (
         <Button
    variant="contained"
    sx={{ mt: 5, mb: 2 }}
    onClick={renderProps.onClick}
    disabled={renderProps.disabled}
  >
  <props.logo />
  <Typography>
  &nbsp;
  Sign in with {props.app}
  </Typography>
  </Button>
    )}
    buttonText="Login"
    onSuccess={responseSuccessGoogle}
    cookiePolicy={'single_host_origin'}
  />



);
};

export function FacebookAuth(props) {


  const navigate = useNavigate();

  const responseFacebook = (response) => {
    const url = `http://localhost:4000/api/${props.app}`
    axios.post(url, {accessToken: response.accessToken, userID: response.userID}).then((res) => {
      const data = res.data;
      navigate('homepage', {state: data, message: "success facebook sign in"});
    }, (err) => {
      console.log(err);
    });
  };

return (

   <FacebookLogin
    appId="344692540932537"
    render={renderProps => (
      <Button
 variant="contained"
 sx={{ mt: 5, mb: 2 }}
 onClick={renderProps.onClick}
 disabled={renderProps.disabled}
>
<props.logo />
<Typography>
&nbsp;
Sign in with {props.app}
</Typography>
</Button>
 )}
    callback={responseFacebook}
    fields="name, email"
  />
);
};