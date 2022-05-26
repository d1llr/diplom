import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import next from './img/next.svg';


export default function Arrive(props){
  const classname = 'days'
const calendar =  useRef(null)
const [menu, setMenu] = useState(false)
const [Li, setLi] = useState(new Date().getDate())
const [clicked,setClicked] = useState(false)
const [ArriveDate, setArriveDate] = useState('Выберите')
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
  console.log(counter);
  counter < 11? setMonthName(props.Month[counter]):setCounter(0)
},[counter])

useEffect(()=>{
  if (clicked){
    let x = new Date(new Date().getFullYear(),new Date().getMonth(),Li.innerHTML).toLocaleDateString()
    setArriveDate(x)
    props.ans(x)
  }
  else{
    setArriveDate('Выберите')
  }
},[clicked])
function changeClassName(e){
  if (clicked){
    console.log('Кнопка уже нажата');
    if (e == Li){
      console.log('Изменение класса');
      setClicked(prev => !prev)
      e.className === 'first_days clicked' ? e.className = 'first_days' : e.className = 'days'
    }
  }
  else{
    console.log('key =' + e)
    e.className += " clicked"
    setLi(e) 
    setClicked(prev => !prev)
  }
  
}
useEffect(()=>{
  console.log(calendar);
  console.log(menu);
  menu ? calendar.current.className = 'calendar_next' : calendar.current.className += ' hidden'
},[menu])
    return (
      <section className="arrive" onClick={()=>setMenu(prev=>!prev)}> 
        <div className='arrive_container'>
          <span className="text">Выезд</span>
          <span className="arrive_data"><i>{ArriveDate}</i></span>        
          <div ref = {calendar} className='calendar_next'>
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
