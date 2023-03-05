import React from 'react'
import './Navbar.css'
import '../Login/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
import Search from '../Search/Search'
import Login from '../Login/Login'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const Navbar = () => {
  const [ auth, setAuth] = useState(localStorage.getItem('user')? true : false)
  const{category} = useParams()
  const [buttonPopup, setButtonPopup] = useState(false);
  const [otpPopup, setOtpPopup] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <div  onClick={handleOpen}>
            Login
          </div>       
        </div>
      </div>
      <div>
      
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Login/>
               </Box>
      </Modal>
    </>
  )
}

export default Navbar
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0',
  boxShadow: 24,
  p: 1,
};