import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Newpost from './NewPost';
import { io } from 'socket.io-client';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';






export default function Mgachismis(props) {


  const [posts, setPosts] = useState([]);
  const [socket, setSocket] = useState(null);
  // const socket = io("ws://localhost:4080")
  

  // useEffect(() => {


  //   const newSocket = io("ws://localhost:4080");
  //   setSocket(newSocket);
  //   socket.on('history', messages => {
  //     setPosts(messages);
  //     console.log(messages);
  //   });
  // return socket.disconnect();
  // },[]);
  useEffect(() => {
    if(socket === null){
      setSocket(io("ws://localhost:4080"));
    }
    if (socket) {
    socket.on('history', async messages => {
      setPosts(messages);
      console.log(messages);
    });
    return socket.on('disconnect');
  }
  },[socket]);




 const handleDeleteChat = (val) => {
    const url = "http://localhost:4000/api/deletepost";
    axios.post(url, {data: val}).then(response => {
      console.log(response);
    });
  };


  
  return (
    <>
    <Newpost author={props.data} />
    <List sx={{ width: '100%', maxWidth: "auto", bgcolor: 'background.paper' }}>

    {
      
    posts.map(chismisPost => (
      
      <ListItem alignItems="flex-start"
      onClick={() => handleDeleteChat(chismisPost._id)}
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
      
      >
        
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        disableTypography
        primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>{chismisPost.name}</Typography>}
        secondary={<Typography type="body2" style={{ color: '#FFFFFF' }}>{chismisPost.post}</Typography>}
        
      />
      
    </ListItem>
    ))}
    </List>
    </>
  );
}
