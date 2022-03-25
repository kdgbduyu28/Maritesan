import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';
import axios from "axios";
import { io } from 'socket.io-client';



export default function Newpost(props) {
  const socket = io("ws://localhost:4080");


  const [ post,setPost ] = useState({});
  const handlePostChange = e => {
    setPost({
      email: props.author.email,
      primary: props.author.name,
      secondary: e.target.value});
  };


  const handleSubmit = (e) => {
    const {email, secondary} = post;
    console.log("trigerred handlesubmit");
    const url = "http://localhost:4000/api/newpost";

    e.preventDefault();

   axios.post(url, {email, post: secondary}).then((response) => {
     
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
    setPost({secondary: ""})

    };
    
  
  return (
    <form onSubmit={handleSubmit}>
    <Card sx={{ minWidth: 275 }}>

      <CardContent>

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

      <TextField variant="standard"
       label="Anong chika mare?"
        fullWidth value={post.secondary}
         onChange={handlePostChange} />
  
      </Box>
      <Box sx={{textAlign: "center"}}>
      <Button variant="contained" type='submit'>Post</Button>



      </Box>
    
      
      </CardContent>

    </Card>
    </form>

  );
}
