import React, { useContext, useEffect, useRef, useState } from 'react'
import longArrow from "C:/diplom/src/img/longArrow.svg";
import Japan from 'C:/diplom/src/img/japan.svg';
import CreateOrder from './OrderPages/CreateOrder'
import { Routes } from 'react-router-dom';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { OrderContext } from '../OrderContext';
import OrderPage from './OrderPages/OrderPage';
import Mistake from './Mistake'
import Slider from '../MainComponents/Slider/Slider'
import { SliderContext } from '../SliderContext';



export default function Main(props) {
    const img = [
        <img src={longArrow} className="next-page-slider" />     
    ]
    const {MainText,nextMainText} = useContext(SliderContext)
  return (
    <main className='egipt_container'>
        <div className="main-text">
            <h1>
                {MainText.h1}
            </h1>
            <h3> 
                {MainText.h3}
            </h3>
            <CreateOrder setData = {props.setData}/>
        </div>
        <div className='nextPage'>
            <div className='textSide'>
                <span><i>Следующее</i></span>
                <i>{nextMainText}</i>
                {img}
            </div>
            <Slider />
        </div>
        {/* <Routes>
            <Route path='/OrderPage' element = { Data ? <OrderPage data = {Data}/> : <Mistake />}/>
        </Routes> */}
    </main>
  )
}
