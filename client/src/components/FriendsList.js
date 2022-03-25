import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

export default function Friendslist() {

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  return (
    <Box mt={5}>
    <List style={{color: "white"}} 
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts" 
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Mga ka-Asosasyon" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
        <StyledBadge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
</StyledBadge>
          <ListItemText inset primary="Maricar" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
        <StyledBadge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
</StyledBadge>
          <ListItemText inset primary="Marichi" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
        <StyledBadge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
</StyledBadge>
          <ListItemText inset primary="Maricris" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
        <StyledBadge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
</StyledBadge>
          <ListItemText inset primary="Mariposa" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
        <StyledBadge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
</StyledBadge>
          <ListItemText inset primary="Marieta" />
        </ListItemButton>
      </ListItem>
    </List>
    </Box>
  );
}
