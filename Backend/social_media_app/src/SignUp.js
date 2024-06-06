import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Avatar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from "react-router-dom";

import { useHistory } from "react-router-dom";
import Headers from './Headers';
function SignUp(props) {
    const [username, setusername] = useState("");
    const [redirect, setredirect] = useState("false");
    const [password, setpassword] = useState("");
    const [token, settoken] = useState("");
    const [userrole, setuserrole] = useState("");
    let history = useHistory();

    const paperStyle = {
        padding: 30, height: '65vh', width: 340, margin: "30px auto", backgroundColor: "aliceblue",
    }

    const AvatarStyle = { backgroundColor: "blue" }
    const GridStyle = { backgroundColor: "midnightblue" }
    return (

        <div>

            <Headers />
            <Grid  >
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={GridStyle} >
                            <LockTwoToneIcon />
                        </Avatar>
                        <div>
                            <h1>Sign Up</h1>
                        </div>
                        <br></br>
                        <div>
                            <TextField id="outlined-basic" label="Name" variant="outlined" required fullWidth onChange={(event) => { setusername(event.target.value) }} />

                        </div>
                        <br></br>
                        <div>
                            <TextField id="outlined-basic" label="Password" variant="outlined" required fullWidth onChange={(event) => { setpassword(event.target.value) }} />

                        </div>
                        <br></br>
                        <div>
                            <TextField id="outlined-basic" label="UserName" variant="outlined" required fullWidth  />

                        </div>
                        <br></br>
                        <div>
                            <Button variant="contained" color="primary"  >

                                SignUp
                            </Button>
                      </div>
                      <br></br>
                      

                    </Grid>

                </Paper>
            </Grid>
        </div>
    )
}

export default SignUp
