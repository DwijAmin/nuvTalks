
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addtobasket } from './Slices'
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import Messenger from './Messenger';
import axios from 'axios';
import './Regirstation.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Headers from "./Headers";
function Regirstation(props) {
    let history = useHistory();
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const dispatch = useDispatch();
    const responsesucessGoogle = (response) => {
        console.log(response)
        axios({
            method: "POST",
            url: "http://localhost:8800/api/auth/googlelogin",
            data: { tokenId: response.tokenId }

        }).then(res => {


            const Product = {

            };
            history.push("/Home")

            dispatch({ type: addtobasket, payload: res.data.user });
            localStorage.setItem('user', JSON.stringify(res.data.user));
            //  dispatch(addtobasket(res.data))

            var retrievedObject = localStorage.getItem('user');

            var a = JSON.parse(retrievedObject)
            console.log(a)
            console.log(JSON.stringify(res.data.user))


        }

        )

    }
    const responsefailGoogle = (response) => {

    }
    return (
        <div className="divvv">


            <div className="divv">
                <h1 className="hh">Sign Up</h1>


            </div>




            <div className="log">
              
             
                <input type='text' placeholder="Username" required className="input_"></input>
              
                <input type='password'required placeholder="Password" className="input_s"></input>
                <input type='password'required placeholder="Password" className="input_s"></input>
               
                <div className="btns_s">
                <Button variant="primary" >
                        REGIRSTATION
                    </Button>
                    
                </div>
             
              
               
              
                </div>
             
          
             
               
          


        </div>

    )
}
export default Regirstation
