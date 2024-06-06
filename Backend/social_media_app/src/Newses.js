import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Avatar, ClickAwayListener, Link } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import { useState , useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useHistory } from 'react-router-dom';
import axios from "axios";

const useStyles = makeStyles((theme)=>({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 10, width: 600, margin: "28px auto",
        marginTop: 20,
        left: 3,right:40
    },
    margin: {
        margin: theme.spacing(2),
        width: 900
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '60ch',left: 10,   overflowWrap: 'break-word'
        
    },
Button:{
    marginLeft:'87px',
}
}));

function Newses() {
     const classes = useStyles();
     const [data, setData] = useState([]);
const apiKey = "1c8464321ba2427aa67673fed17a3933";
     useEffect(() => {
        axios
          .get(
            `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${apiKey}`
          )
          .then((response) => setData(response.data.articles))
          .catch((error) => console.log(error));
      }, []);

    const paperStyle = {
        padding: 10, maxheight: '15vh', width:600, marginLeft:100,margin: "15px auto", backgroundColor: "aliceblue", left:200   }
        const history = useHistory();
        const [A, setA] = useState(
           {name :"dwij", id : 1}
       );
       const UpdateQuestion = () =>{
           history.push({pathname: "/UpdateQuestion", state : A});
       }
       console.log(data)
    return (
        <div className={classes.root}>
          
     {
         data.map((p)=>(
            <Grid  className="grid" >
            <Paper elevation={20} style={paperStyle}>
                <Grid align='left'left={200}>
                      
                    <List component="nav" className={classes.textField} aria-label="mailbox folders">
                        <h1>{p.title}</h1>
                    <p>{p.description}</p>
                         
                    </List>
                  
                           
                </Grid>
                
              
            </Paper>
        </Grid>
         ))
     }
          
           
            
        </div>
    )
}

export default Newses
