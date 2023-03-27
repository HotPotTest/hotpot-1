import React from 'react'
import { width } from '@mui/system'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Questions.css'
import QuestionCard from '../Cards/QuestionCard'
import {GetQuesionByMovies} from '../Api/index'

export const Questions = ({row_title}) => {
  const ref = useRef(null);
  const scroll = (offset) => {
    console.log(ref.current)
    ref.current.scrollLeft += offset;
  };
    const{id, category} = useParams()
    const [data, setData] = useState([])
    useEffect(() => { getData() }, [id])
    const getData = async () => {
      GetQuesionByMovies({id}).then((res)=>{
      setData(res?.data?.result)
    })
    }
    console.log("datadatadatadata",data)
 
  return (
    <>
          <h3 className="text-left">{row_title}</h3>
          {data?.map((el)=>
          <QuestionCard data={el}/>
          )}
    </>
  )
}
