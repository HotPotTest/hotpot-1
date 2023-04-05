import React,{useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Modal,Grid } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { LeaderBoard } from '../Api';
const columns = [
  { field: 'id', headerName: 'ID',width:100 },
  { field: 'userName', headerName: 'Users',width:200},
  { field: 'correct_answers', headerName: 'Correct Answers', type: 'number',width:200},
  { field: 'coins', headerName: 'Coins Win',width:100 },
  { field: 'time_stamp', headerName: 'Played On',width:300},
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
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const LeaderBoardComp = ({row_title}) => {

    const [open, setOpen] = React.useState(false);
    const [Rows,setRows] = useState([])
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const GetLeaderBoard = () => {
      LeaderBoard().then((res)=>{
        console.log( "res",res.data)
        setRows(res.data?.leaderBoards)
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
            pageSize={5}
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
                <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">Start Quiz</h2>
                <p id="parent-modal-description">
                    Quiz questions will appear here
                </p>
                </Box>
            </Modal>
    </div>
  );
}

export default LeaderBoardComp;