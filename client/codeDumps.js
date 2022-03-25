

// (
//   <Container>
//               <Box
//           sx={{
//             marginTop: 10,
//           }} />
//     <Grid container spacing={25} direction="row" justifyContent="center" alignItems="center">
//           <Grid item>
//             <Link to="/homepage">
//             <Typography variant="h2"> 
//           SOCMED
//           </Typography>
//             </Link>
//           </Grid>
//           <Grid item xs={5}>
//           <Paper variant="outlined" elevation={24} sx={{border: "none"}}>
          
//             <Box component="form" onSubmit="" noValidate sx={{ width:'100%' }}  >
//             <Grid container direction="column" justifyContent="center">
//             <TextField
//               margin="normal"
//               required
              
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
              
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               sx={{ mt: 1}}
//             >
//             <GrLogin />
//             <Typography>
//             &nbsp;
//             Sign in
//             </Typography>
//             </Button>
//             <Button>
//               Forgot Password?
//             </Button>
//             <Button sx={{ mb: 2 }}>
//             Create a new account
//             </Button>

//             <Divider variant="middle">OR</Divider>

//             <Button
//               type="submit"
//               variant="contained"
//               sx={{ mt: 5, mb: 2 }}
//             >
//             <BsFacebook />
//             <Typography>
//             &nbsp;
//             Sign in with Facebook
//             </Typography>
            
//             </Button>
//             <form action="http://localhost:4000/auth/google">
//             <Button
//               type="submit"
//               variant="contained"
//               sx={{ mt: 5, mb: 2 }}
//               onSubmit=""
//             >
//             <BsGoogle />
//             <Typography>
//             &nbsp;
//             Sign in with Google
//             </Typography>
            
//             </Button>
//             </form>
//             </Grid>
//             </Box>
           
//             </Paper>
//             </Grid>

//     </Grid>
//     </Container>
// );