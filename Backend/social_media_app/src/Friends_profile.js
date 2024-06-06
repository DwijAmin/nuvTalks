import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image from "./2.jpg";
import Button from '@material-ui/core/Button';
import './Friends_profile.css';
import { Popup } from 'react-chat-elements'
import { colors } from '@material-ui/core';
import Header from './Header';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
      
        padding: 7, width: '690px', margin: "450px", height: "300px", marginLeft: "230px",
        marginTop: "20px", top: '400px',
        left: 8, right: 40,
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center', top: "30px", padding: 40, height: "60px", 

    },
}));


function Friends_profile(props) {
 
    toast.configure() 
    const notify = ()=>{ 
        toast('Hello Geeks 4', 
           {position: toast.POSITION.BOTTOM_LEFT})
    }

const [Show, setShow] = useState(true);
    const classes = useStyles();
    return (

        <>
<Header></Header>
            <div className={classes.root}>
                <Grid container spacing={2}>

                    <Grid container item xs={12} spacing={2}>

                        <React.Fragment>


                            <Grid item xs={6}>

                                <Paper className={classes.paper}>
                                <img src={image}  className="img" alt={"./BB.jpg"} />
                                
                                    <p2 >kishan</p2><br /><br />
                                   
                                    <Button href="/Profile">Profile</Button>
                                    <Button href="/Message">Chat</Button>
                                </Paper>

                            </Grid>
                            <Grid item xs={6}>

                                <Paper className={classes.paper}>
                                <img src={image}  className="img" alt={"./BB.jpg"} />
                                
                                    <p2 >dhruv</p2><br /><br />
                                   
                                    <Button href="/Profile">Profile</Button>
                                    <Button href="/Message">Chat</Button>
                                </Paper>

                            </Grid>

                        </React.Fragment>
                    </Grid>
                </Grid>
            </div>


        </>
    );

}

export default Friends_profile
