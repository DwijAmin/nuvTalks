import React from 'react'
import './Headers.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useHistory } from "react-router-dom";
import Profile from './Profile';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@material-ui/core';
function Headers() {
    let history = useHistory();
   
    toast.configure() 
    const notify = ()=>{ 
        toast('notification', 
           {position: toast.POSITION.TOP_CENTER})
    }
    const notif = ()=>{ 
        toast('friend request', 
           {position: toast.POSITION.TOP_CENTER})
    }
    return (
        <div className="headerss">
               <h2 style={{color:"white" , marginLeft:"550px"}}></h2>
           

           
            
        </div>
    )
}

export default Headers
