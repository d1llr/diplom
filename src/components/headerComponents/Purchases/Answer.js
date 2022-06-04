import React from 'react'
import { useContext, useState } from 'react'
import home from 'C:/diplom/src/img/home.svg'
import country from 'C:/diplom/src/img/country.svg'
import departD from 'C:/diplom/src/img/calendar.svg'
import totime from 'C:/diplom/src/img/totime.svg'
import plus from 'C:/diplom/src/img/plus.svg'
import minus from 'C:/diplom/src/img/minus.svg'
import fire from 'C:/diplom/src/img/fire.svg'
import flyto from 'C:/diplom/src/img/flyto.svg'
import flyback from 'C:/diplom/src/img/flyback.svg'
export default React.memo(function Answer(props) {
console.log(1);
  return (
    <ul className='person-tourlist'>
          {
            props.data.map(elem =>{
              return <li className='person-tour' key={elem.id}>
                <div className='order_number'>
                  №&nbsp;
                  {elem.id},&nbsp;{JSON.parse(elem.info).tour_name}
                </div>
                <div className='text'>
                  Странa:&nbsp;
                  <span>{JSON.parse(elem.info).tour_country}</span>
                </div>
                <div className='text'>
                  Отель:&nbsp;
                  <span>{JSON.parse(elem.info).tour_hotel}</span>
                  
                </div>
                <div className='text'>
                  Номер класса:&nbsp;
                  <span>{JSON.parse(elem.info).tour_room_name === 'standart_room' ? 'Стандарт':
                  JSON.parse(elem.info).tour_room_name === 'eco_room'?'Эконом':
                  JSON.parse(elem.info).tour_room_name === 'luxury_room'?'Люкс':''}</span>
                </div>
                <div className='text'>
                  Места в самолете класса:&nbsp;
                  <span>
                    {JSON.parse(elem.info).tour_flydata_name === 'standart' ? 'Стандарт' : 
                  JSON.parse(elem.info).tour_flydata_name === 'bisness'? 'Бизнес':
                  JSON.parse(elem.info).tour_flydata_name === 'eco'?'Эконом':''}
                  </span>
                  
                </div>
                <div className='text'>
                  Вылет:&nbsp;
                  <span>
                    {JSON.parse(elem.info).tour_date_to}
                  </span>
                  
                </div>
                <div className='text'>
                  Возвращение:&nbsp; 
                  <span>
                    {JSON.parse(elem.info).tour_date_from}
                  </span>
                  
                </div>
                <div className='text'>
                  Количество билетов:&nbsp;
                  <span>
                    {elem.tickets_count}
                  </span>
                  
                </div>
                <div className='price'>
                  Итого:&nbsp;{JSON.parse(elem.info).tour_price}₽ 
                </div>

                {/* {JSON.parse(elem.info).tour_room_price} */}
                {/* {JSON.parse(elem.info).tour_flydata_price} */}
              </li>
            })
          }
    </ul>
  )
})
