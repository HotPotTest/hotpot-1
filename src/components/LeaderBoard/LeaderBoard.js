import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Modal } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const columns = [
  { field: 'id', headerName: 'ID' , width: '50'},
  { field: 'user', headerName: 'Users', width: '150'},
  { field: 'correct_answers', headerName: 'Correct Answers', type: 'number', width: '100'},
  { field: 'coins_win', headerName: 'Coins Win' },
  { field: 'played_on', headerName: 'Played On', width: '180'},
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

const LeaderBoard = ({row_title}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div className="row-title text-left" style={{ width: 600 }}>
        <h3 className="text-left">{row_title}

        <Button size="small" onClick={handleOpen} style={{ float: "right" }} variant="contained" startIcon={<PlayCircleOutlineIcon />}>
            Play Quiz
        </Button> </h3>
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
        <div style={{ height: 400, width: 600 }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
        />
        </div>
    </div>
  );
}

export default LeaderBoard;