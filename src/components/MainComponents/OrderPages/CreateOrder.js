import React, { useState } from 'react'
import Contry from './Contry'
import {Link } from 'react-router-dom';

export default function CreateOrder(props) {
  const [country, setCountry] = useState()
  function CallToDataBase(country){
    if (country){
      let xhr = new XMLHttpRequest();
      xhr.open('GET', `http://romanmadraimov.diplom/getDataForCountry/${country}`);
      xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
              props.setData(JSON.parse(xhr.response));
          }
      }
      xhr.send();
    }
    
  }
  return (
      <aside className='CreateOrder'>
        <div className='CreateOrder_container'>
          <span className='text'>
            Найдите подходящий тур
          </span>
          <Contry setCountry = {setCountry}/>
        </div>
        <Link to="OrderPage">
          <button className='Custom_Button' onClick={()=>CallToDataBase(country)}>
            Найти
          </button>
        </Link>
      </aside>
  )
}
