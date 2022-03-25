import {Link} from "react-router-dom";
import Appbar from "../components/AppBar";
import Grid from '@mui/material/Grid';
import {loremIpsum} from "../constants";
import ProfileSidebar from "../components/ProfileSideBar";
import Friendslist from "../components/FriendsList";
import Newpost from "../components/NewPost";
import Mgachismis from "../components/MgaChismis";
import {useLocation} from 'react-router-dom';

export default function HomePage() {

  const { state } = useLocation();

    return (
      <>
      {console.log(state)}
      <Appbar /> 
      
<Grid container direction="row" justifyContent="space-around" spacing={2}>
  <Grid item xs={2}>
  <ProfileSidebar data={state} />
  </Grid>
  <Grid item xs={8}>
  <Mgachismis data={state} />
  </Grid>
  <Grid item xs={2}>
  <Friendslist />
  </Grid>
  
</Grid>

</>

    );
  }