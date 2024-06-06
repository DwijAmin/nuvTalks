import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react'
import './Admin_Question.css'
import axios from "axios";
import Header from './Header'
function Admin_Question() {
    const [show, setShow] = useState(false);
    const [Que_Ans, setQue_Ans] = useState([])
    const [Question, setQuestion] = useState("");
    const [Data, setData] = useState("");
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:8800/api/Questions`);
            //  setUser(res.data);
            // console.log(res.data)
            setQue_Ans(res.data);
        };
        fetchUser();
    }, []);
    //console.log(Question)
    console.log(Que_Ans)

    const handlekey = (e) => {
        console.log(e.target.value);
        if (e.key === 'Enter') {
            console.log(e.target.value);
           
            setData(e.target.value);
            
           
            // history.push("/Profile/Dwij Amin")
        
         // setName(response.data.name))
              
               // console.log("hii" + res)
                // setuser(res.data);
           
               
               // setName(res.data);

               
           
          
            
           
        }
       
      
        //console.log(Name)

    }

    const Add = async(event) => {
        console.log(Data)
        console.log(event.target.value)
      // console.log(Data)
  // const A = "Answers :" +Data;
      const res = await axios.put(`http://localhost:8800/api/Questions/`+event.target.value , { Answers: Data });
           
        console.log(res)
        

    }
    return (
        <div className="app_ss">
            <Header />

            {
                Que_Ans.map((p) => (
                    <div className="posts">
                        <div className="post_top">

                            <h1>Question : {p.Questionname}</h1>
                        </div>
                        <div className="post_message">

                        </div>
                        <br />
                        <div className="post_image">

                        </div>
                        <br />
                        <div className="post_message">

                        <label className="lables" for="html">Answers :</label><br/>  <textarea type="text"  onKeyDown={handlekey} className="inputs"></textarea>
                      <div className="btns">
                        <Button color="secondary" onClick={Add} value = {p._id}>Submit Answer</Button>
                        </div>
                            <br></br>

                        </div>
                    </div >

                ))
            }
            



        </div>

    );
}

export default Admin_Question
