import React,{useState} from 'react'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = ({handleClose}) => {
  const [open,setOpen] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const openSignUp= () => {
  setOpen(true)
  setEmail("")
  setPassword("")
}
const openSignIn = () => {
  setOpen(false)
  setEmail("")
  setPassword("")
}
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if(userCredential){
          localStorage.setItem("userCredential",JSON.stringify(userCredential))
        }
        console.log(userCredential);
        handleClose()
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='main'>
      {!open ? 
      <form onSubmit={signIn}>
     <>
      <p style={{
          fontSize: "18px",
          wordSpacing: "1.4px"
        }} className="text">Login</p>
      
        <div className="input-div">
          <input type="email" className="input" placeholder="Enter Email Address" required
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="input-div">
          <input type="password" className="input" placeholder="Enter Password" required
            onChange={(e)=>setPassword(e.target.value)}

          />
        </div>
        <div className='button-wrapper'>
        <button type="submit"
           className="otp-btn">Submit</button>
          </div>
 <p onClick={openSignUp}>Click here to sign Up</p>      
          </>
          
          </form> :
          <form onSubmit={signUp}>
          <>
           <p style={{
               fontSize: "18px",
               wordSpacing: "1.4px"
             }} className="text">Signup</p>
           
             <div className="input-div">
               <input type="email" className="input" placeholder="Enter Email Address" required
               onChange={(e)=>setEmail(e.target.value)}
               />
             </div>
             <div className="input-div">
               <input type="password" className="input" placeholder="Enter Password" required
                 onChange={(e)=>setPassword(e.target.value)}
     
               />
             </div>
             <div className='button-wrapper'>
             <button type="submit"
                className="otp-btn">Submit</button>
               </div>
      <p onClick={openSignIn}>Click here to Login</p>      
               </>
               
               </form>}

   
    </div>
  )
}

export default Login
