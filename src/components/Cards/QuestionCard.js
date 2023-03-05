import * as React from 'react';
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
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Grid,TextField,Button} from '@mui/material'
import Popover from '@mui/material/Popover';
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

const QuestionCard = () => {
  const [expanded, setExpanded] = React.useState(false);

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

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
        <Grid xs={12} md={12} sx={{padding:0}}>
          <Card style={{padding:"0px !important",textAlign:'left'}}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
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
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
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
        />                  </CardContent>
                  <CardActions sx={{display:"flex",alignItems:'right',justifyContent:'right', marginRight:'7px'}}>
                  <Button size="small" variant="contained">Post</Button>
                  </CardActions>
                </Card>
                <Card sx={{  marginTop: '10px' }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        K
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Kanika Arora"
                    subheader="22-Feb-2023 01:49AM"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="like">
                      <ThumbUpOffAltIcon />
                    </IconButton>
                    <IconButton aria-label="dislike">
                      <ThumbDownOffAltIcon />
                    </IconButton>
                  </CardActions>
                </Card>

                <Card sx={{  marginTop: '10px' }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        D
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Deepti Gatne"
                    subheader="22-Feb-2023 02:15AM"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="like">
                      <ThumbUpOffAltIcon />
                    </IconButton>
                    <IconButton aria-label="dislike">
                      <ThumbDownOffAltIcon />
                    </IconButton>
                  </CardActions>
                </Card>

              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Popover
        id={id}
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