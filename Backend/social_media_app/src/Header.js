import React from 'react'
import './Header.css';
import { GoogleLogout } from 'react-google-login';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import axios from "axios";
import Profile from './Profile';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@material-ui/core';
function Header() {
    let history = useHistory();

    const Question = () => {
        history.push("/Question")
    }
    const Friends = () => {
        history.push("/Friends")
    }
    const Covid = () => {
        history.push("/Covid")
    }
    const Chat = () => {
        history.push("/Messenger")
    }
    const News = () => {
        history.push("/News")
    }
    const Logout = () => {
        history.push("/")
    }
    const [Name, setName] = useState();
    const handlekey = (e) => {
        if (e.key === 'Enter') {
            console.log(e.target.value);

            const fetchUser = () => {
                const res = axios.get(`http://localhost:8800/api/posts/profiles/${e.target.value}`).then((response) => {
                    let A = response.data.name;
                    console.log(A)
                    if (A == null) {
                        alert("Your file is being uploaded!")
                    } else {
                        history.push("/Profile/" + e.target.value)
                    }
                })
                    // setName(response.data.name))
                    .catch((error) => console.log(error));;
                // console.log("hii" + res)
                // setuser(res.data);


                // setName(res.data);


            };
            fetchUser();


            // history.push("/Profile/Dwij Amin")
        }


        //console.log(Name)

    }




    return (
        <div className="header">
            <div className="header_left">
                <div className="header_input">
                    <input placeholder="Search" type="text" onKeyDown={handlekey} ></input>
                    <SearchIcon style={{ color: "grey" }}  ></SearchIcon >
                </div>

            </div>

            <div className="header_meddle">
                <div className="header_option">
                    <HomeIcon></HomeIcon>
                </div>

                <div className="header_option" onClick={() => Question()}  >
                    <span style={{ color: "white" }}>Question</span>

                </div>
                <div className="header_option" onClick={() => Friends()} >
                    <span style={{ color: "white" }}>Friends</span>
                </div>

                <div className="header_option" onClick={() => Covid()} >
                    <span style={{ color: "white" }}>Covid</span>
                </div>
                <div className="header_option" onClick={() => News()} >
                    <span style={{ color: "white" }}>News</span>
                </div>

            </div>

            <div className="header_right">
                <div className="header_option" onClick={() => Covid()}>

                </div>
            </div>
            <GoogleLogout
                clientId="292090500301-engvoneboso1ttiavq71luot2ce1k5og.apps.googleusercontent.com"
                buttonText="LOGOUT"
               
                onLogoutSuccess={Logout}
            >
            </GoogleLogout>



        </div>
    )
}

export default Header
