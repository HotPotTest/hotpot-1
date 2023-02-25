import React from 'react'
import './Navbar.css'
import '../Login/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
import Search from '../Search/Search'
import Login from '../Login/Login'

const Navbar = () => {
  const [ auth, setAuth] = useState(localStorage.getItem('user')? true : false)
  const{category} = useParams()
  const [buttonPopup, setButtonPopup] = useState(false);
  const [otpPopup, setOtpPopup] = useState(false);
  const navigate = useNavigate()
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "1234") {
        setOtpPopup(false);
        navigate("/");
      }
      else alert("enter valid")
    }
  }
  
  const logOutUser = ()=>{
    localStorage.removeItem('user')
    setAuth(false)
    navigate('/')
  }
  const handleLogin = async (googleData)=>{
    // const res2 = await axios.post('http://localhost:7000/google/login',{
    // const res2 = await axios.post('https://hotstar-v.herokuapp.com/google/login',{
    //   token : googleData.tokenId
    // })
    // localStorage.setItem('user', JSON.stringify(res2.data))
    setAuth(true)
    setButtonPopup(false)
    navigate('/profile')
  }
  const handleFailure = (err)=>{
    // console.log({ failure : err})
    alert(`Login failed`)
  }


  return (
    <>
      <div className='nav'>
        <div className="nav-left">
          <div>
            <Link to="/">
              <p><b>HotPot</b></p>
              {/* <img
                className="disney-img"
                src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                alt=""
                /> */}
            </Link>
          </div>
          <div className="dropdown">
            <Link className="link" to="/" >Home</Link>
          </div>
          <div className="dropdown">
            <Link className="link" to="/recent">Recent</Link>
          </div>
          <div className="dropdown">
            <Link className="link" to="/trending">Trending</Link>
          </div>
          <div className="small">
            <Link to="/movies">Movies</Link>
          </div>
        </div>
        <div className="nav-right">
          <Search />         
        </div>
      </div>
      <div>
      <Login trigger={buttonPopup} setTrigger={setButtonPopup}>
        <p style={{
          fontSize: "18px",
          wordSpacing: "1.4px"
        }} className="text">Login to continue</p>
        <br></br>
        <div 
        className="googleBtn">
          {/* <GoogleLogin
        clientId={"470082525240-e74jps4n35c7d8kufu3ujo6veg77bi3k.apps.googleusercontent.com"}
        // clientId="920450409324-dr6oficri8basjuvt765sag2njgub8du.apps.googleusercontent.com"
        buttonText="Sign In With Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
        /> */}
        </div>
        <br></br>
        <p style={{
          marginLeft: "45%"
        }}>or</p>
        <br></br>
        <div className="input-div">
          <p>+91|</p><input type="text" className="input" placeholder="Enter your mobile number" required />
          <button onClick={() => {
            setOtpPopup(true);
            setButtonPopup(false)
          }} className="otp-btn">send</button>
        </div>
      </Login>
      <Login otpTrigger={otpPopup} setOtpTrigger={setOtpPopup} setTrigger={setButtonPopup}>
        <p className="text">Enter the OTP</p>
        <input type="text" className="otp-inp" placeholder="Enter OTP" onKeyDown={handleKeyDown} />
      </Login>
      </div>
    </>
  )
}

export default Navbar