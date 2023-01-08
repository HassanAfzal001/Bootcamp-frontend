import React from 'react'
import {Avatar, Grid, Paper, TextField,
FormControlLabel,
Checkbox,
Button,
Typography,
Link} from '@mui/material' 
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { blue } from '@mui/material/colors';

export default function SingUp() {
    const paperStyle = {
        height: "85vh",
        width: 280,
        padding: 20,
        margin:"20px auto",
    };
    const avatarStyle={
        backgroundColor: 'blue',
    };
    const commonStyle={
        marginTop: 3,
        marginBottom:3
    };

  return (
    <>
    {/* <div>SingIn</div> */}
    <Grid>
            <Paper elevation={7} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}>
                    <LockOpenIcon ></LockOpenIcon>
                </Avatar>
                <h2> SignUp </h2>
                </Grid>

                <TextField
                variant='standard'
                label='Username'
                placeholder='Enter your username'
                fullWidth
                style={commonStyle}
                required/>

<TextField
                variant='standard'
                label='Password'
                placeholder='Enter your password'
                fullWidth
                style={commonStyle}
                required/>

<TextField
                variant='standard'
                label='Confirm Password'
                placeholder='Enter your confirm password'
                fullWidth
                style={commonStyle}
                required/>

<TextField
                variant='standard'
                label='first name'
                placeholder='Enter your first name'
                fullWidth
                style={commonStyle}
                required/>

<TextField
                variant='standard'
                label='last name'
                placeholder='Enter your last name'
                fullWidth
                style={commonStyle}
                required/>

<TextField
                variant='standard'
                label='date of birth'
                placeholder='Enter your date of birth'
                fullWidth
                style={commonStyle}
                required/>

          <TextField
                variant='standard'
                label='age'
                placeholder='Enter your age'
                fullWidth
                style={commonStyle}
                required/>

<TextField
                variant='standard'
                label='phone number'
                placeholder='Enter your phone number'
                fullWidth
                style={commonStyle}
                required/>
                
                <Button
                variant="contained"
                fullWidth
                style={commonStyle}>
                    Submit
                    </Button>

            
            </Paper>
        </Grid>
    </>
  )
}
