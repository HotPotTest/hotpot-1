import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import "./Login.css"

const Login = (props) => {
    if (props.trigger) {
        return  (
       <div className='popup'>
         <div className="popup-inner">
           <button className="close-btn" onClick={()=> props.setTrigger(false)}><FontAwesomeIcon icon={faX} /></button>
           {props.children}
         </div>
       </div>
     )
    } else if (props.otpTrigger) {
       return (
         <div className='popup'>
         <div className="popup-inner">
           <button className="close-btn" onClick={()=> props.setOtpTrigger(false)}><FontAwesomeIcon icon={faX} /></button>
           {props.children}
         </div>
       </div>
       );
     } else {
       return "";
     }     
}

export default Login