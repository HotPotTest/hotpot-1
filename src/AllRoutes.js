import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import DetailPage from './components/DetailPage/DetailPage';

const AllRoutes = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route  path={`/:category/:id`}  element={<DetailPage></DetailPage>}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes