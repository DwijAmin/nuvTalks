import React from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Avatar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from "react-router-dom";

import { useHistory } from "react-router-dom";
import Header from './Header';
function Message(props) {
const [name, setname] = useState("")
    const paperStyle = {
        padding: 30, height: '73vh', width: 640, margin: "30px auto", backgroundColor: "aliceblue",display: 'flex',flexdirection: "column"

    }

    const AvatarStyle = { backgroundColor: "blue" }
    const GridStyle = { backgroundColor: "midnightblue" }
    return (

        <div className="classs">
            <Header />

            <Grid  >
                <Paper elevation={20} style={paperStyle}>
                    <Grid  marginleft='200px'>
                        <Avatar style={GridStyle} >
                            <ChatIcon />
                        </Avatar>
                        <h1 style={{color:"blue"}}>Messanger</h1>
                        <div >
        
                        <h2 className="hh1" align='right'>dwij</h2>
                        <h2 className="hh1" align='right'>kishan</h2>
                        <h2 className="hh1" align='right'>dhruv</h2>
                        <h2 className="hh1" align='right'>Aakash</h2>
                            </div>
                      
                        <div className="text" >
                            <TextField id="outlined-basic" label="message" variant="outlined" required fullWidth />
                            <Button style={{}} variant="contained" color="primary"  >

                                SEND MESSAGE
                            </Button>
                        </div>
                        
                     


                    </Grid>

                </Paper>
            </Grid>
        </div>
    )
}

export default Message
