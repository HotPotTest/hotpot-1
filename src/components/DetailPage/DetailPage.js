import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Banner from '../Banner/Banner'
import CardRows from '../CardRows/CardRows'
import axios from 'axios'
import DirectorCasts from '../DirectorCasts/DirectorCasts'
import Trailer from '../Trailer/Trailer'
import { Questions } from '../Questions/Questions'
import LeaderBoard from '../LeaderBoard/LeaderBoard'

const DetailPage = (props) => {
  const {id, category} = useParams();
  useEffect(() => { getData() }, [id])
  const [data, setData] = useState({})
  const getData = async () => {
    const url = `https://api.themoviedb.org/3/${category}/${id}?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US`
    const a = await axios.get(url)
    setData(a.data)
  }

  let baseImgUrl = 'http://localhost:3000/'
//   let baseImgUrl = 'https://image.tmdb.org/t/p/original'
  console.log("data is not coming",data);
  return (
    <>
    <div key={props.pageId}>
      <Banner original_title={data.original_title} id={id}  img={`${baseImgUrl}${'banner1.jpg'}`} title={data.original_title || data.name} description={data.overview}></Banner>
      <DirectorCasts row_title="Directors & Casts"></DirectorCasts>
      <Trailer row_title="Trailers & Other"></Trailer>
      <div style={{display:'flex', flexDirection: 'row'}}>
        <Questions row_title="Questions & Answers"></Questions>
        <LeaderBoard row_title="Leader Board"> </LeaderBoard>
      </div>
    </div>
    </>
  )
}

export default DetailPage