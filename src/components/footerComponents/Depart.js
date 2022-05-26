import React, { Component, useRef } from 'react'
import date from './img/calendar.svg';
import next from './img/next.svg';
import { useState, useEffect } from 'react';

function Depart(props){
  const classname = 'days'
  const calendar =  useRef(null)
  const [menu, setMenu] = useState(false)
  const [Li, setLi] = useState(new Date().getDate())
  const [clicked,setClicked] = useState(false)
  const [DepartDate, setDepartDate] = useState('Выберите')
  const [counter, setCounter] = useState(new Date().getMonth())
  const [monthName, setMonthName] = useState(()=>{
    return props.Month[new Date().getMonth()];
  })
  function daysInMonth(counter){
    let now =  new Date(2022,counter);
    let x = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    let res = [];
    for (let i = 1; i<=x;i++){
      res.push(i);
    }
    return res;
    }
  useEffect(()=>{
    counter < 11? setMonthName(props.Month[counter]):setCounter(0)
  },[counter])

  useEffect(()=>{
    if (clicked){
      let x = new Date(new Date().getFullYear(),new Date().getMonth(),Li.innerHTML).toLocaleDateString()
      setDepartDate(x)
      props.ans(x)
    }
    else{
      setDepartDate('Выберите')
    }
  },[clicked])
  function changeClassName(e){
    if (clicked){
      console.log('Кнопка уже нажата');
      if (e == Li){
        setClicked(prev => !prev)
        e.className === 'first_days clicked' ? e.className = 'first_days' : e.className = 'days'
      }
    }
    else{
      e.className += " clicked"
      setLi(e) 
      setClicked(prev => !prev)
    }
    
  }
  useEffect(()=>{
    menu ? calendar.current.className = 'calendar' : calendar.current.className += ' hidden'
  },[menu])
    return (
        <section className="depart" >
        <div className="depart_container">
            <img src={date} alt=""/>  
            <div className="depart_container_text" onClick={()=>setMenu(prev=>!prev)}>
                <span className="text">Въезд</span>
                <span className="depart_data"><i>{DepartDate}</i></span>
            </div>
            <div ref = {calendar} className='calendar hidden'>
              <div className='nowMonth'>
                  <div className='name_of_month'>
                    <span>{monthName}</span>
                    <img src={next} onClick = {()=>setCounter(prev=>prev+1)}/>
                  </div>
                  <ul>
                  {daysInMonth(counter).map(elem=> elem === 1 ? <li className='first_days' key={elem} onClick = {e => changeClassName(e.target)}>{elem}</li> : <li className={classname} key={elem} onClick = {e => changeClassName(e.target)}>{elem}</li>)}
                  </ul>
              </div>
            </div>
        </div>
        
    </section>
    )
  }


  export default Depart;
