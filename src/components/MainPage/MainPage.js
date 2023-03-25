import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import Banner from '../Banner/Banner'
import CardRows from '../CardRows/CardRows'
import {GetMovieList} from '../Api/index'
const MainPage = () => {
  
    const {category,language} = useParams()
    const [data, setData] = useState([]);
  
    useEffect(() => {
      getData()
    }, [category,language]);

    const [movieList,setMovieList] = useState()
    const GetMoviesList = () => {
      GetMovieList().then((res)=>setMovieList(res?.data?.movies))
    }
    useEffect(()=>{
      GetMoviesList()
    },[])
    const getData = () => {
      axios
        .get(
          `https://hotstar-v.herokuapp.com/${category || "movies"}?language=${language?language:"en"}`
        )
        .then((res) => {
          setData(res.data.results);
        });
    };
  
    const row_titles = [
      { category: "Popular Shows", language: "en" },
      { category: "Latest & Trending", language: "hi" },
      { category: "Shows Recommended For You", language: "ta" },
      { category: "Action", language: "ml" },
      { category: "Movies Recommended For You", language: "te" },
    ];
    let baseImgUrl = 'https://image.tmdb.org/t/p/original'
   console.log(movieList)
  let PopularMovieList = movieList?.filter((v)=>v.category == 'popular')
  return (
    <>
        <Carousel
            autoPlay
            interval={5000}
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            transitionTime={700}
            showThumbs={false}
        >
        {/* {data.map((el, index) => ( */}
          <Banner
          idm ="0"
          key="0"
          img="banner1.jpg"
        //   img={`${baseImgUrl}${el.backdrop_path}`}
          title="Infinity War"
          genre="English"
          description="On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment."
          mediaType = "jpg"
          />
          {/* ))} */}
      </Carousel>
      <CardRows row_title={`Popular`} data={PopularMovieList}></CardRows>
      <CardRows row_title={`Latest`} ></CardRows>
      <CardRows row_title={`TV Series`} ></CardRows>
      <CardRows row_title={`Movies you might follow`} ></CardRows>

    </>
  )
}

export default MainPage