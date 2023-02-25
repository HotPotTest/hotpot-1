import React from 'react'
import './TrailerCard.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const TrailerCard = ({ id, title, description, imageUrl, media_type }) => {
    let baseImgUrl = "http://localhost:3000"; // + imageUrl
    const [data, setData] = useState({});
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/${media_type || `movie`}/${id}?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US`;
      const a = await axios.get(url);
      setData(a.data);
    };
  
    useEffect(() => {
      getData();
    }, []);
  return (
    <>
        <>
            {/* <div className="trailer-row-card">
                <iframe width="400" height="200" src="https://www.youtube.com/embed/_Z3QKkl1WyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className="trailer-row-card">
            </div> */}
             <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <iframe width='100%' height='200' src="https://www.youtube.com/embed/_Z3QKkl1WyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </Grid>
        <Grid item xs={12} md={4}>
        <iframe width='100%' height='200' src="https://www.youtube.com/embed/RlOB3UALvrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Grid>
        
      </Grid>
    </Box>

        </>
    </>
  )
}

export default TrailerCard