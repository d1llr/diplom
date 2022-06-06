import React, { useEffect, useState } from 'react'
import ModalOrder from './ModalOrder'
import Success from '../../Success'
import Tour from './Tour'
import BtnSlider from './BtnSlider'
import Loader from './MenuComponents/Loader/Loader'
export default function OrderPage(props) {
  const [ModalActive, setModalActive] = useState(false)
  const [elem, setElem] = useState()
  const [slideIndex, setSlideIndex] = useState(1)
  const [getInfo, setGetInfo] = useState(true)
  const [success, setSucces] = useState(false)
  const [menu, setMenu] = useState('Услуги')
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
  const nextSlide = () => {
    if (slideIndex !== Data.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === Data.length) {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1) {
      setSlideIndex(Data.length)
    }
  }
  return (
    <section className='orderpage'>
      <div className='orderpage__contant'>
        <ul className='tourlist'onLoad={() => {
            setTimeout(() => {
                let preloader = document.getElementById('pre-loader-tour');
                if (!preloader.classList.contains('done')) {
                    preloader.classList.add('done')
                }
            }, 1000)
        }}>
            <Loader/>
          {
            Data.map((elem, index) => {
              return <Tour elem={elem} classNames={slideIndex === index + 1 ? "tour active-anim" : "tour"} />
            })

          }
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        </ul>

      </div>
      < ModalOrder active={ModalActive} setActive={setModalActive} elem={elem} setSuccess={setSucces}>
      </ModalOrder>
      {success ? <Success /> : ''}
    </section>
  )
}
