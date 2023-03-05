import React,{useState} from 'react'

const Login = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className='main'>
     {!open ? 
     <>
      <p style={{
          fontSize: "18px",
          wordSpacing: "1.4px"
        }} className="text">Login or Signup</p>
      
        <div className="input-div">
          <input type="email" className="input" placeholder="Enter Email Address" required />
        </div>
        <div className="input-div">
          <input type="password" className="input" placeholder="Enter Password" required />
        </div>
        <div className='button-wrapper'>
        <button onClick={() => {
          setOpen(true)
            // setOtpPopup(true);
            // setButtonPopup(false)
          }} className="otp-btn">Submit</button>
          </div>
          </>:
          <>
          <p style={{
          fontSize: "18px",
          wordSpacing: "1.4px"
        }} className="text">Enter otp </p>
      
        <div className="input-div">
      <input type="text" className="input" placeholder="Enter your otp" required />
          
        </div>
        <div className='button-wrapper'>
        <button onClick={() => {
            // setOtpPopup(true);
            // setButtonPopup(false)
          }} className="otp-btn">Submit</button>
          </div>
          
          </>
          
          }

   
    </div>
  )
}

export default Login
