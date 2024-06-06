
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
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Headers from "./Headers";
function Login(props) {
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
                <h1 className="h">Welcome To Student Club</h1>


            </div>

            <div className="sign_up_link">
                <Link to="/Regirstation">Sign up</Link>

            </div>


            <div className="log">
                <input type='text' placeholder="Username" required className="input"></input>
                <br></br>
                <input type='password' required placeholder="Password" className="inputs"></input>
                <br></br>
                <div className="btnss">
                <button type="button" class="btn btn-outline-info btn-lg">  LOGIN</button>

                   

                </div>

                <br></br>
                <div className="glog">
                    <GoogleLogin
                        clientId="292090500301-engvoneboso1ttiavq71luot2ce1k5og.apps.googleusercontent.com"
                        buttonText="SIGNIN WITH GOOGLE"
                        onSuccess={responsesucessGoogle}
                        onFailure={responsefailGoogle}
                        cookiePolicy={'single_host_origin'}

                    />,
                </div>

            </div>







        </div>

    )
}
export default Login
