import React, { useContext, useState } from 'react'
import { AnswerContext } from '../../AnswerContext'
import { MenuContext } from '../General/MenuContext'

export default React.memo(function Fly() {
  const { flight } = useContext(MenuContext)
  const { answer, setAnswer } = useContext(AnswerContext)
  const [nextStep, setNextStep] = useState(answer.date ? true : false)
  // const One = JSON.parse(Flight.one)
  const fly = JSON.parse(flight.flight)
  const [chosenDate, setChosenDate] = useState()
  const [chosenFlight, setChosenFlight] = useState()
  const DateChoosen = (elem) => {
    if (chosenDate) {
      chosenDate.className = 'button'
      chosenDate.innerHTML = 'Выбрать'
      setChosenDate(elem)
      elem.className = 'button active'
      elem.innerHTML = 'Выбрано'
    }
    else {
      setChosenDate(elem)
      elem.className = 'button active'
      elem.innerHTML = 'Выбрано'
    }
  }
  const FlightChoosen = (elem) => {
    if (chosenFlight) {
      chosenFlight.className = 'button'
      chosenFlight.innerHTML = 'Выбрать'
      setChosenFlight(elem)
      elem.className = 'button active'
      elem.innerHTML = 'Выбрано'
    }
    else {
      setChosenFlight(elem)
      elem.className = 'button active'
      elem.innerHTML = 'Выбрано'
    }
  }
  /// остановился тут
  function TakeDate(elem, str) {
    DateChoosen(elem)
    setAnswer({
      ...answer,
      date: str
    })
    setNextStep(true)
  }
  function Takeflight(elem, number, str) {
    FlightChoosen(elem)
    console.log(answer);
    setAnswer({
      ...answer,
      flyData: {
        name:str,
        price:number
      }
    })
  }
  return (
    <div className='fly'>
      <ul className='data_list'>
        {Object.keys(fly).map(key => {
          return <div className='button-container' key={key}>
            <div className='price'>
              {fly[key].to} - {fly[key].from}
            </div>
            {
              answer.date === `${fly[key].to} - ${fly[key].from}` ?
                <div className='button active'>
                  Выбрано
                </div> :
                <div className='button' onClick={(e) => TakeDate(e.target, `${fly[key].to} - ${fly[key].from}`)}>
                  Выбрать
                </div>
            }
          </div>
        })}
      </ul>
      {
        nextStep ?
          <ul className='type_flight'>
            <li>
              <span className='name'>
                Эконом
              </span>
              <ul className='properties'>
                <li className='properties-li'>
                  - места класса "Эконом"
                </li>
                <li className='properties-li'>
                  - ограниченные услуги
                </li>
                <li className='properties-li'>
                  - ограниченный объем ручной клади
                </li>
                <li className='properties-li'>
                  - Зал ожиданий без привилегий
                </li>
              </ul>
              <div className='button-container' >
                <div className='price'>
                  5 000
                </div>
                {
                  answer.flyData.name === 'eco' ?
                    <div className='button active'>
                      Выбрано
                    </div> :
                    <div className='button' onClick={(e) => Takeflight(e.target, '5000','eco')}>
                      Выбрать
                    </div>
                }
              </div>
            </li>
            <li>
              <span className='name'>
                Стандарт
              </span>
              <ul className='properties'>
                <li className='properties-li'>
                  - места класса "Люкс"
                </li>
                <li className='properties-li'>
                  - стандартные услуги
                </li>
                <li className='properties-li'>
                  - увеличенный объем ручной клади
                </li>
                <li className='properties-li'>
                  - Зал ожиданий с некоторыми привилегиями
                </li>
              </ul>
              <div className='button-container' >
                <div className='price'>
                  10 000
                </div>
                {
                  answer.flyData.name === 'standart' ?
                    <div className='button active'>
                      Выбрано
                    </div> :
                    <div className='button' onClick={(e) => Takeflight(e.target, '10000','standart')}>
                      Выбрать
                    </div>
                }
              </div>
            </li>
            <li>
              <span className='name'>
                Бизнес
              </span>
              <ul className='properties'>
                <li className='properties-li'>
                  - места класса "Люкс"
                </li>
                <li className='properties-li'>
                  - максимальный пакет услуг
                </li>
                <li className='properties-li'>
                  - неограниченный объем ручной клади
                </li>
                <li className='properties-li'>
                  - Зал ожиданий со всеми привилегиями
                </li>
              </ul>
              <div className='button-container' >
                <div className='price'>
                  15 000
                </div>
                {
                  answer.flyData.name === 'bisness' ?
                    <div className='button active'>
                      Выбрано
                    </div> :
                     <div className='button' onClick={(e) => Takeflight(e.target, '15000','bisness')}>
                     Выбрать
                   </div>
                }
              </div>
            </li>
          </ul> :
          ''
      }
    </div>
  )
})
