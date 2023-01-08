import React from 'react';
import {Grid,
     Paper,
    Avatar,
    FormControlLabel,
TextField,
Button,
Checkbox} from '@mui/icons-material';
import {LockOutlinedIcon} from '@mui/icons-material';

export default function SignUp() {
    const paperStyle = {
        height:'70vh',
        width:280,
        padding:20,
        margin:'20px auto'
    };
    const avatarStyle = {
        backgroundColor: 'blue'
    };
    const commonStyle = {
        marginTop: 15,
        marginBottom: 15
    };

    return(
        <>
        <Grid>
            </Grid>
            <Paper elevation={7} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}>
                    <LockOutlinedIcon ></LockOutlinedIcon>
                </Avatar>
                </Grid>
                <h2> SignUp </h2>
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

                <FormControlLabel
                control={<Checkbox defaultChecked/>}
                label='Remember me'/>
                
                <Button
                variant="contained"
                fullWidth
                style={commonStyle}>
                    SignUp
                    </Button>



                    </Paper></>
    )
}