import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import './Question.css'
import axios from "axios";
import Header from './Header'
function Question() {
    const [show, setShow] = useState(false);
    const [Que_Ans, setQue_Ans] = useState([])
    const [Question, setQuestion] = useState("");
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:8800/api/Questions/618c0366c83be1cda4d3fe0f`);
            //  setUser(res.data);
            // console.log(res.data)
            setQue_Ans(res.data);
        };
        fetchUser();
    }, []);
    const handlekey = (e) => {
        if (e.key === 'Enter') {
            console.log(e.target.value);
            setQuestion(e.target.value);
        }


    }
    console.log(Question)
    console.log(Que_Ans)
    const handleClose = async () => {
        const data = { "Questionname": Question, "Answers": "NA", "userId": "618c0366c83be1cda4d3fe0f" };
        const add_data = await axios.post("http://localhost:8800/api/Questions", data).then(res => console.log(res))



        setShow(false)
    };
    const handleShow = () => setShow(true);
    const handleClosse = () => setShow(false);
    return (
        <div className="app_s">
<Header />
            <Button variant="primary" onClick={handleShow} className="buttonss">
                Ask Question
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ask Question</Modal.Title>
                </Modal.Header>
                <Modal.Body><textarea id="w3review" name="w3review" rows="4" cols="60" onKeyDown={handlekey} >
                </textarea></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosse}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Send
                    </Button>
                    
                </Modal.Footer>
            </Modal>
            {
                Que_Ans.map((p) => (
                    <div className="posts">
                        <div className="post_top">

                            <h1>{p.Questionname}</h1>
                        </div>
                        <div className="post_message">

                        </div>
                        <br />
                        <div className="post_image">

                        </div>
                        <br />
                        <div className="post_message">


                            <h1 className="postLikeCounter">Answers :  {p.Answers}</h1>
                            <br></br>

                        </div>
                    </div >

                ))
            }



        </div>

    );
}

export default Question
