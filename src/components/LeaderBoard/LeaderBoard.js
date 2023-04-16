import React,{useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Modal,Grid,Typography } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { LeaderBoard } from '../Api';
import { useParams } from 'react-router-dom'
import CustomizedSnackbars from '../Toast/Toast'
import moment from 'moment/moment';
import Quize from '../Quize/index'
const columns = [
  { field: 'userName', headerName: 'Users',width:200,
  renderCell: (params) => {
   return (
    <Typography variant="subtitle2">
      {params.row.userId.firstName}
    </Typography>
  )}},
  { field: 'correctAns', headerName: 'Correct Answers', type: 'number',width:200},
  { field: 'coins', headerName: 'Coins Win',width:100 },
  { field: 'timeStamp', headerName: 'Played On',width:300 ,
  renderCell: (params) => {
    console.log(params.row.timeStamp)
   return (
    <Typography variant="subtitle2">
      {moment(params.row.timeStamp).format("DD/MM/YYYY hh:mm A")}
    </Typography>
  )}
},
];

const rows = [
  { id: 1, user: 'Omkar Randive', correct_answers: 4, coins_win: 8, played_on: '20-Feb-2023 08:00 PM'},
  { id: 2, user: 'Deepti Gatne', correct_answers: 5, coins_win: 10, played_on: '20-Feb-2023 08:00 PM'},
  { id: 3, user: 'Kanika Arora', correct_answers: 4, coins_win: 8, played_on: '20-Feb-2023 08:00 PM'},
];



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'rgb(61, 61, 61)',
      boxShadow: 24,
    p: 2,
    height:400
  };

const LeaderBoardComp = ({row_title}) => {
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const [showMessage, setShowMessage] = useState({
    message: "",
    visible: false,
    type: "success",
  });
    const [open, setOpen] = React.useState(false);
    const [Rows,setRows] = useState([])
    const{id, category} = useParams()

 
    const handleClose = () => {
        setOpen(false);
    };
    let user = JSON.parse(localStorage.getItem("user"))
    const checkIfLoggedIn = async () => {
      if (user) {
        setIsLoggedIn(true)    }
    };
    useEffect(() => {
      checkIfLoggedIn();
    }, [user]);
    const handleOpen = () => {
      if(!isLoggedIn){
        setShowMessage({
          message: "Please login first to play quize",
          visible: true,
          type: "error",
        });
      }else{
        setOpen(true);

      }
    };
    const GetLeaderBoard = () => {
      LeaderBoard({id}).then((res)=>{
        console.log( "res",res.data)
        setRows(res.data?.leaderBoard)
      })
    }
    useEffect(()=>{
      GetLeaderBoard()
    },[])

  return (
    <div className="row-title text-left">
        
          
            <Grid container spacing={5} direction="row"
  justifyContent="center"
  alignItems="center">
        <Grid item xs={12} md={10}>
        <h3 className="text-left">{row_title}

<Button size="small" onClick={handleOpen} style={{ float: "right" }} variant="contained" startIcon={<PlayCircleOutlineIcon />}>
    Play Quiz
</Button> </h3>
        <div style={{ height: 400}}>
        <DataGrid
            rows={Rows}
            columns={columns}
            pageSize={20}
            getRowId={(row) => row._id}
            rowsPerPageOptions={[5]}
        />
        </div>
        </Grid>
        </Grid>

        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style,}}>
                <Quize id={id} token={user?.token} user_id ={user?.data?.user?._id} handleClose={handleClose} />
                </Box>
            </Modal>
            {showMessage.visible && (
        <CustomizedSnackbars
          showMessage={showMessage}
          setShowMessage={setShowMessage}
        />
      )}
    </div>
  );
}

export default LeaderBoardComp;