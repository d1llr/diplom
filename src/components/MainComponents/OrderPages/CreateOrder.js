import React, { useEffect, useState } from 'react'
import Contry from './Contry'
import { Link } from 'react-router-dom';

export default function CreateOrder(props) {
  const [country, setCountry] = useState()
  const [cl, setCl] = useState('select-Countrys')
  function CallToDataBase(country) {
    if (country) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', `http://82.146.63.178/getDataForCountry/${country}`);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          props.setData(JSON.parse(xhr.response));
        }
      }
      xhr.send();
      setCl('select-Countrys')
    }
    else {
      setCl('select-Countrys false')
    }

  }
  return (
    <aside className='CreateOrder'>
      <div className='CreateOrder_container'>
        <span className='text'>
          Найдите подходящий тур
        </span>
        <Contry setCountry={setCountry} class={cl} />
      </div>
      {country ?
        <Link to="OrderPage">
          <button className='Custom_Button true' onClick={() => CallToDataBase(country)}>
            Найти
          </button>
        </Link> :
        <button className='Custom_Button' onClick={() => CallToDataBase(country)}>
          Найти
        </button>
      }
    </aside>
  )
}
