import React from 'react'
import './Sidebar.css'
import PersonIcon from '@material-ui/icons/Person';

import { useHistory } from "react-router-dom";
function SideRow() {
    let history = useHistory();

    
    const profile = () =>{
        history.push("/Friends_profile")
    }
    const covid = () =>{
        history.push("/Covid")
    }
    const meeting = () =>{
        history.push("/Meeting")
    }
    return (
        <div className="side">
             
         
           
           <div className="siderow" onClick={()=> covid()}>
          
          
           </div>
           <div className="siderow" onClick={()=> meeting()}>
           
          
           </div>
          
           <div className="siderow" onClick={()=>profile()}>
         
          
           </div>
         
            
        </div>
    )
}

export default SideRow
