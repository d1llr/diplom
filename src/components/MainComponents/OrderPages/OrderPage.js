import React, { useEffect, useState } from 'react'
import home from 'C:/diplom/src/img/home.svg'
import country from 'C:/diplom/src/img/country.svg'
import flyto from 'C:/diplom/src/img/flyto.svg'
import flyback from 'C:/diplom/src/img/flyback.svg'
import plus from 'C:/diplom/src/img/plus.svg'
import minus from 'C:/diplom/src/img/minus.svg'
import fire from 'C:/diplom/src/img/fire.svg'
import ModalOrder from './ModalOrder'
import Success from '../../Success'
import Room from './MenuComponents/Room'
import Services from './MenuComponents/Services'
import Fly from './MenuComponents/Fly'
import Date from './MenuComponents/Date'
import General from './MenuComponents/General'

export default function OrderPage(props) {
  const [ModalActive, setModalActive] = useState(false)
  const [elem, setElem] = useState()
  const [getInfo, setGetInfo] = useState(true)
  const [success, setSucces] = useState(false)
  const [menu, setMenu] =  useState('Услуги')
  const [Data, setData] = useState(
    [{
      // id: 0,
      // name : 'Великий отдых',
      // hotel : 'Apartamentos Mont Blanc Asn',
      // country : 'Турция',
      // depart_date : '13.05.2022',
      // arrive_date : '14.05.2022',
      // // toTime : 7,
      // ticket_limit : 500,
      // descriptionPlus: 'Авиаперелет,проживание,питание,трансферы,медицинская страховка,услуги гида',
      // descriptionMinus: 'Топливый сбор'
    }]
  )
  useEffect(() => {
    props.data ? setData(props.data) : console.log("Ошибка в компоненте OrderPage");
  })
  function TakingOrder(e) {
    setModalActive(true)
    console.log(e);
    setElem(e)
  }
  function GetMoreInfo() {
    setGetInfo(prev => !prev)
  }
  return (
    <section className='orderpage'>
      <div className='orderpage__contant'>
        <ul className='tourlist'>
          {
            Data.map(elem => {
              return <li className='tour' key={elem.id}>
                  <div className='name_and_hotel'>
                    {elem.name}
                    <img src={home}/>
                    {elem.hotel}
                  </div>
                  <div className='main-info'>
                    <ul className='menu'>
                      <li onClick={()=>setMenu('general')}>
                        Общее
                      </li>
                      <li onClick={()=>setMenu('services')}>
                        Услуги
                      </li>
                      <li onClick={()=>setMenu('room')}>
                        Выбор номера
                      </li>
                      <li onClick={()=>setMenu('fly')}>
                        Выбор рейса
                      </li>
                      <li onClick={()=>setMenu('date')}>
                        Даты
                      </li>
                    </ul>
                    {
                      menu === 'general' ? <General/> : menu === 'services' ? <Services/> : menu === 'room' ? <Room/> : menu === 'fly' ? <Fly/> : <Date/>
                    }
                  </div>
              </li>
            })
          }

        </ul>

      </div>
      < ModalOrder active={ModalActive} setActive={setModalActive} elem={elem} setSuccess={setSucces}>
      </ModalOrder>
      {success ? <Success /> : ''}
    </section>
  )
}
