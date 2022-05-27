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
export default function Answer(props) {


  return (
    <ul className='tourlist'>
          {
            props.data.map(elem =>{
              return <li className='tour' key={elem.id}>
              <div className='name'>
                  {elem.name}
                  <div className='ticket'>
                    <div className='ticketLimit'>
                      <img src={fire} />
                      <span> <b>{elem.ticket_count} </b>билета</span>
                    </div>
                </div>
              </div>
              
              <div className='main_info'>
                <div className='info_container'>
                  <div className='container_1'>
                    <div className='hotel'>
                      <span>
                        <img src={home}/>
                      </span>
                      {elem.hotel}
                    </div>
                    <div className='country'>
                      <span>
                        <img src={country}/>
                      </span>
                      {elem.country}
                    </div>
                  </div>
                  <div className='container_2'>
                    <div className='date'>
                      <span>
                        <img src={flyto}/>
                      </span>
                      {elem.depart_date.split("-").reverse().join(".")}
                    </div>
                    <div className='totime'>
                      <span>
                        <img src={flyback} />
                      </span>
                      {
                      elem.arrive_date.split("-").reverse().join(".")
                      }
                    </div>
                  </div>
                  <div className='container_3'>
                    <div className='plus'>
                        <img src={plus} />
                        <span>
                          {elem.description_plus} 
                        </span>
                    </div>
                    <div className='minus'>
                      <img src={minus}/>
                        <span>
                          {elem.description_minus} 
                        </span>
                    </div>
                  </div>
                </div>
              </div>
              
              </li>
            })
          }
    </ul>
  )
}
