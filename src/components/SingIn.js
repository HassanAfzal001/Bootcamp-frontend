import React from 'react'
import {Avatar, Grid, Paper, TextField,
FormControlLabel,
Checkbox, //03046277508
Button,
Typography} from '@mui/material' 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Link} from 'react-router-dom';
//import { green } from '@mui/material/colors';

export default function SingIn() {
    const gridStyle = {
        backgroundColor: "lightBlue"
    };
    const paperStyle = {
        height: "70vh",
        width: 280,
        padding: 20,
        margin:"20px auto",
        backgroundColor: 'lightBlue'
    };
    const avatarStyle={
        backgroundColor: 'blue',
    };
    const commonStyle={
        marginTop: 15,
        marginBottom:15
    };

  return (
    <>
    {/* <div>SingIn</div> */}
    <Grid >
            <Paper elevation={7} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}>
                    <LockOutlinedIcon ></LockOutlinedIcon>
                </Avatar>
                <h2> Login </h2>
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
                label='password'
                placeholder='Enter your password'
                fullWidth
                style={commonStyle}
                required/>

                <FormControlLabel
                control={<Checkbox defaultChecked/>}
                label='Remember me'/>
                
                <Button
                variant="contained"
                fullWidth
                style={commonStyle}>
                    Login
                    </Button>

                <Typography>
                    <Link href='#'> Forget Password</Link>
                </Typography>
                
                <Typography style={commonStyle}>
                    Don't have any account! <Link to='/signup'> SignUp</Link>
                </Typography>
            
            </Paper>
        </Grid>
    </>
  )
}
