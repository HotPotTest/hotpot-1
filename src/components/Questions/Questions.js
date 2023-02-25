import React from 'react'
import { width } from '@mui/system'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Questions.css'
import QuestionCard from '../Cards/QuestionCard'


export const Questions = ({row_title}) => {
  const ref = useRef(null);
  const scroll = (offset) => {
    console.log(ref.current)
    ref.current.scrollLeft += offset;
  };
    const{id, category} = useParams()
    const [data, setData] = useState([])

    const getData = async () => {
      const url = '';
      const a = await axios.get(url)
      setData(a.data.results)
    }
  //   let baseImgUrl = "http://localhost:3000/wakanda.jpg";
    useEffect(() => { getData() }, [id,category])
  return (
    <>
        <div className="row-title text-left">
          <h3 className="text-left">{row_title}</h3>
          <QuestionCard />
        </div>
    </>
  )
}
