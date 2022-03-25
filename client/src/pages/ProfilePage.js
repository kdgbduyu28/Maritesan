import AppBar from "../components/AppBar";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export default function Profile() {
   return (
       <>
       <AppBar />
       <Container>
    
       <Box sx={{height: 50}}/>

       <Grid container direction="row" justifyContent="flex-start" spacing={20}>
  <Grid item>
  <Avatar alt="" src={require("../static/images/avatar1.png")} sx={{ width: 150, height: 150 }} />
  </Grid>
  <Grid item>
  <Typography variant="h3" component="h3">
  Last Name, First Name
</Typography>
<Typography variant="h4" component="h4" color="gray">
  Last Name, First Name
</Typography>
  </Grid>
  </Grid>
    
  <Box sx={{height: 100}}/>
  <Grid container direction="row" justifyContent="center" spacing={20}>
  <Grid item>
  <TextField required id="demo-helper-text-misaligned-no-helper" label="First Name" variant="standard" />
  </Grid>
  <Grid item>
  <TextField required id="demo-helper-text-misaligned-no-helper" label="Last Name" variant="standard" />
  </Grid>
  </Grid>
  <Box sx={{height: 100}}/>
  <Grid container direction="row" justifyContent="center" spacing={20}>
  <Grid item>
  <TextField required id="standard-basic" label="Email Address" variant="standard" />
  </Grid>
  <Grid item>
  <TextField required id="standard-basic" label="Password" variant="standard" />
  </Grid>
  </Grid>
  <Button variant="contained" type="submit">
        submit
      </Button>
       </Container> 
       </>
   )

}