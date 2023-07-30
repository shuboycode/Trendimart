import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography, makeStyles } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import LogoHead from "../styles/components/assets/images/LogoHead.jpg";
import { isUserLogin, logIn, signIn } from '../store/slices/authSlice';
import axios from 'axios';
import { AuthContext } from '../context/authContext';


const SignIn = () => {
  const { handleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your sign-in logic here (e.g., API call, authentication)
  //   console.log('Email:', email, 'Password:', password);
  //   dispatch(
  //     logIn({
  //       name: "Varsha",
  //       lastName: "Dharwal",
  //       password: password,
  //       email: email,
  //     })
  //   );
  //   if(isUserLogin){
  //     navigate("/")
      
  //   }else{
  //     navigate("/signin")
  //   }
    
  // };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;
      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        handleSignIn(user);
        navigate("/")
        console.log("user is login")
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{
        marginTop: "64px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
          <img src={LogoHead} alt="logo" className="logo-icon" />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form style={{
          width: '100%',
          marginTop: "38px",
        }} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Box mt="16px">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mt: '12px' }}
            />
          </Box>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              width: '100%',
              marginTop: "8px",
            }}
          >
            Sign In
          </Button>
          {error && <Box sx={{
            mt: "1.5rem",
            color: "red",
            
          }}>{error}</Box>}
        </form>
      </Box>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          Trendimart copyright@2023
        </Typography>
      </Box>
    </Container>
  );
};

export default SignIn;
