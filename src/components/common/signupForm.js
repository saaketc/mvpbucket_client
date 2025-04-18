// import React, { Component } from 'react'

// class Signup extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

// export default Signup
import React from 'react';
import './../../App.css';
// logo
// import Logo from '../logo';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
//import SignupButton from '../buttons/SignupButton';



const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#4dc5da',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignupForm({ onSubmit, onChange, firstName, lastName, college, email, username, password }) {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">

            <CssBaseline />


            <div className={classes.paper} >
                {/* <Avatar className={classes.avatar}>
                    <Logo />
                </Avatar> */}



                <Typography component="h1" variant="h5">
                    Signup
        </Typography>
                <form onSubmit={onSubmit} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                value={firstName}
                                onChange={onChange}
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={onChange}
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="college"
                                label="College"
                                name="college"
                                value={college}
                                onChange={onChange}
                                autoComplete="college"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={email}
                                onChange={onChange}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
                                onChange={onChange}
                                autoComplete="username"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                value={password}
                                onChange={onChange}
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" style={{ backgroundColor: '#4dc5da', color: 'white' }} />}

                                label="I want to receive inspiration and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        style={{ backgroundColor: '#4dc5da', color: 'white' }}
                    >
                        Sign Up
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to='/login' variant="body2">
                                Already have an account? Sign in
              </Link>
                        </Grid>
                        <Grid item>

                            <p>By signing up you are agreeing to our terms and privacy.</p>

                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    );
}
export default SignupForm;