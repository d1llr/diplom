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

export default function OrderPage(props) {
  const [ModalActive, setModalActive] = useState(false)
  const [elem,setElem] = useState()
  const [success, setSucces] = useState(false)
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
  useEffect(()=>{
  props.data ? setData(props.data) : console.log("Ошибка в компоненте OrderPage");
  })
  function TakingOrder(e){
    setModalActive(true)
    console.log(e);
    setElem(e)
  }
  function GetMoreInfo(){

  }
  return (
    <section className='orderpage'>
      <div className='orderpage__contant'>
        <ul className='tourlist'>
          {
            Data.map(elem =>{
              return <li className='tour' key={elem.id}>
                <div className='main_info'>
                    <div className='name'>
                {elem.name}
                </div>
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
                        {elem.depart_date}
                      </div>
                      <div className='totime'>
                        <span>
                          <img src={flyback} />
                        </span>
                        {elem.arrive_date}
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
              
              <div className='ticket'>
                  <div className='ticketLimit'>
                    <img src={fire} />
                    <span><b>{elem.ticket_limit} </b>билетов</span>
                  </div>
                  <div className='global_price'>
                    <div className='price'>
                        <span className='text'>
                          Цена до
                        </span>
                        <span className='numbers'>
                        {elem.price} ₽
                        </span>
                    </div>
                    <div className='price_with_discount'>
                      <span className='text'>
                      Цена после
                      </span>
                      <span className='numbers'>
                        {elem.price-(elem.price*(elem.discount/100))}  ₽
                      </span>
                    </div>
                    
                  </div>
                  <button className='Custom_Button_more' key={elem.id} onClick={(e)=>GetMoreInfo()}>
                    Подробнее
                  </button>
                  <button className='Custom_Button' key={elem.id} onClick={(e)=>TakingOrder(elem)}>
                    Купить
                  </button>
              </div>
              </li>
            })
          }
          
        </ul>
        
      </div>
      < ModalOrder active = {ModalActive} setActive = {setModalActive} elem = {elem} setSuccess = {setSucces}>
      </ModalOrder>
      {success ? <Success/> : ''}
    </section>
  )
}
