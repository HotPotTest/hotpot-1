import React from 'react'
import './Cards.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Cards = ({ id, title, description, imageUrl, media_type }) => {
    let baseImgUrl = "https://image.tmdb.org/t/p/original"; // + imageUrl
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
    <Link to={`/movie/${id}`}>
      <div
        style={{
          backgroundImage: `url(wakanda.jpg)`,
          // backgroundImage: `url(${baseImgUrl + data.poster_path})`,
        }}
        className="row-card"
      >
        <div className="wrap">
          <div className="card-gradient">
            <div className="card-content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </>
  )
}

export default Cards