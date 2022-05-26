import React, { useState } from 'react'
import Contry from './Contry'
import {Link } from 'react-router-dom';

export default function CreateOrder(props) {
  function CallToDataBase(Data){
    if (Data){
      let xhr = new XMLHttpRequest();
      let formData = new FormData();
      formData.set('data',Data)
      xhr.open('GET', `http://romanmadraimov.diplom/getDataForCountry/${Data}`);
      // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
              props.setResultData(JSON.parse(xhr.response));
          }
      }
      xhr.send();
      console.log('Запрос отправлен', formData);
    }
    
  }
  return (
      <aside className='CreateOrder'>
        <div className='CreateOrder_container'>
          <span className='text'>
            Найдите подходящий тур
          </span>
          <Contry ans = {props.ans}/>
        </div>
        <Link to="OrderPage">
          <button className='Custom_Button' onClick={()=>CallToDataBase(props.DataToSearch)}>
            Найти
          </button>
        </Link>
      </aside>
  )
}
