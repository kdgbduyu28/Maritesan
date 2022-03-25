import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {Link} from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';


import Avatar from '@mui/material/Avatar';

export default function ProfileSidebar(props) {
  return (
    <Box ml={5} mt={5} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
          <Tooltip title="Edit Profile" placement="top-end">
            <Link to="/profile">
          <Avatar alt="" src={require("../static/images/avatar1.png")} sx={{ width: 150, height: 150 }} />
          </Link>
          </Tooltip>
          </ListItem>
          <ListItem disablePadding>
              <ListItemText style={{color: "white"}} primary={props.data.email} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText style={{color: "white"}} primary={props.data.name} />
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
