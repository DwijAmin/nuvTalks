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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding: 7, width: '690px', margin: "450px", height: "300px", marginLeft: "270px",
        marginTop: "100px",
        left: 8, right: 40,
    },
    paper: {
        padding: theme.spacing(4),
        backgroundColor: "darkgrey",
        marginTop: "10px", padding: 40, height: "60px",

    },
}));


function Friends(props) {

    const [user, setuser] = useState([]);
    var retrievedObject = localStorage.getItem('user');

    var a = JSON.parse(retrievedObject)
    console.log(a)
    //const item = localStorage.getItem('user');
    //setuser(item)
    // console.log(item[0])
    // setuser(item[0])
    useEffect(() => {
        console.log(a._id)
        axios
            .get(

                `http://localhost:8800/api/posts/timeline/allfrinds/${a._id}`
            )
            .then((response) => /*setData(response.data.articles)*/
                setuser(response.data))
            .catch((error) => console.log(error));
    }, []);
    console.log(user)
    toast.configure()
    const notify = () => {
        toast('Hello Geeks 4',
            { position: toast.POSITION.BOTTOM_LEFT })
    }

    const [Show, setShow] = useState(true);
    const classes = useStyles();
    return (

        <>
            <Header></Header>
            <div className={classes.root}>

                <Grid container spacing={2}>

                    <Grid container item xs={14} spacing={2}>

                        <React.Fragment>

                            {
                                user.map((p) => (
                                    //  console.log(p)
                                    <Grid item xs={6}>

                                        <Paper className={classes.paper}>

                                            <h1 style={{ marginTop: "-28px", marginLeft: "55px" }} >{p.name}</h1>


                                        </Paper>


                                    </Grid>



                                ))
                            }

                        </React.Fragment>
                    </Grid>
                </Grid>
            </div>


        </>
    );

}

export default Friends
