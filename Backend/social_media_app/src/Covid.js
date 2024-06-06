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
import { useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import './Covid.css'
function Covid(props) {
    const [name, setname] = useState("")
    const [user, setuser] = useState([])
    const paperStyle = {
        padding: 30, height: '73vh', width: 640, margin: "30px auto", backgroundColor: "aliceblue", display: 'flex', flexdirection: "column"

    }

    const AvatarStyle = { backgroundColor: "blue" }
    const GridStyle = { backgroundColor: "midnightblue" }

    useEffect(() => {
        const fetchdata = async () => {
            const res = await axios.get(`https://data.covid19india.org/data.json`);
            //setUser(res.data);
            console.log(res.data.statewise[0])
            setuser(res.data.statewise[0]);
            const A = res.data.statewise;
            var item = A.find(A => A.state == "Chandigarh");




        };
        fetchdata();
    }, []);
    console.log(user)
    return (

        <div >
            <Header></Header>
            <section>
                <Grid  >
                    <Paper elevation={20} className="paperStyle">
                        <Grid marginleft='200px'>

                            <h1 style={{ color: "black", marginLeft: "320px" }}>Covid Tracker</h1>
                            <div className="data">
                                <div className="info">
                                    <h1 style={{ color: "black", marginTop: "-20px" }}>INDIA</h1>
                                </div>
                                <div className="info">
                                    <h1 style={{ color: "grey", marginTop: "-26px" , marginLeft:"-13px" }}>Recovered</h1>
                                    <h1 style={{ color: "black", marginTop: "5px", marginLeft:"-13px" }}>{user.recovered}</h1>
                                </div>
                                <div className="info">
                                    <h1 style={{ color: "grey", marginTop: "-26px" ,  marginLeft:"-13px" }}>Confirmed</h1>
                                    <h1 h1 style={{ color: "black", marginTop: "5px", marginLeft:"-13px"}}>{user.confirmed}</h1>
                                </div>
                                <div className="info">
                                <h1 style={{ color: "grey", marginTop: "-26px" ,  marginLeft:"-13px"}}>Deaths</h1>
                                   
                                    <h1>{user.deaths}</h1>
                                </div>
                                <div className="info">
                                <h1 style={{ color: "grey", marginTop: "-40px" ,  marginLeft:"-13px" }}>Delta <br />confirmed</h1>
                                   
                                    <h1>{user.deltaconfirmed}</h1>

                                </div>
                                <div className="info">
                                <h2 style={{ color: "grey", marginTop: "-40px" ,  marginLeft:"-30px" }}>Lastupdated <br />time</h2>
                                   
                                    <h3>{user.lastupdatedtime}</h3>

                                </div>
                            </div>
                        </Grid>

                    </Paper>
                </Grid>
            </section>
        </div>
    )
}

export default Covid
