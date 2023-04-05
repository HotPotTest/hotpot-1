import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Grid,TextField,Button} from '@mui/material'
import Popover from '@mui/material/Popover';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const QuestionCard = ({data}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [like,setLike] = useState(false)
  const handleLike = ()=> {
    setLike(!like)
  } 
  const [postAnswer,setPostAnswer] = useState()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
const {id} =  useParams()
const PostAnswerData = (QID) => {
  let ans = {
    whoseQuesId: QID, 
    whoseMovieId: "63f980fd27519651d886cc76", 
    answeredByWhichUser: "640484d5cb891647dcff7040",
    contentAns:postAnswer,
    spoiler:"false"
  }

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
};
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.post(
  '/api/v1/answer/postAnswer',
  ans,headers
  ).then((res)=>{
  console.log(res)
})
}
  const open = Boolean(anchorEl);
  const idData = open ? 'simple-popover' : undefined;
  return (
    <>
        <Grid xs={12} md={12} sx={{padding:0,margin:'20px 0px'}}>
          <Card style={{padding:"0px !important",textAlign:'left'}}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#6a6363" }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings" onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
              }
              title="Randive Omkar"
              subheader="21-Feb-2023 11:00 PM"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {data?.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="like">
                <ThumbUpOffAltIcon />
              </IconButton>
              <IconButton aria-label="dislike">
                <ThumbDownOffAltIcon />
              </IconButton>
              <IconButton aria-label="dislike">
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ChatBubbleOutlineIcon />
                </ExpandMore>
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
              <Card sx={{  marginTop: '10px' }}>
                  <CardContent sx={{paddingBottom:'0px'}}>
                    <TextField
                    sx={{width:"100%"}}
                    id="outlined-multiline-flexible"
                    label="Write your answer"
                    multiline
                    minRows={3}
                    maxRows={10}
                    onChange={(e)=>setPostAnswer(e.target.value)}
                  />                  </CardContent>
                  <CardActions sx={{display:"flex",alignItems:'right',justifyContent:'right', marginRight:'7px'}}>
                  <Button size="small"  type="submit" onClick={()=>PostAnswerData(data?._id)} variant="contained">Post</Button>
                  </CardActions>
                </Card>
                { data?.answers && data?.answers?.length && data?.answers?.map((el)=>
                <>{el?.contentAns ?<Card sx={{  marginTop: '10px' }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "#6a6363" }} aria-label="recipe">
                        {(el?.answeredByWhichUser[0]?.userName)?.charAt(0)}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={el?.answeredByWhichUser[0]?.userName}
                    subheader="22-Feb-2023 01:49AM"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {el?.contentAns}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="like" onClick={handleLike}>
                     {like ?<ThumbUpIcon/> : <ThumbUpOffAltIcon /> }
                    </IconButton>
                    <IconButton aria-label="dislike">
                      <ThumbDownOffAltIcon />
                    </IconButton>
                  </CardActions>
                </Card>
:""}</>)}
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Popover
        id={idData}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 1 }}>The content of the Popover.</Typography>
      </Popover>
      
    </>
  );
}
export default QuestionCard 